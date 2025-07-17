// src/components/CallToActionSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue to-neutral-dark text-white text-center"> {/* Gradient background */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md hover:text-black transition-colors duration-300">Your Unforgettable Stay Awaits</h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 text-black/40">
          Book directly with us today for the best rates and personalized service. Experience luxury, comfort, and tranquility at The Lake Mount.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/rooms" className="bg-secondary-gold  text-black hover:text-white hover:bg-black px-10 py-5 rounded-full text-xl font-bold transition-colors duration-300 shadow-xl transform hover:-translate-y-1"> {/* Gold button, dark text, lift effect */}
            Book Now
          </Link>
          <a
            href="tel:+919876543210" // Example Indian phone number
            className="border-2 border-neutral-light text-black px-10 py-5 rounded-full text-xl font-bold hover:text-white hover:bg-black hover:bg-neutral-light hover:text-neutral-dark transition-colors duration-300 shadow-xl transform hover:-translate-y-1" // Inverted button style with dark text for better contrast
          >
            Call Us: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;