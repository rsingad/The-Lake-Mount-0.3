// src/components/CallToActionSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center"> {/* Uses CSS variables for gradient background and text color */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md hover:text-[var(--color-secondary-gold)] transition-colors duration-300">Your Unforgettable Stay Awaits</h2> {/* Uses CSS variable for hover effect */}
        <p className="text-xl md:text-2xl mb-10 opacity-90 text-[var(--color-neutral-light)]"> {/* Ensures text is light for contrast */}
          Book directly with us today for the best rates and personalized service. Experience luxury, comfort, and tranquility at The Lake Mount.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/rooms"
            className="bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-5 rounded-full text-xl font-bold hover:bg-opacity-90 transition-colors duration-300 shadow-xl transform hover:-translate-y-1"
          > {/* Gold button, dark text, lift effect */}
            Book Now
          </Link>
          <a
            href="tel:+919876543210" // Example Indian phone number
            className="border-2 border-[var(--color-neutral-light)] text-[var(--color-neutral-light)] px-10 py-5 rounded-full text-xl font-bold hover:bg-[var(--color-neutral-light)] hover:text-[var(--color-neutral-dark)] transition-colors duration-300 shadow-xl transform hover:-translate-y-1"
          > {/* Inverted button style with light text, light background on hover, dark text on hover */}
            Call Us: +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
