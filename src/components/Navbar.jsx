// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[var(--color-neutral-light)] shadow-lg sticky top-0 z-50 font-sans transition-all duration-300"> {/* Uses CSS variable, more subtle shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24"> {/* Slightly reduced height for modern feel */}
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              <img
                src="./wolf.png" // Using the provided wolf.png
                alt="The Lake Mount Hotel Logo"
                className="h-16 md:h-20 w-auto rounded-full shadow-md transition-transform duration-300 hover:scale-105" // Larger, more prominent logo
                
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (only 5 visible) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
            <NavLink
              to="/"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-[var(--color-primary-brown)] transition-colors duration-200 py-2
                ${isActive ? 'text-[var(--color-primary-brown)] border-b-2 border-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)]'}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-[var(--color-primary-brown)] transition-colors duration-200 py-2
                ${isActive ? 'text-[var(--color-primary-brown)] border-b-2 border-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)]'}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/rooms"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-[var(--color-primary-brown)] transition-colors duration-200 py-2
                ${isActive ? 'text-[var(--color-primary-brown)] border-b-2 border-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)]'}`
              }
            >
              Rooms & Booking
            </NavLink>

            <NavLink
              to="/restaurant"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-[var(--color-primary-brown)] transition-colors duration-200 py-2
                ${isActive ? 'text-[var(--color-primary-brown)] border-b-2 border-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)]'}`
              }
            >
              Restaurant
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-[var(--color-primary-brown)] transition-colors duration-200 py-2
                ${isActive ? 'text-[var(--color-primary-brown)] border-b-2 border-[var(--color-primary-brown)]' : 'text-[var(--color-text-dark)]'}`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/rooms"
              onClick={closeAllMenus}
              className="ml-8 px-8 py-3 bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-neutral-dark)] hover:text-[var(--color-primary-brown)] hover:bg-[var(--color-neutral-light)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary-brown)]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (All links visible) */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[var(--color-neutral-light)] border-r border-[var(--color-border-light)] shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} id="mobile-menu"
        style={{ backgroundImage: "url('wolf.png')",backgroundPosition:"-100px -250px",backgroundRepeat:"no-repeat"}}
        >
          
        <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3"> {/* Adjusted padding for logo space */}
          
              
          
          <NavLink
            to="/"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/rooms"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Rooms & Booking
          </NavLink>

          <NavLink
            to="/restaurant"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Restaurant
          </NavLink>

          <NavLink
            to="/cafe"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            The Lake Mount Café
          </NavLink>

          <NavLink
            to="/amenities"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Amenities
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/explore-nearby"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Explore Nearby
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Testimonials
          </NavLink>

          <NavLink
            to="/blog"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)]' : 'text-[var(--color-text-dark)] hover:bg-[var(--color-primary-brown)] hover:text-[var(--color-neutral-light)]'}`
            }
          >
            Blog
          </NavLink>

          {/* Book Now Button for mobile */}
          <Link
            to="/rooms"
            onClick={closeAllMenus}
            className="block w-full text-center mt-4 px-3 py-2 bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
