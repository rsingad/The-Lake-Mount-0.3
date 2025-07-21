// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] py-16 text-base font-sans"> {/* Uses CSS variables */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* About The Lake Mount / Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[var(--color-secondary-gold)] text-2xl font-bold mb-5 tracking-wide uppercase">The Lake Mount</h3> {/* Uses CSS variable, added uppercase */}
          <p className="mb-3 text-[var(--color-neutral-light)] opacity-90 leading-relaxed">Your serene escape by the tranquil lake of Bhambori, Rajasthan.</p> {/* Uses CSS variable, added location detail */}
          <p className="flex items-center mb-2 text-[var(--color-neutral-light)] opacity-90"> {/* Uses CSS variable */}
            <i className="fas fa-map-marker-alt text-[var(--color-primary-brown)] mr-3 text-lg"></i> Bhambori, Rajasthan, India {/* Uses CSS variable */}
          </p>
          <p className="flex items-center mb-2 text-[var(--color-neutral-light)] opacity-90"> {/* Uses CSS variable */}
            <i className="fas fa-phone text-[var(--color-primary-brown)] mr-3 text-lg"></i> +91 12345 67890 {/* Uses CSS variable */}
          </p>
          <p className="flex items-center mb-4 text-[var(--color-neutral-light)] opacity-90"> {/* Uses CSS variable */}
            <i className="fas fa-envelope text-[var(--color-primary-brown)] mr-3 text-lg"></i> info@lakemount.com {/* Uses CSS variable */}
          </p>
          <p className="text-xs text-[var(--color-neutral-light)] opacity-70 mt-2">Business Hours: 9:00 AM - 10:00 PM (Daily)</p> {/* Uses CSS variable */}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[var(--color-secondary-gold)] text-xl font-bold mb-5 tracking-wide uppercase">Quick Links</h3> {/* Uses CSS variable, added uppercase */}
          <ul className="space-y-3">
            <li><Link to="/about" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">About Us</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/rooms" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Rooms & Booking</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/restaurant" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Restaurant</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/cafe" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">The Lake Mount Café</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/amenities" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Amenities</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/gallery" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Gallery</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/explore-nearby" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Explore Nearby</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/contact" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Contact Us</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/testimonials" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Testimonials</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/blog" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">Blog</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
            <li><Link to="/cafe" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300 transform hover:translate-x-1">cafe</Link></li> {/* Uses CSS variables, added transform for subtle hover */}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[var(--color-secondary-gold)] text-xl font-bold mb-5 tracking-wide uppercase">Connect With Us</h3> {/* Uses CSS variable, added uppercase */}
          <div className="flex space-x-5 mb-6">
            {/* Replace # with actual social media URLs */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--color-neutral-light)] text-4xl hover:text-[var(--color-primary-brown)] transition-colors duration-300 transform hover:scale-110"> {/* Uses CSS variables, increased size */}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-neutral-light)] text-4xl hover:text-[var(--color-primary-brown)] transition-colors duration-300 transform hover:scale-110"> {/* Uses CSS variables, increased size */}
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[var(--color-neutral-light)] text-4xl hover:text-[var(--color-primary-brown)] transition-colors duration-300 transform hover:scale-110"> {/* Uses CSS variables, increased size */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[var(--color-neutral-light)] text-4xl hover:text-[var(--color-primary-brown)] transition-colors duration-300 transform hover:scale-110"> {/* Uses CSS variables, increased size */}
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[var(--color-secondary-gold)] text-xl font-bold mb-5 tracking-wide uppercase">Exclusive Offers</h3> {/* Uses CSS variable, added uppercase */}
          <p className="text-[var(--color-neutral-light)] opacity-90 mb-4 leading-relaxed"> {/* Uses CSS variable */}
            Subscribe to our newsletter for the latest updates, special offers, and exclusive packages.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[var(--color-neutral-dark)] border border-[var(--color-primary-brown)] rounded-lg text-[var(--color-neutral-light)] placeholder-[var(--color-neutral-light)] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-gold)] focus:border-transparent transition-all duration-300"
            />
            <button className="bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-md font-semibold"> {/* Corrected text color to neutral-light */}
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="border-t border-[var(--color-primary-brown)] mt-12 pt-8 text-center text-sm"> {/* Uses CSS variable */}
        <p className="mb-2 text-[var(--color-neutral-light)] opacity-80">&copy; {new Date().getFullYear()} The Lake Mount. All rights reserved.</p> {/* Uses CSS variable */}
        <p>
          <Link to="/privacy-policy" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300">Privacy Policy</Link> {/* Uses CSS variables */}
          <span className="mx-3 text-[var(--color-neutral-light)] opacity-80">|</span> {/* Uses CSS variable */}
          <Link to="/terms-of-service" className="text-[var(--color-neutral-light)] hover:text-[var(--color-secondary-gold)] transition-colors duration-300">Terms of Service</Link> {/* Uses CSS variables */}
        </p>
        {/* Developer Details */}
        <p className="mt-2 text-[var(--color-neutral-light)] opacity-60">Developed by Ramesh singar</p> {/* Uses CSS variable */}
      </div>
    </footer>
  );
}

export default Footer;
