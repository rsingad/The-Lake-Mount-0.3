// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-neutral-dark text-neutral-light py-16 text-base">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* About The Lake Mount / Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-secondary-gold text-2xl font-bold mb-5 tracking-wide">The Lake Mount</h3>
          <p className="mb-3 text-neutral-light opacity-90 leading-relaxed">Your serene escape by the tranquil lake of Bhambori.</p>
          <p className="flex items-center mb-2 text-neutral-light opacity-90">
            <i className="fas fa-map-marker-alt text-primary-blue mr-3 text-lg"></i> Bhambori, Rajasthan, India
          </p>
          <p className="flex items-center mb-2 text-neutral-light opacity-90">
            <i className="fas fa-phone text-primary-blue mr-3 text-lg"></i> +91 12345 67890
          </p>
          <p className="flex items-center mb-4 text-neutral-light opacity-90">
            <i className="fas fa-envelope text-primary-blue mr-3 text-lg"></i> info@lakemount.com
          </p>
          <p className="text-xs text-neutral-light opacity-70 mt-2">Business Hours: 9:00 AM - 10:00 PM (Daily)</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-secondary-gold text-xl font-bold mb-5 tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">About Us</Link></li>
            <li><Link to="/rooms" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Rooms & Booking</Link></li>
            <li><Link to="/restaurant" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Restaurant</Link></li>
            <li><Link to="/cafe" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">The Lake Mount Café</Link></li>
            <li><Link to="/amenities" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Amenities</Link></li>
            <li><Link to="/gallery" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Gallery</Link></li>
            <li><Link to="/explore-nearby" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Explore Nearby</Link></li>
            <li><Link to="/contact" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Contact Us</Link></li>
            <li><Link to="/testimonials" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Testimonials</Link></li>
            <li><Link to="/blog" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Blog</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-secondary-gold text-xl font-bold mb-5 tracking-wide">Connect With Us</h3>
          <div className="flex space-x-5 mb-6">
            {/* Replace # with actual social media URLs */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-light text-3xl hover:text-primary-blue transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-light text-3xl hover:text-primary-blue transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-light text-3xl hover:text-primary-blue transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-neutral-light text-3xl hover:text-primary-blue transition-colors duration-300 transform hover:scale-110">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-secondary-gold text-xl font-bold mb-5 tracking-wide">Exclusive Offers</h3>
          <p className="text-neutral-light opacity-90 mb-4 leading-relaxed">
            Subscribe to our newsletter for the latest updates, special offers, and exclusive packages.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-neutral-dark border border-primary-blue rounded-lg text-neutral-light placeholder-neutral-light placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-secondary-gold focus:border-transparent transition-all duration-300"
            />
            <button className="bg-primary-blue **text-neutral-dark** px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="border-t border-primary-blue mt-12 pt-8 text-center text-sm">
        <p className="mb-2 text-neutral-light opacity-80">&copy; {new Date().getFullYear()} The Lake Mount. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Privacy Policy</Link>
          <span className="mx-3 text-neutral-light opacity-80">|</span>
          <Link to="/terms-of-service" className="text-neutral-light hover:text-secondary-gold transition-colors duration-300">Terms of Service</Link>
        </p>
        {/* Developer Details */}
        <p className="mt-2 text-neutral-light opacity-60">Developed by Ramesh singar</p>
      </div>
    </footer>
  );
}

export default Footer;