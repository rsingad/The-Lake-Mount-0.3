// src/pages/RoomsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoomCard from '../components/RoomCard'; // Make sure this component exists and is styled
import CallToActionSection from '../components/CallToActionSection'; // Ensure this is imported if used

function RoomsPage() {
  // **Static Room Data: Use this until you have a backend**
  // NOTE: Ensure these images exist in your public/images/rooms/ directory
  const staticRoomTypes = [
    {
      _id: '1', // Changed to '1' for consistency with RoomDetailPage ID
      name: 'Deluxe Lake View',
      description: 'Experience tranquility with breathtaking panoramic lake views, a private balcony, and modern comforts.',
      fullDescription: 'Our Deluxe Lake View rooms are designed to offer an immersive experience with nature. Each room features a private balcony overlooking the serene waters of Bhambori Lake, a plush king-size bed, a comfortable seating area, and an en-suite bathroom with premium amenities. Ideal for romantic getaways or peaceful retreats.',
      pricePerNight: 15000, 
      images: [
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      amenities: ['Private Balcony', 'Lake View', 'Air Conditioning', 'Free Wi-Fi', 'King-Size Bed', 'Flat-Screen TV', 'Mini-Bar', 'Tea/Coffee Maker']
    },
    {
      _id: '2', // Changed to '2' for consistency with RoomDetailPage ID
      name: 'Executive Lake Suite',
      description: 'Indulge in spacious luxury with a separate living area, elegant decor, and direct lake access.',
      fullDescription: 'The Executive Lake Suite provides ample space and elevated comfort. It features a private bedroom with a king-size bed, a separate elegant living room, and a spacious bathroom with a luxurious bathtub. Perfect for guests who desire more room to relax or for small families.',
      pricePerNight: 25000, 
      images: [
        'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      amenities: ['Separate Lounge', 'Air Conditioning', 'Free Wi-Fi', 'Bathtub', 'Coffee Maker', 'Work Desk', 'Sofa Bed (optional)']
    },
    {
      _id: '3', // Changed to '3' for consistency with RoomDetailPage ID
      name: 'Grand Family Retreat',
      description: 'Designed with families in mind, offering comfortable bedding configurations and engaging amenities for a memorable stay.',
      fullDescription: 'Our Grand Family Retreats are thoughtfully designed to accommodate families with comfort and convenience. These rooms offer flexible bedding options (e.g., one queen bed and two single beds or bunk beds) and extra space for relaxation. Equipped with child-friendly amenities and entertainment options to keep everyone happy.',
      pricePerNight: 20000, 
      images: [
        'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2096196/pexels-photo-2096196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      amenities: ['Flexible Bedding', 'Kids Welcome Kit', 'Air Conditioning', 'Free Wi-Fi', 'Interconnecting Option', 'Large Wardrobe']
    },
    {
      _id: '4', // Changed to '4' for consistency with RoomDetailPage ID
      name: 'Standard Deluxe Room', // Renamed for a slightly more premium feel than "Standard AC Room"
      description: 'Comfortable and cozy rooms, thoughtfully equipped with all essential amenities for a pleasant and refreshing stay.',
      fullDescription: 'Our Standard Deluxe Rooms offer a cozy and comfortable retreat after a day of exploration. Each room features a comfortable queen-size bed, efficient air conditioning, and a clean, modern bathroom with a refreshing shower. It\'s an excellent choice for solo travelers or couples seeking value without compromising comfort and style.',
      pricePerNight: 10000, 
      images: [
        'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/271630/pexels-photo-271630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Queen-Size Bed', 'Flat-Screen TV', 'Hot/Cold Shower', 'Work Desk']
    },
  ];

  const [roomTypes, setRoomTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setRoomTypes(staticRoomTypes);
      setLoading(false);
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[var(--color-neutral-light)]">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[var(--color-primary-brown)]"></div>
        <p className="ml-4 mt-6 text-xl font-semibold text-[var(--color-text-dark)]">Loading Our Exquisite Rooms...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-red-700 p-8 text-center">
        <p className="text-2xl font-bold mb-4">Oops! Something went wrong.</p>
        <p className="text-lg">{error}</p>
        <p className="text-md mt-4">Please try refreshing the page or contact support.</p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Rooms Hero Banner Section */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }} // Pexels image for banner
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-60"></div> {/* Darker Overlay */}
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 leading-tight drop-shadow-xl animate-fade-in">
            Your Perfect Stay Awaits
          </h1>
          <p className="text-lg md:text-2xl mt-2 drop-shadow-lg animate-fade-in delay-200">
            Discover Unparalleled Comfort and Elegance at The Lake Mount, Bhambori
          </p>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="py-16 md:py-24 bg-white shadow-inner"> {/* Changed background to white for contrast, added inner shadow */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-6 relative pb-4"> {/* Premium heading style */}
            <span className="relative z-10">Our Exquisite Room Collection</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] text-center max-w-4xl mx-auto mb-16 leading-relaxed"> {/* Darker text, increased max-width */}
            Explore our diverse range of luxurious accommodations, each meticulously designed to provide unparalleled comfort, modern amenities, and a truly relaxing and memorable experience by the lake.
          </p>

          {roomTypes.length === 0 ? (
            <div className="text-center text-[var(--color-text-dark)] text-xl p-10 bg-[var(--color-neutral-light)] rounded-lg shadow-md border border-[var(--color-border-light)]"> {/* Premium empty state */}
              <p className="font-semibold">Currently, no room types are available. Please check back soon for our latest offerings!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> 
              {roomTypes.map((roomType) => (
                <RoomCard key={roomType._id} roomType={roomType} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Call to Action Section */}
      <CallToActionSection/>
    </div>
  );
}

export default RoomsPage;
