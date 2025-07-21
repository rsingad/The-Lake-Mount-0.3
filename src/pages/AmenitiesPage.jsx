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
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 2,
      name: 'State-of-the-Art Fitness Center', // More premium name
      description: 'Maintain your routine in our modern fitness center, equipped with the latest cardio and strength machines.',
      icon: 'fas fa-dumbbell',
      image: 'https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 3,
      name: 'Serene Spa & Wellness Centre', // More premium name
      description: 'Indulge in bespoke treatments and holistic therapies at our luxurious spa for profound relaxation.',
      icon: 'fas fa-spa',
      image: 'https://images.pexels.com/photos/3865556/pexels-photo-3865556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 4,
      name: 'Signature Multi-Cuisine Dining', // More premium name
      description: 'Savor gourmet dishes ranging from authentic Rajasthani to international favorites in an elegant ambiance.',
      icon: 'fas fa-utensils',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 5,
      name: 'High-Speed Wi-Fi', // More premium name
      description: 'Stay seamlessly connected with complimentary high-speed internet access throughout the entire property.',
      icon: 'fas fa-wifi',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 6,
      name: 'Elegant Conference & Events', // More premium name
      description: 'Our versatile halls provide a sophisticated setting for memorable weddings, corporate events, and celebrations.',
      icon: 'fas fa-handshake',
      image: 'https://images.pexels.com/photos/161732/pexels-photo-161732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 7,
      name: '24-Hour Concierge Service', // More premium name
      description: 'Our attentive concierge team is available around the clock to cater to your every request and ensure a flawless stay.',
      icon: 'fas fa-concierge-bell',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image (lobby image)
    },
    {
      id: 8,
      name: 'Secure Valet Parking', // More premium name, implies luxury
      description: 'Enjoy peace of mind with our complimentary and secure valet parking services for your vehicle.',
      icon: 'fas fa-parking',
      image: 'https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 9,
      name: 'Premium Laundry & Dry Cleaning', // More premium name
      description: 'Benefit from our professional and prompt laundry and dry-cleaning services for ultimate convenience.',
      icon: 'fas fa-washer',
      image: 'https://images.pexels.com/photos/4099478/pexels-photo-4099478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 10,
      name: 'Luxury Airport Transfer', // More premium name
      description: 'Experience hassle-free arrivals and departures with our comfortable and reliable airport shuttle service.',
      icon: 'fas fa-shuttle-van',
      image: 'https://images.pexels.com/photos/380721/pexels-photo-380721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 11,
      name: 'Kids Play Zone', // Added a new amenity
      description: 'A dedicated, supervised area for our younger guests to enjoy fun and engaging activities.',
      icon: 'fas fa-child',
      image: 'https://images.pexels.com/photos/2096196/pexels-photo-2096196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 12,
      name: 'Gift Shop & Souvenirs', // Added a new amenity
      description: 'Browse our curated collection of local crafts, souvenirs, and essential items at our in-house shop.',
      icon: 'fas fa-gifts',
      image: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image (room decor, implies shopping)
    }
  ];

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Amenities Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20791613/pexels-photo-20791613.jpeg')" }} // Using a more generic, high-quality image
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] mb-6 relative pb-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
            <span className="relative z-10">A Sanctuary of Comfort & Convenience</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-100"> {/* Added fade-in-up animation and delay */}
            At **The Lake Mount**, every amenity is a testament to our dedication to your comfort and well-being. We've thoughtfully curated a comprehensive suite of facilities designed to cater to your every desire, ensuring a truly indulgent and memorable stay.
          </p>
          <p className="text-lg text-[var(--color-text-dark)] max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200"> {/* Added fade-in-up animation and delay */}
            From **rejuvenating wellness escapes** to **seamless connectivity** and **exquisite culinary journeys**, discover a world where luxury meets personalized service, making every moment with us exceptional.
          </p>
        </div>
      </section>

      {/* Amenities Grid Section */}
      <section className="py-16 md:py-24 bg-[var(--color-neutral-light)] border-t border-b border-[var(--color-border-light)]"> {/* Used neutral-light and borders */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
            <span className="relative z-10">Explore Our Exquisite Facilities</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-primary-brown)] rounded-full opacity-80"></span>
          </h2>
          {amenitiesList.length === 0 ? (
            <div className="text-center text-[var(--color-text-dark)] text-xl p-8 bg-white rounded-lg shadow-md border border-[var(--color-border-light)]">
              <p>No amenities listed at the moment. Please check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
              {amenitiesList.map((amenity) => (
                <div key={amenity.id} className="bg-white rounded-2xl shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border border-[var(--color-border-light)] group hover:shadow-2xl"> {/* Enhanced 3D effect: increased scale, translateY, and shadow on hover */}
                  {amenity.image && (
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" // Larger image, zoom effect
                    />
                  )}
                  <div className="p-8 text-center"> {/* More padding */}
                    {amenity.icon && (
                      <i className={`${amenity.icon} text-[var(--color-primary-brown)] text-6xl mb-5 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300`}></i>
                    )}
                    <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-3 leading-tight">{amenity.name}</h3> {/* Darker heading, tighter line-height */}
                    <p className="text-[var(--color-text-dark)] leading-relaxed text-base">{amenity.description}</p> {/* Darker, slightly larger body text */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action or Booking Prompt */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center"> {/* Uses CSS variables */}
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md animate-fade-in-up"> {/* Added fade-in-up animation */}
            Ready to Experience Unmatched Comfort?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-100"> {/* Added fade-in-up animation and delay */}
            Book your luxurious retreat today and immerse yourself in the exceptional amenities The Lake Mount has to offer.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Book Your Indulgent Stay
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AmenitiesPage;
