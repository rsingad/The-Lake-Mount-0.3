// src/pages/Amenities.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AmenitiesPage() {
  // Static data for amenities
  // You can add or modify these amenities as needed.
  // Ensure corresponding images/icons are in public/images/amenities/
  const amenitiesList = [
    {
      id: 1,
      name: 'Infinity Swimming Pool', // More premium name
      description: 'Immerse yourself in our stunning infinity pool, offering breathtaking views of Bhambori Lake.',
      icon: 'fas fa-swimming-pool', // Font Awesome icon class
      image: '/swimingpool.jpg'
    },
    {
      id: 2,
      name: 'State-of-the-Art Fitness Center', // More premium name
      description: 'Maintain your routine in our modern fitness center, equipped with the latest cardio and strength machines.',
      icon: 'fas fa-dumbbell',
      image: '/fitness-center.jpg'
    },
    {
      id: 3,
      name: 'Serene Spa & Wellness Centre', // More premium name
      description: 'Indulge in bespoke treatments and holistic therapies at our luxurious spa for profound relaxation.',
      icon: 'fas fa-spa',
      image: '/images/amenities/spa.jpg'
    },
    {
      id: 4,
      name: 'Signature Multi-Cuisine Dining', // More premium name
      description: 'Savor gourmet dishes ranging from authentic Rajasthani to international favorites in an elegant ambiance.',
      icon: 'fas fa-utensils',
      image: '/images/amenities/restaurant.jpg'
    },
    {
      id: 5,
      name: 'High-Speed Wi-Fi', // More premium name
      description: 'Stay seamlessly connected with complimentary high-speed internet access throughout the entire property.',
      icon: 'fas fa-wifi',
      image: '/images/amenities/wifi.jpg'
    },
    {
      id: 6,
      name: 'Elegant Conference & Events', // More premium name
      description: 'Our versatile halls provide a sophisticated setting for memorable weddings, corporate events, and celebrations.',
      icon: 'fas fa-handshake',
      image: '/images/amenities/banquet-hall.jpg'
    },
    {
      id: 7,
      name: '24-Hour Concierge Service', // More premium name
      description: 'Our attentive concierge team is available around the clock to cater to your every request and ensure a flawless stay.',
      icon: 'fas fa-concierge-bell',
      image: '/images/amenities/front-desk.jpg'
    },
    {
      id: 8,
      name: 'Secure Valet Parking', // More premium name, implies luxury
      description: 'Enjoy peace of mind with our complimentary and secure valet parking services for your vehicle.',
      icon: 'fas fa-parking',
      image: '/images/amenities/parking.jpg'
    },
    {
      id: 9,
      name: 'Premium Laundry & Dry Cleaning', // More premium name
      description: 'Benefit from our professional and prompt laundry and dry-cleaning services for ultimate convenience.',
      icon: 'fas fa-washer',
      image: '/images/amenities/laundry.jpg'
    },
    {
      id: 10,
      name: 'Luxury Airport Transfer', // More premium name
      description: 'Experience hassle-free arrivals and departures with our comfortable and reliable airport shuttle service.',
      icon: 'fas fa-shuttle-van',
      image: '/images/amenities/shuttle.jpg'
    },
    {
      id: 11,
      name: 'Kids Play Zone', // Added a new amenity
      description: 'A dedicated, supervised area for our younger guests to enjoy fun and engaging activities.',
      icon: 'fas fa-child',
      image: '/images/amenities/kids-play.jpg' // Add a corresponding image
    },
    {
      id: 12,
      name: 'Gift Shop & Souvenirs', // Added a new amenity
      description: 'Browse our curated collection of local crafts, souvenirs, and essential items at our in-house shop.',
      icon: 'fas fa-gifts',
      image: '/images/amenities/gift-shop.jpg' // Add a corresponding image
    }
  ];

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Amenities Hero Banner */}
      <section  
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/badroom.jpg')" }} // Ensure this high-quality image exists
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Our World-Class Amenities
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Experience Unrivaled Comfort and Sophistication at The Lake Mount.
          </p>
        </div>
      </section>

      {/* Introduction to Amenities */}
      <section className="py-16 md:py-24 bg-white shadow-inner"> {/* Added shadow-inner for subtle depth */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6 relative pb-4">
            <span className="relative z-10">A Sanctuary of Comfort & Convenience</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-8 leading-relaxed">
            At **The Lake Mount**, every amenity is a testament to our dedication to your comfort and well-being. We've thoughtfully curated a comprehensive suite of facilities designed to cater to your every desire, ensuring a truly indulgent and memorable stay.
          </p>
          <p className="text-lg text-text-dark max-w-4xl mx-auto leading-relaxed">
            From **rejuvenating wellness escapes** to **seamless connectivity** and **exquisite culinary journeys**, discover a world where luxury meets personalized service, making every moment with us exceptional.
          </p>
        </div>
      </section>

      {/* Amenities Grid Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light"> {/* Used neutral-light and borders */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">Explore Our Exquisite Facilities</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span>
          </h2>
          {amenitiesList.length === 0 ? (
            <div className="text-center text-text-dark text-xl p-8 bg-white rounded-lg shadow-md border border-border-light">
              <p>No amenities listed at the moment. Please check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
              {amenitiesList.map((amenity) => (
                <div key={amenity.id} className="bg-white rounded-2xl shadow-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] border border-border-light group"> {/* More rounded, deeper shadow, border */}
                  {amenity.image && (
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" // Larger image, zoom effect
                    />
                  )}
                  <div className="p-8 text-center"> {/* More padding */}
                    {amenity.icon && (
                      <i className={`${amenity.icon} text-primary-blue text-6xl mb-5 group-hover:text-secondary-gold transition-colors duration-300`}></i>
                    )}
                    <h3 className="text-2xl font-bold text-neutral-dark mb-3 leading-tight">{amenity.name}</h3> {/* Darker heading, tighter line-height */}
                    <p className="text-text-dark leading-relaxed text-base">{amenity.description}</p> {/* Darker, slightly larger body text */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action or Booking Prompt */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-neutral-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Ready to Experience Unmatched Comfort?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-black/30">
            Book your luxurious retreat today and immerse yourself in the exceptional amenities The Lake Mount has to offer.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-secondary-gold text-black px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Book Your Indulgent Stay
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AmenitiesPage;