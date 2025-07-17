// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHotelDropdownOpen, setIsHotelDropdownOpen] = useState(false);
  const [isDiningDropdownOpen, setIsDiningDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);

  // Function to close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsHotelDropdownOpen(false);
    setIsDiningDropdownOpen(false);
    setIsExploreDropdownOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open desktop dropdowns when mobile menu opens/closes
    setIsHotelDropdownOpen(false);
    setIsDiningDropdownOpen(false);
    setIsExploreDropdownOpen(false);
  };

  // Function to toggle specific dropdowns, closing others
  const toggleDropdown = (dropdownSetter, isOpen) => {
    setIsHotelDropdownOpen(false);
    setIsDiningDropdownOpen(false);
    setIsExploreDropdownOpen(false);
    dropdownSetter(!isOpen);
  };


  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 font-sans"> {/* Changed background, enhanced shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Slightly increased height */}
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeAllMenus}>
              {/* Replace with your actual logo image */}
              <img
                src="https://placehold.co/60x60/primary-blue/neutral-light?text=LOGO" // Placeholder logo, consider a high-res hotel logo
                alt="The Lake Mount Hotel Logo"
                className="h-14 w-auto mr-3 rounded-full shadow-md" // Larger, rounded logo with shadow
              />
              <span className="text-3xl font-extrabold text-neutral-dark tracking-wide">The Lake Mount</span> {/* Larger, bolder text, tracking */}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10"> {/* Adjusted spacing */}
            <NavLink
              to="/"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-primary-blue transition-colors duration-200 py-2
                ${isActive ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-text-dark'}` // Branded active/hover states
              }
            >
              Home
            </NavLink>

            {/* Our Hotel Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsHotelDropdownOpen(true)} // Open on hover
              onMouseLeave={() => setIsHotelDropdownOpen(false)} // Close on mouse leave
            >
              <button
                onClick={() => toggleDropdown(setIsHotelDropdownOpen, isHotelDropdownOpen)}
                className="text-lg font-medium text-text-dark hover:text-primary-blue transition-colors duration-200 py-2 flex items-center focus:outline-none" // Branded hover
              >
                Our Hotel
                <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isHotelDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div
                className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-2xl py-2 border border-border-light ${isHotelDropdownOpen ? 'block animate-fade-in-down' : 'hidden'} origin-top-left`} // Premium dropdown styling, added animate-fade-in-down
              >
                <Link to="/about" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  About Us
                </Link>
                <Link to="/amenities" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Amenities
                </Link>
                <Link to="/testimonials" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Testimonials
                </Link>
              </div>
            </div>

            <NavLink
              to="/rooms"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-primary-blue transition-colors duration-200 py-2
                ${isActive ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-text-dark'}` // Branded active/hover states
              }
            >
              Rooms
            </NavLink>

            {/* Dining Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDiningDropdownOpen(true)}
              onMouseLeave={() => setIsDiningDropdownOpen(false)}
            >
              <button
                onClick={() => toggleDropdown(setIsDiningDropdownOpen, isDiningDropdownOpen)}
                className="text-lg font-medium text-text-dark hover:text-primary-blue transition-colors duration-200 py-2 flex items-center focus:outline-none" // Branded hover
              >
                Dining
                <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isDiningDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div
                className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-2xl py-2 border border-border-light ${isDiningDropdownOpen ? 'block animate-fade-in-down' : 'hidden'} origin-top-left`} // Premium dropdown styling
              >
                <Link to="/restaurant" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Restaurant
                </Link>
                <Link to="/cafe" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Cafe
                </Link>
              </div>
            </div>

            {/* Explore Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsExploreDropdownOpen(true)}
              onMouseLeave={() => setIsExploreDropdownOpen(false)}
            >
              <button
                onClick={() => toggleDropdown(setIsExploreDropdownOpen, isExploreDropdownOpen)}
                className="text-lg font-medium text-text-dark hover:text-primary-blue transition-colors duration-200 py-2 flex items-center focus:outline-none" // Branded hover
              >
                Explore
                <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isExploreDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div
                className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-2xl py-2 border border-border-light ${isExploreDropdownOpen ? 'block animate-fade-in-down' : 'hidden'} origin-top-left`} // Premium dropdown styling
              >
                <Link to="/gallery" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Gallery
                </Link>
                <Link to="/explore-nearby" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Explore Nearby
                </Link>
                <Link to="/blog" onClick={closeAllMenus} className="block px-4 py-3 text-text-dark hover:bg-primary-blue hover:text-neutral-light transition-colors duration-200"> {/* Branded hover, increased padding */}
                  Blog
                </Link>
              </div>
            </div>

            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-primary-blue transition-colors duration-200 py-2
                ${isActive ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-text-dark'}` // Branded active/hover states
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/rooms"
              onClick={closeAllMenus}
              className="ml-8 px-8 py-3 bg-secondary-gold text-neutral-dark rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors duration-300 shadow-lg transform hover:-translate-y-0.5" // Premium button style
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary-blue hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue" // Branded mobile button
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-8 w-8" // Larger icon
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
                /* Icon when menu is open */
                <svg
                  className="block h-8 w-8" // Larger icon
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

      {/* Mobile Menu Panel */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-neutral-light border-t border-border-light shadow-lg`} id="mobile-menu"> {/* Premium mobile menu styling */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-primary-blue text-neutral-light' : 'text-text-dark hover:bg-primary-blue hover:text-neutral-light'}` // Branded active/hover states
            }
          >
            Home
          </NavLink>

          {/* Mobile "Our Hotel" accordion/dropdown */}
          <button
            onClick={() => toggleDropdown(setIsHotelDropdownOpen, isHotelDropdownOpen)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-primary-blue hover:text-neutral-light flex justify-between items-center" // Branded hover
          >
            Our Hotel
            <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isHotelDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          <div className={`${isHotelDropdownOpen ? 'block' : 'hidden'} pl-6 space-y-1`}>
            <Link to="/about" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              About Us
            </Link>
            <Link to="/amenities" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Amenities
            </Link>
            <Link to="/testimonials" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Testimonials
            </Link>
          </div>

          <NavLink
            to="/rooms"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-primary-blue text-neutral-light' : 'text-text-dark hover:bg-primary-blue hover:text-neutral-light'}` // Branded active/hover states
            }
          >
            Rooms
          </NavLink>

          {/* Mobile "Dining" accordion/dropdown */}
          <button
            onClick={() => toggleDropdown(setIsDiningDropdownOpen, isDiningDropdownOpen)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-primary-blue hover:text-neutral-light flex justify-between items-center" // Branded hover
          >
            Dining
            <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isDiningDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          <div className={`${isDiningDropdownOpen ? 'block' : 'hidden'} pl-6 space-y-1`}>
            <Link to="/restaurant" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Restaurant
            </Link>
            <Link to="/cafe" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Cafe
            </Link>
          </div>

          {/* Mobile "Explore" accordion/dropdown */}
          <button
            onClick={() => toggleDropdown(setIsExploreDropdownOpen, isExploreDropdownOpen)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-primary-blue hover:text-neutral-light flex justify-between items-center" // Branded hover
          >
            Explore
            <i className={`fas fa-chevron-down ml-2 text-sm transition-transform duration-200 ${isExploreDropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          <div className={`${isExploreDropdownOpen ? 'block' : 'hidden'} pl-6 space-y-1`}>
            <Link to="/gallery" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Gallery
            </Link>
            <Link to="/explore-nearby" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Explore Nearby
            </Link>
            <Link to="/blog" onClick={closeAllMenus} className="block px-3 py-2 text-text-dark hover:bg-primary-blue hover:text-neutral-light rounded-md"> {/* Branded hover */}
              Blog
            </Link>
          </div>

          <NavLink
            to="/contact"
            onClick={closeAllMenus}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium
              ${isActive ? 'bg-primary-blue text-neutral-light' : 'text-text-dark hover:bg-primary-blue hover:text-neutral-light'}` // Branded active/hover states
            }
          >
            Contact
          </NavLink>

          {/* Book Now Button for mobile */}
          <Link
            to="/rooms" // Or to your specific booking form page
            onClick={closeAllMenus}
            className="block w-full text-center mt-4 px-3 py-2 bg-secondary-gold text-neutral-dark rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-md" // Premium mobile button style
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
