// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider'; // Assuming this is also Tailwind-styled or has its own CSS
import BookingForm from '../components/BookingForm'; // Assuming this is also Tailwind-styled or has its own CSS
import TestimonialsSection from './TestimonialsPage'; // Importing the premium testimonials component
import CallToActionSection from '../components/CallToActionSection';

function HomePage() {
  // Dummy data for rooms preview on homepage
  const featuredRooms = [
    {
      id: '1',
      name: 'Deluxe Lake View',
      description: 'Spacious rooms with panoramic lake views and modern comforts.',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      link: '/rooms/1' // Link to specific room detail page
    },
    {
      id: '2',
      name: 'Executive Suite',
      description: 'Luxury suites with a separate living area, perfect for extended stays.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      link: '/rooms/2'
    },
    {
      id: '3',
      name: 'Grand Family Retreat', // Updated name for consistency
      description: 'Comfortable and cozy rooms with all amenities for a memorable family vacation.',
      image: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
      link: '/rooms/3'
    },
  ];

  // Dummy data for amenities highlight
  const featuredAmenities = [
    {
      id: 1,
      name: 'Infinity Pool', // Updated name
      description: 'Relax and unwind in our sparkling infinity pool, with stunning lake views.',
      icon: 'fas fa-swimming-pool', // Font Awesome icon
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 2,
      name: 'Fine Dining Restaurant', // Updated name
      description: 'Savor exquisite multi-cuisine dishes at our elegant lakeside restaurant.',
      icon: 'fas fa-utensils', // Font Awesome icon
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
    {
      id: 3,
      name: 'The Lake Mount Café', // Updated name
      description: 'Enjoy artisanal coffee and delightful pastries in a cozy, inviting ambiance.',
      icon: 'fas fa-coffee', // Font Awesome icon
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Pexels image
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-light font-sans">
      {/* Hero Section */}
      {/* Assuming HeroSlider handles its own full-width layout and images */}
      <HeroSlider />

      {/* Booking Form Section - prominence on homepage */}
      <section className="py-12 bg-white shadow-inner"> {/* Changed background and added shadow */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ensure BookingForm itself is styled with Tailwind and uses your color palette */}
          <BookingForm />
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light"> {/* Using neutral-light, added borders */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-4 relative pb-4"> {/* Premium heading style */}
            <span className="relative z-10">Welcome to The Lake Mount</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-12 leading-relaxed"> {/* Darker text, wider max-width */}
            Nestled by the serene waters of **Bhambori, Rajasthan**, The Lake Mount offers a luxurious escape where comfort meets tranquility. Experience breathtaking lake views, unparalleled hospitality, and exquisite dining.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for about preview
              alt="About The Lake Mount - Luxurious Interior"
              className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover h-72 md:h-96 transition-transform duration-500 hover:scale-105 border border-border-light" // More rounded, deeper shadow, border, hover effect
            />
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 leading-tight">Your Perfect Retreat by the Lake</h3> {/* Primary blue heading */}
              <p className="text-lg text-text-dark mb-4 leading-relaxed"> {/* Darker text */}
                Whether you're seeking a romantic getaway, a memorable family vacation, or a peaceful retreat for reflection,
                our carefully designed rooms and world-class amenities ensure an unforgettable stay.
                Indulge in gourmet delights at our multi-cuisine restaurant, unwind with a coffee at **The Lake Mount Café**, or simply luxuriate by our pristine swimming pool.
              </p>
              <p className="text-lg text-text-dark mb-6 leading-relaxed"> {/* Darker text */}
                Our dedicated team is committed to providing an exceptional experience, anticipating your needs and ensuring every moment of your stay is tailored to perfection.
              </p>
              <Link to="/about" className="inline-block bg-secondary-gold text-neutral-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"> {/* Premium button style */}
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 md:py-24 bg-white border-b border-border-light"> {/* White background, added border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-4 relative pb-4">
            <span className="relative z-10">Elegance in Every Corner: Our Luxurious Rooms</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-12 leading-relaxed">
            Choose from a variety of elegantly furnished rooms and suites, each offering unparalleled comfort, modern amenities, and captivating views designed for your ultimate relaxation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> {/* Increased gap */}
            {featuredRooms.map((room) => (
              <div key={room.id} className="bg-neutral-light rounded-2xl shadow-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 group border border-border-light"> {/* Premium card style */}
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" /> {/* Taller image, zoom effect */}
                <div className="p-8"> {/* Increased padding */}
                  <h4 className="text-2xl font-bold text-neutral-dark mb-2 leading-tight">{room.name}</h4> {/* Darker heading */}
                  <p className="text-text-dark mb-4 leading-relaxed">{room.description}</p> {/* Darker text */}
                  <Link
                    to={room.link}
                    className="inline-block bg-primary-blue text-neutral-dark px-6 py-3 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-md font-semibold tracking-wide" // Premium button style
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16"> {/* Increased margin-top */}
            <Link to="/rooms" className="inline-block bg-secondary-gold text-neutral-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"> {/* Premium button style */}
              Explore All Accommodations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Amenities Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-b border-border-light"> {/* Using neutral-light, added border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-4 relative pb-4">
            <span className="relative z-10">Discover Our World-Class Amenities</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-12 leading-relaxed">
            Enhance your stay with our thoughtfully curated facilities, designed for your ultimate comfort, relaxation, and enjoyment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"> {/* Increased gap */}
            {featuredAmenities.map((amenity) => (
              <div key={amenity.id} className="bg-white rounded-2xl shadow-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 group border border-border-light"> {/* Premium card style */}
                <img src={amenity.image} alt={amenity.name} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" /> {/* Taller image, zoom effect */}
                <div className="p-8"> {/* Increased padding */}
                  {amenity.icon && (
                    <i className={`${amenity.icon} text-primary-blue text-6xl mb-3 group-hover:text-secondary-gold transition-colors duration-300`}></i>
                  )}
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2 leading-tight">{amenity.name}</h3> {/* Darker heading */}
                  <p className="text-text-dark text-base leading-relaxed">{amenity.description}</p> {/* Darker text */}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16"> {/* Increased margin-top */}
            <Link to="/amenities" className="inline-block bg-primary-blue text-neutral-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"> {/* Premium button style */}
              View All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet (Using the dedicated component) */}
      <TestimonialsSection />

      <CallToActionSection/>
    </div>
  );
}

export default HomePage;