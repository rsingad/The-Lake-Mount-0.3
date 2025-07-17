// src/components/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import ProcessStepper from './ProcessStepper'; // Import the ProcessStepper component

// No axios or Razorpay imports as per the current scope

// Added a prop `initialRoom` to pre-select a room when used on RoomDetailPage
function BookingForm({ initialRoom = null }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(initialRoom ? parseInt(initialRoom.capacity.split(' ')[0]) : 1); // Pre-fill guests if initialRoom has capacity
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState(initialRoom ? initialRoom.id : '');
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: '...' }
  const [loading, setLoading] = useState(false); // Used for UI loading state
  const [currentStep, setCurrentStep] = useState(0); // 0: Select Details, 1: Confirm & Pay, 2: Booking Confirmed

  // Define the steps for the ProcessStepper
  const bookingSteps = ['Select Details', 'Confirm & Pay', 'Booking Confirmed'];

  // **Static Data: Use this until you have a backend**
  // Ensure these match the IDs and data in RoomDetailPage's allRoomsData
  const staticRoomTypes = [
    { _id: '1', name: 'Deluxe Lake View Room', price: 15000, maxGuests: 2, description: 'Spacious rooms with panoramic lake views.', image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { _id: '2', name: 'Executive Lake Suite', price: 25000, maxGuests: 3, description: 'Luxury suites with separate living areas.', image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { _id: '3', name: 'Grand Family Retreat', price: 20000, maxGuests: 4, description: 'Comfortable and cozy rooms with all amenities.', image: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { _id: '4', name: 'Presidential Lakefront Villa', price: 50000, maxGuests: 4, description: 'The epitome of luxury, featuring multiple rooms, a private dining area, and personalized butler service with stunning lakefront views.', image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
  ];

  const [availableRoomTypes, setAvailableRoomTypes] = useState(staticRoomTypes);
  const [availableRoomForBooking, setAvailableRoomForBooking] = useState(null); // Selected room after availability check

  // Effect to set initial room if provided (e.g., from RoomDetailPage)
  useEffect(() => {
    if (initialRoom) {
      setSelectedRoomTypeId(initialRoom.id);
      setGuests(parseInt(initialRoom.capacity.split(' ')[0]) || 1);

      // Initialize check-in and check-out dates to today and tomorrow
      const todayDate = new Date();
      const tomorrowDate = new Date(todayDate);
      tomorrowDate.setDate(todayDate.getDate() + 1);

      setCheckIn(todayDate.toISOString().split('T')[0]);
      setCheckOut(tomorrowDate.toISOString().split('T')[0]);

      // Set availableRoomForBooking using the initialRoom (which has 'price')
      setAvailableRoomForBooking({
        _id: initialRoom.id,
        roomNumber: 'N/A', // Not relevant for static data
        roomType: initialRoom // This object has 'price', not 'pricePerNight'
      });
      setCurrentStep(1); // Move to confirmation step if initial room is provided
    }
  }, [initialRoom]);


  const handleAvailabilityCheck = (e) => {
    e.preventDefault();
    setMessage(null);
    setAvailableRoomForBooking(null);
    setCurrentStep(0); // Reset to first step on new check
    setLoading(true);

    if (!checkIn || !checkOut || !selectedRoomTypeId || !guests) {
      setMessage({ type: 'error', text: 'Please fill in all booking details.' });
      setLoading(false);
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      setMessage({ type: 'error', text: 'Check-out date must be after check-in date.' });
      setLoading(false);
      return;
    }

    const minCheckOutDate = new Date(checkInDate);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
    if (checkOutDate < minCheckOutDate) {
      setMessage({ type: 'error', text: 'Check-out date must be at least one day after check-in date.' });
      setLoading(false);
      return;
    }

    // Simulate backend availability check
    const selectedType = staticRoomTypes.find(type => type._id === selectedRoomTypeId);
    if (selectedType && guests <= selectedType.maxGuests) {
      // We are assuming it's "available" as there's no real check
      setAvailableRoomForBooking({
        _id: 'dummyRoomId123', // A dummy ID
        roomNumber: '101',    // A dummy room number
        roomType: selectedType // The selected room type object
      });
      setMessage({ type: 'success', text: `Great! The ${selectedType.name} is available. Proceed to confirm.` });
      setCurrentStep(1); // Move to confirmation step
    } else {
      setMessage({ type: 'error', text: 'No room available for your selected criteria. Please try different dates or room types, or adjust the number of guests.' });
    }

    setLoading(false);
  };

  const handleProceedToPayment = () => {
    if (!availableRoomForBooking) {
      setMessage({ type: 'error', text: 'Please check availability first.' });
      return;
    }
    setCurrentStep(2); // Move to payment step
    setMessage(null); // Clear previous messages
  };

  const handlePaymentDone = () => {
    setLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      // Use the 'price' property from availableRoomForBooking.roomType
      const priceToUse = availableRoomForBooking.roomType.price || availableRoomForBooking.roomType.pricePerNight;
      const totalPrice = priceToUse * calculateNights(checkIn, checkOut);

      setMessage({ type: 'success', text: `Booking confirmed! Total: ₹${totalPrice.toLocaleString('en-IN')}. Your reservation has been successfully placed. We look forward to welcoming you!` });

      setCurrentStep(3); // Move to final confirmation step

      // Clear form and reset states after successful booking
      setTimeout(() => {
        setCheckIn('');
        setCheckOut('');
        setGuests(initialRoom ? parseInt(initialRoom.capacity.split(' ')[0]) : 1);
        setSelectedRoomTypeId(initialRoom ? initialRoom.id : '');
        setAvailableRoomForBooking(null);
        setMessage(null);
        setCurrentStep(0); // Reset to initial step after a delay
      }, 5000); // Clear after 5 seconds

      setLoading(false);
    }, 2000); // Simulate 2 second payment processing
  };

  const calculateNights = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    // Check for Invalid Dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return 0; // Return 0 nights if dates are invalid
    }
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const today = new Date().toISOString().split('T')[0];
  const minCheckOut = checkIn ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)).toISOString().split('T')[0] : today;

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-3xl text-center border border-border-light font-sans"> {/* Premium styling */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-dark mb-8 relative pb-4"> {/* Premium heading style */}
        <span className="relative z-10">Plan Your Perfect Stay</span>
        <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
      </h2>

      {/* Process Stepper */}
      <ProcessStepper steps={bookingSteps} currentStepIndex={currentStep} />

      {message && (
        <div
          className={`p-4 rounded-lg text-base font-medium ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          } my-4 animate-fade-in`} // Enhanced styling and animation, changed mb-4 to my-4
          role="alert"
        >
          {message.text}
        </div>
      )}

      {/* Step 0: Select Details Form */}
      {currentStep === 0 && (
        <form onSubmit={handleAvailabilityCheck} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 items-end animate-fade-in"> {/* Changed to lg:grid-cols-4, added items-end */}
          <div className="flex flex-col items-start">
            <label htmlFor="checkIn" className="font-semibold text-text-dark mb-2 text-lg">Check-in Date:</label> {/* Darker text, larger font */}
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              min={today}
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 shadow-sm text-text-dark" // Premium input styling
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="checkOut" className="font-semibold text-text-dark mb-2 text-lg">Check-out Date:</label> {/* Darker text, larger font */}
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              min={minCheckOut}
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 shadow-sm text-text-dark" // Premium input styling
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="guests" className="font-semibold text-text-dark mb-2 text-lg">Number of Guests:</label> {/* Darker text, larger font */}
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              min="1"
              required
              max={initialRoom ? parseInt(initialRoom.capacity.split(' ')[0]) : 10} // Set max guests based on initialRoom or a default
              className="w-full p-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 shadow-sm text-text-dark" // Premium input styling
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="roomType" className="font-semibold text-text-dark mb-2 text-lg">Room Type:</label> {/* Darker text, larger font */}
            <select
              id="roomType"
              value={selectedRoomTypeId}
              onChange={(e) => setSelectedRoomTypeId(e.target.value)}
              required
              disabled={!!initialRoom} // Disable if initialRoom is provided
              className={`w-full p-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 shadow-sm bg-white text-text-dark ${initialRoom ? 'bg-gray-100 cursor-not-allowed' : ''}`} // Premium select styling, disabled style
            >
              <option value="">Select a Room Type</option>
              {availableRoomTypes.map(type => (
                <option key={type._id} value={type._id}>{type.name} (Max: {type.maxGuests} guests)</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 lg:col-span-4 bg-primary-blue text-neutral-light px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl transform hover:-translate-y-0.5" // Premium button styling
          >
            {loading ? 'Checking Availability...' : 'Check Availability'}
          </button>
        </form>
      )}


      {/* Step 1: Confirm & Pay Section */}
      {currentStep === 1 && availableRoomForBooking && (
        <div className="bg-neutral-light p-6 rounded-xl border border-border-light mt-6 text-left shadow-md animate-fade-in"> {/* Premium confirmation styling */}
          <h3 className="text-2xl font-extrabold text-neutral-dark mb-4 text-center relative pb-3">
            <span className="relative z-10">Confirm Your Booking</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary-blue rounded-full opacity-80"></span>
          </h3>
          {/* Display Room Image */}
          {availableRoomForBooking.roomType.image && (
            <img
              src={availableRoomForBooking.roomType.image}
              alt={availableRoomForBooking.roomType.name}
              className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
            />
          )}
          <p className="text-text-dark mb-2">You have selected the <strong className="text-primary-blue">{availableRoomForBooking.roomType.name}</strong>.</p>
          <p className="text-text-dark mb-2">For <strong className="text-primary-blue">{calculateNights(checkIn, checkOut)} nights</strong> from <strong className="text-primary-blue">{new Date(checkIn).toLocaleDateString('en-IN')}</strong> to <strong className="text-primary-blue">{new Date(checkOut).toLocaleDateString('en-IN')}</strong>.</p>
          <p className="text-text-dark mb-4">For <strong className="text-primary-blue">{guests} guests</strong>.</p>
          <p className="text-2xl font-bold text-secondary-gold mt-4 text-center">
            Total Price: ₹{ ( (availableRoomForBooking.roomType.price || availableRoomForBooking.roomType.pricePerNight) * calculateNights(checkIn, checkOut)).toLocaleString('en-IN')}
          </p>
          <button
            onClick={handleProceedToPayment} // New handler to show payment section
            disabled={loading}
            className="w-full mt-6 bg-secondary-gold text-neutral-dark px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl transform hover:-translate-y-0.5" // Premium button styling
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* Step 2: Payment Section */}
      {currentStep === 2 && availableRoomForBooking && (
        <div className="bg-neutral-light p-6 rounded-xl border border-border-light mt-6 text-left shadow-md animate-fade-in">
          <h3 className="text-2xl font-extrabold text-neutral-dark mb-4 text-center relative pb-3">
            <span className="relative z-10">Complete Your Payment</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary-blue rounded-full opacity-80"></span>
          </h3>
          <p className="text-text-dark mb-4 text-center">Scan the QR code or use the UPI ID below to complete your payment of <strong className="text-secondary-gold">₹{( (availableRoomForBooking.roomType.price || availableRoomForBooking.roomType.pricePerNight) * calculateNights(checkIn, checkOut)).toLocaleString('en-IN')}</strong>.</p>

          <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <img
              src="https://placehold.co/200x200/000000/FFFFFF?text=QR+Code" // Placeholder QR code image
              alt="Payment QR Code"
              className="w-48 h-48 rounded-lg border border-border-light shadow-md"
            />
            <p className="text-text-dark text-lg font-semibold">UPI ID: <span className="text-primary-blue">lakemount@upi</span></p>
            <p className="text-text-dark text-sm opacity-80">Please ensure the correct amount is paid.</p>
          </div>

          <button
            onClick={handlePaymentDone}
            disabled={loading}
            className="w-full mt-6 bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? 'Processing Payment...' : 'I Have Paid'}
          </button>
          <button
            onClick={() => setCurrentStep(1)} // Go back to confirmation step
            disabled={loading}
            className="w-full mt-4 bg-gray-300 text-text-dark px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-400 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
          >
            Go Back
          </button>
        </div>
      )}

      {/* Step 3: Booking Confirmed Section */}
      {currentStep === 3 && (
        <div className="bg-green-50 p-6 rounded-xl border border-green-200 mt-6 text-center shadow-md animate-fade-in">
          <i className="fas fa-check-circle text-green-600 text-6xl mb-4 animate-bounce-in"></i>
          <h3 className="text-2xl font-extrabold text-green-800 mb-4">Booking Confirmed!</h3>
          <p className="text-green-700 text-lg mb-4">Your reservation at The Lake Mount has been successfully placed.</p>
          <p className="text-green-700 text-base">We look forward to welcoming you!</p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
