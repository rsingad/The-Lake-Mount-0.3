// src/pages/RoomDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm'; // Import the BookingForm component

function RoomDetailPage() {
  const { id } = useParams(); // Get the room ID from the URL
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder room data (This should ideally be imported from a central data file
  // or fetched from an API in a real application)
  const allRoomsData = [
    {
      id: '1',
      name: 'Deluxe Lake View Room', // Updated name for premium feel
      description: 'Experience comfort and elegance with breathtaking panoramic lake views and a private balcony.',
      fullDescription: 'Our Deluxe Lake View Rooms are spacious and thoughtfully designed, featuring a plush king-sized bed, a comfortable seating area, and a private balcony overlooking the serene Bhambori Lake. Guests can enjoy modern amenities, including high-speed Wi-Fi, a large flat-screen TV, and a luxurious en-suite bathroom with premium, eco-friendly toiletries. Ideal for couples seeking tranquility and picturesque scenery.',
      price: 15000, // Increased price for premium feel (example in INR)
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      amenities: ['King Bed', 'Panoramic Lake View', 'Private Balcony', 'High-speed Wi-Fi', 'Smart TV', 'Premium Mini Bar', 'Central Air Conditioning', '24-hour Room Service'],
      size: '350 sq ft',
      capacity: '2 Adults'
    },
    {
      id: '2',
      name: 'Executive Lake Suite', // Updated name for premium feel
      description: 'Indulge in expansive luxury with a separate living area, elegant decor, and direct lake access.',
      fullDescription: 'The Executive Lake Suite offers an expansive living space separate from the master bedroom, providing ample room for relaxation or intimate gatherings. It features a plush king bed, a lavish modern bathroom with a separate rain shower and deep soaking tub, and a private terrace leading directly to the lakefront. Comes with exclusive access to our Executive Lounge and personalized concierge service.',
      price: 25000, // Increased price for premium feel
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      amenities: ['King Bed', 'Separate Living Area', 'Direct Lake Access', 'Executive Lounge Access', 'Dedicated Work Desk', 'Luxurious Bathroom', 'Espresso Machine', 'Personal Concierge'],
      size: '550 sq ft',
      capacity: '2 Adults, 1 Child'
    },
    {
      id: '3',
      name: 'Grand Family Retreat', // Updated name for premium feel
      description: 'Designed for families, these spacious rooms offer comfortable bedding configurations and engaging amenities for a memorable stay.',
      fullDescription: 'Our Grand Family Retreats are perfect for those traveling with children, offering flexible bedding arrangements (e.g., one king bed and two single beds or a bunk bed setup) and ample space for comfort and play. Equipped with child-friendly amenities, a large modern bathroom, and dedicated entertainment options to keep everyone happy. Interconnecting room options are also available upon request.',
      price: 20000, // Increased price for premium feel
      image: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      amenities: ['King & Single Beds', 'Spacious Layout', 'Kids Welcome Kit', 'Interconnecting Option', 'Access to Kids Play Zone', 'Large Wardrobe', 'High-speed Wi-Fi', 'Smart TV'],
      size: '450 sq ft',
      capacity: '2 Adults, 2 Children'
    },
    {
      id: '4',
      name: 'Presidential Lakefront Villa', // Updated name for premium feel
      description: 'The epitome of luxury, featuring multiple rooms, a private dining area, and personalized butler service with stunning lakefront views.',
      fullDescription: 'Experience unparalleled luxury in our Presidential Lakefront Villa. This expansive private retreat includes a master bedroom, a guest bedroom, a grand living room, a private dining area, a fully equipped gourmet kitchenette, and an outdoor patio with a private plunge pool. Enjoy breathtaking panoramic lake views, a private jacuzzi, and dedicated 24-hour butler service for a truly bespoke and exclusive experience.',
      price: 50000, // Increased price for premium feel
      image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      amenities: ['Two Bedrooms', 'Private Dining Area', 'Private Plunge Pool', '24-hour Butler Service', 'Panoramic Lake View', 'Gourmet Kitchenette', 'Outdoor Jacuzzi', 'Luxury Furnishings', 'Private Entrance'],
      size: '1200 sq ft',
      capacity: '4 Adults'
    }
  ];


  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const foundRoom = allRoomsData.find((r) => r.id === id); // Find the room by ID

    if (foundRoom) {
      setRoom(foundRoom);
    } else {
      setError("Room not found. Please check the URL or return to our rooms page.");
    }
    setIsLoading(false);
  }, [id]); // Re-run effect if ID changes

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--color-neutral-light)]"> {/* Uses CSS variable */}
        <div className="text-2xl font-semibold text-[var(--color-primary-brown)] animate-pulse">Loading Room Details...</div> {/* Uses CSS variable */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-red-700 p-8 text-center">
        <p className="text-3xl font-bold mb-4">{error}</p>
        <Link to="/rooms" className="text-[var(--color-primary-brown)] hover:underline text-lg font-medium"> {/* Uses CSS variable */}
          Go back to All Rooms
        </Link>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[var(--color-neutral-light)] text-[var(--color-text-dark)] p-8 text-center"> {/* Uses CSS variables */}
        <p className="text-3xl font-bold mb-4">No room data available.</p>
        <Link to="/rooms" className="text-[var(--color-primary-brown)] hover:underline text-lg font-medium"> {/* Uses CSS variable */}
          Go back to All Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans"> {/* Uses CSS variable */}
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[550px] bg-cover bg-center flex items-end pb-16 text-white overflow-hidden"
        style={{ backgroundImage: `url(${room.image})` }}
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-60"></div> {/* Uses CSS variables */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl leading-tight tracking-wider animate-fade-in-up">
            {room.name}
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-xl max-w-3xl animate-fade-in-up delay-100">{room.description}</p>
        </div>
      </section>

      {/* Room Details Section */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] mb-6 relative pb-4"> {/* Uses CSS variables */}
              <span className="relative z-10">About the {room.name}</span>
              <span className="absolute -bottom-0 left-0 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span> {/* Uses CSS variable */}
            </h2>
            <p className="text-[var(--color-text-dark)] text-lg leading-relaxed mb-8"> {/* Uses CSS variable */}
              {room.fullDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center text-[var(--color-text-dark)] text-lg p-3 bg-[var(--color-neutral-light)] rounded-lg shadow-sm border border-[var(--color-border-light)]"> {/* Uses CSS variables */}
                <i className="fas fa-expand-arrows-alt text-[var(--color-primary-brown)] text-2xl mr-4"></i> {/* Uses CSS variables */}
                <span className="font-semibold">Size:</span> <span className="ml-1">{room.size}</span>
              </div>
              <div className="flex items-center text-[var(--color-text-dark)] text-lg p-3 bg-[var(--color-neutral-light)] rounded-lg shadow-sm border border-[var(--color-border-light)]"> {/* Uses CSS variables */}
                <i className="fas fa-users text-[var(--color-primary-brown)] text-2xl mr-4"></i> {/* Uses CSS variables */}
                <span className="font-semibold">Capacity:</span> <span className="ml-1">{room.capacity}</span>
              </div>
              <div className="flex items-center text-[var(--color-text-dark)] text-lg p-3 bg-[var(--color-neutral-light)] rounded-lg shadow-sm border border-[var(--color-border-light)]"> {/* Uses CSS variables */}
                <i className="fas fa-dollar-sign text-[var(--color-primary-brown)] text-2xl mr-4"></i> {/* Uses CSS variables */}
                <span className="font-semibold">Price per night:</span> <span className="ml-1">₹{room.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold text-[var(--color-neutral-dark)] mb-6 relative pb-3"> {/* Uses CSS variables */}
              <span className="relative z-10">Room Amenities</span>
              <span className="absolute -bottom-0 left-0 w-24 h-1.5 bg-[var(--color-primary-brown)] rounded-full opacity-80"></span> {/* Uses CSS variables */}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--color-text-dark)] text-lg"> {/* Uses CSS variables */}
              {room.amenities && room.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center p-2 bg-[var(--color-neutral-light)] rounded-md border border-[var(--color-border-light)] shadow-sm"> {/* Uses CSS variables */}
                  <i className="fas fa-check-circle text-[var(--color-secondary-gold)] mr-3 text-xl"></i> {/* Uses CSS variables */}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Booking/Inquiry Form - Now using the BookingForm component */}
          <BookingForm initialRoom={room} />
        </div>
      </section>

      {/* Back to Rooms Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center"> {/* Uses CSS variables */}
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/rooms"
            className="inline-flex items-center bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide" 
          >
            <i className="fas fa-arrow-left mr-3"></i> Back to All Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RoomDetailPage;
