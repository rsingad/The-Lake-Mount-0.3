// src/pages/CafePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CafePage() {
  // Static data for menu highlights
  const menuHighlights = [
    {
      id: 1,
      name: 'Artisan Coffee Selection',
      description: 'Expertly brewed coffees, from classic espressos to creamy lattes and unique, ethically sourced blends. A perfect start or break to your day.',
      image: 'https://images.pexels.com/photos/7175964/pexels-photo-7175964.jpeg', // Ensure this image exists
      icon: 'fas fa-coffee'
    },
    {
      id: 2,
      name: 'Gourmet Freshly Baked Pastries',
      description: 'Indulge in our daily selection of flaky croissants, moist muffins, decadent cakes, and other exquisite sweet treats, baked fresh in-house.',
      image: 'https://images.pexels.com/photos/11785649/pexels-photo-11785649.jpeg', // Ensure this image exists
      icon: 'fas fa-cookie-bite'
    },
    {
      id: 3,
      name: 'Curated Savory Bites & Sandwiches',
      description: 'Discover our selection of light snacks, gourmet sandwiches crafted with premium ingredients, and wholesome, fresh salads perfect for any time of day.',
      image: 'https://images.pexels.com/photos/18809825/pexels-photo-18809825.jpeg', // Ensure this image exists
      icon: 'fas fa-hamburger'
    },
    {
      id: 4,
      name: 'Signature Refreshing Beverages',
      description: 'Quench your thirst with our cool iced teas, invigorating fruit smoothies, freshly squeezed juices, and an array of specialty non-alcoholic drinks.',
      image: 'https://images.pexels.com/photos/33013705/pexels-photo-33013705.jpeg', // Ensure this image exists
      icon: 'fas fa-cocktail' // Using cocktail for general beverages
    },
  ];

  // Static data for cafe ambiance gallery
  const ambianceImages = [
    { id: 1, src: 'https://images.pexels.com/photos/33035697/pexels-photo-33035697.jpeg', alt: 'Cozy Cafe Seating at The Lake Mount Cafe' },
    { id: 2, src: 'https://images.pexels.com/photos/24706252/pexels-photo-24706252.jpeg', alt: 'Elegant Cafe Bar Area with view' },
    { id: 3, src: 'https://images.pexels.com/photos/6151957/pexels-photo-6151957.jpeg', alt: 'Bright and inviting Cafe Interior' },
    { id: 4, src: 'https://images.pexels.com/photos/15965023/pexels-photo-15965023.jpeg', alt: 'Guests enjoying coffee in The Lake Mount Cafe' }, // Added another image
  ];

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Cafe Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/cafe.jpg')" }} // Ensure this high-quality image exists
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            The Lake Mount Café
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Your Exclusive Haven for Gourmet Coffee & Delectable Delights.
          </p>
        </div>
      </section>

      {/* Introduction to the Cafe */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6 relative pb-4">
            <span className="relative z-10">A Cozy Retreat for Every Moment</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-8 leading-relaxed">
            Step into **The Lake Mount Café**, where the inviting aroma of freshly brewed coffee perfectly blends with the comforting scent of delectable treats, all within a warm and elegantly designed atmosphere. Whether you're seeking a tranquil start to your day, a vibrant spot for conversations, or a quiet corner for reflection, our café is crafted for your utmost comfort and enjoyment.
          </p>
          <p className="text-lg text-text-dark max-w-4xl mx-auto leading-relaxed">
            We pride ourselves on sourcing **premium beans** and utilizing only the **freshest, locally-sourced ingredients** to curate a menu that is both deeply comforting and refreshingly exciting. Discover your new favorite escape by the lake.
          </p>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">Our Signature Specialties</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span>
          </h2>
          {menuHighlights.length === 0 ? (
            <div className="text-center text-text-dark text-xl p-8 bg-white rounded-lg shadow-md border border-border-light">
              <p>No menu highlights available at the moment. Please check back soon for our latest offerings!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap */}
              {menuHighlights.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-3xl overflow-hidden transition-all duration-500 hover:scale-[1.03] border border-border-light group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" // Larger image, zoom effect
                  />
                  <div className="p-8 text-center"> {/* More padding */}
                    {item.icon && (
                      <i className={`${item.icon} text-primary-blue text-6xl mb-5 group-hover:text-secondary-gold transition-colors duration-300`}></i>
                    )}
                    <h3 className="text-2xl font-bold text-neutral-dark mb-3 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-text-dark leading-relaxed text-base">{item.description}</p> 
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cafe Hours & Location */}
      <section className="py-16 md:py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-16 relative pb-4">
            <span className="relative z-10">Plan Your Visit</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"> {/* Increased max-width and gap */}
            <div className="bg-neutral-light p-10 rounded-2xl shadow-3xl border border-border-light group"> {/* Premium card style */}
              <i className="fas fa-clock text-primary-blue text-6xl mb-6 group-hover:text-secondary-gold transition-colors duration-300"></i> {/* Larger icon, gold hover */}
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">Operating Hours</h3>
              <ul className="text-text-dark text-xl space-y-3"> {/* Larger text, more space */}
                <li>Monday - Friday: <span className="font-semibold text-primary-blue">7:00 AM - 10:00 PM</span></li>
                <li>Saturday - Sunday: <span className="font-semibold text-primary-blue">7:00 AM - 11:00 PM</span></li>
                <li>Public Holidays: <span className="font-semibold text-primary-blue">7:00 AM - 11:00 PM</span></li> {/* Changed to Public Holidays */}
              </ul>
            </div>
            <div className="bg-neutral-light p-10 rounded-2xl shadow-3xl border border-border-light group"> {/* Premium card style */}
              <i className="fas fa-map-marker-alt text-primary-blue text-6xl mb-6 group-hover:text-secondary-gold transition-colors duration-300"></i> {/* Larger icon, gold hover */}
              <h3 className="text-2xl font-bold text-neutral-dark mb-4">Our Location</h3> {/* Changed heading */}
              <p className="text-text-dark text-xl mb-3">
                Conveniently located on the Ground Floor of **The Lake Mount Hotel**.
              </p>
              <p className="text-text-dark opacity-80 text-lg mb-4">
                Serene Lake Road, Bhambori, Rajasthan, India
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-secondary-gold hover:text-primary-blue transition-colors duration-300 font-bold text-lg group" // Styled link
              >
                Get Directions
                <i className="fas fa-map-marked-alt ml-3 text-xl group-hover:text-primary-blue"></i> {/* Icon change on hover */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Ambiance Gallery */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">Step Inside Our Inviting Ambiance</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span>
          </h2>
          {ambianceImages.length === 0 ? (
            <div className="text-center text-text-dark text-xl p-8 bg-white rounded-lg shadow-md border border-border-light">
              <p>No ambiance photos available at the moment. We're busy perfecting our space!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to 4 columns on large */}
              {ambianceImages.map((img) => (
                <div key={img.id} className="rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] border border-border-light"> {/* More rounded, deeper shadow, border */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out" // Larger image, zoom effect
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-neutral-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Your Perfect Coffee Break Awaits
          </h2>
          <p className="text-lg md:text-xl mb-8 text-black/30">
            Come and experience the delightful flavors and serene ambiance of The Lake Mount Café.
          </p>
          <Link
            to="/contact" // Link to contact page for inquiries or reservations if applicable
            className="inline-block bg-secondary-gold text-neutral-dark px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-black hover:text-white text-black/40 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            See Our Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CafePage;