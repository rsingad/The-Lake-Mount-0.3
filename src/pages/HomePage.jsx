// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider'; // Assuming this is also Tailwind-styled or has its own CSS
import BookingForm from '../components/BookingForm'; // Assuming this is also Tailwind-styled or has its own CSS
import TestimonialsSection from './TestimonialsPage'; // Importing the premium testimonials component
import CallToActionSection from '../components/CallToActionSection';

function HomePage() {
  // Dummy data for rooms preview on homepage - No longer directly used in this shortened version
  // const featuredRooms = [
  //   {
  //     id: '1',
  //     name: 'Deluxe Lake View',
  //     description: 'Spacious rooms with panoramic lake views and modern comforts.',
  //     image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     link: '/rooms/1'
  //   },
  //   {
  //     id: '2',
  //     name: 'Executive Suite',
  //     description: 'Luxury suites with a separate living area, perfect for extended stays.',
  //     image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     link: '/rooms/2'
  //   },
  //   {
  //     id: '3',
  //     name: 'Grand Family Retreat',
  //     description: 'Comfortable and cozy rooms with all amenities for a memorable family vacation.',
  //     image: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     link: '/rooms/3'
  //   },
  // ];

  // Dummy data for amenities highlight - No longer directly used in this shortened version
  // const featuredAmenities = [
  //   {
  //     id: 1,
  //     name: 'Infinity Pool',
  //     description: 'Relax and unwind in our sparkling infinity pool, with stunning lake views.',
  //     icon: 'fas fa-swimming-pool',
  //     image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 2,
  //     name: 'Fine Dining Restaurant',
  //     description: 'Savor exquisite multi-cuisine dishes at our elegant lakeside restaurant.',
  //     icon: 'fas fa-utensils',
  //     image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 3,
  //     name: 'The Lake Mount Café',
  //     description: 'Enjoy artisanal coffee and delightful pastries in a cozy, inviting ambiance.',
  //     icon: 'fas fa-coffee',
  //     image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   },
  // ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-neutral-light)] font-sans"> {/* Uses CSS variable */}
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
      <section className="py-16 md:py-24 bg-[var(--color-neutral-light)] border-t border-b border-[var(--color-border-light)]"> {/* Using CSS variables */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-neutral-dark)] mb-4 relative pb-4"> {/* Reduced font size */}
            <span className="relative z-10">Welcome to The Lake Mount</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span> {/* Uses CSS variable */}
          </h2>
          <p className="text-lg text-[var(--color-text-dark)] max-w-4xl mx-auto mb-12 leading-relaxed"> {/* Uses CSS variable */}
            Nestled by the serene waters of **Bhambori, Rajasthan**, The Lake Mount offers a luxurious escape where comfort meets tranquility. Experience breathtaking lake views, unparalleled hospitality, and exquisite dining.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Pexels image for about preview
              alt="About The Lake Mount - Luxurious Interior"
              className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover h-72 md:h-96 transition-transform duration-500 hover:scale-105 border border-[var(--color-border-light)]" // Uses CSS variable
            />
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary-brown)] mb-4 leading-tight">Your Perfect Retreat by the Lake</h3> {/* Reduced font size */}
              <p className="text-base text-[var(--color-text-dark)] mb-4 leading-relaxed"> {/* Uses CSS variable */}
                Whether you're seeking a romantic getaway, a memorable family vacation, or a peaceful retreat for reflection,
                our carefully designed rooms and world-class amenities ensure an unforgettable stay.
                Indulge in gourmet delights at our multi-cuisine restaurant, unwind with a coffee at **The Lake Mount Café**, or simply luxuriate by our pristine swimming pool.
              </p>
              <p className="text-base text-[var(--color-text-dark)] mb-6 leading-relaxed"> {/* Uses CSS variable */}
                Our dedicated team is committed to providing an exceptional experience, anticipating your needs and ensuring every moment of your stay is tailored to perfection.
              </p>
              <Link to="/about" className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-8 py-3 rounded-full text-base font-bold
                       hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide
                       border-2 border-[var(--color-secondary-gold)] hover:border-[var(--color-neutral-dark)] hover:shadow-2xl"> {/* Creative button UI */}
                Discover Our Story
              </Link>
            </div>
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
