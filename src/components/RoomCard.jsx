// src/components/RoomCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ roomType }) {
  const { _id, name, description, pricePerNight, maxGuests, images, amenities } = roomType;

  // Use the first image from the roomType's images array, or a placeholder if none are provided
  // Ensure your public/images/ directory contains 'room-placeholder.jpg' or use a Pexels link
  const imageUrl = images && images.length > 0 ? images[0] : 'https://placehold.co/600x400/E0E7FF/3F51B5?text=Room+Image';

  return (
    <div className="relative bg-[var(--color-neutral-light)] rounded-2xl shadow-3xl overflow-hidden transform hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 border border-[var(--color-border-light)] group"> {/* Enhanced 3D effect: increased scale, translateY, and transition */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" // Image zoom on hover
      />

      <div className="p-6 md:p-8"> {/* Increased padding, more for medium screens */}
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] mb-3 leading-tight">{name}</h3> {/* Dark heading, tight line-height, responsive font size, uses CSS variable */}
        <p className="text-base md:text-lg text-[var(--color-text-dark)] mb-4 line-clamp-3 leading-relaxed">{description}</p> {/* Dark text, relaxed line-height, responsive font size, uses CSS variable */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6"> {/* Grid for details, increased gap */}
          <div className="flex items-center text-[var(--color-text-dark)] text-base md:text-lg p-2 bg-white rounded-md shadow-sm border border-[var(--color-border-light)]"> {/* Card style for details, uses CSS variables */}
            <i className="fas fa-users mr-3 text-[var(--color-primary-brown)]"></i> Max Guests: <span className="font-semibold ml-1">{maxGuests}</span> {/* Uses CSS variable */}
          </div>
          <div className="flex items-center text-[var(--color-text-dark)] text-base md:text-lg p-2 bg-white rounded-md shadow-sm border border-[var(--color-border-light)]"> {/* Card style for details, uses CSS variables */}
            <span className="font-bold text-lg md:text-xl text-[var(--color-secondary-gold)] ml-1">₹{pricePerNight.toLocaleString('en-IN')}/night</span> {/* Golden price, formatted, responsive font size, uses CSS variable */}
          </div>
        </div>

        {/* Display a few key amenities */}
        {amenities && amenities.length > 0 && (
          <div className="mb-6"> {/* Increased bottom margin */}
            <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-3">Key Amenities:</h4> {/* Dark heading, uses CSS variable */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--color-text-dark)] text-sm md:text-base"> {/* Dark text, slightly larger, uses CSS variable */}
              {amenities.slice(0, 4).map((amenity, index) => ( // Show only the first 4 amenities
                <li key={index} className="flex items-center p-1 bg-white rounded-md shadow-sm border border-[var(--color-border-light)]"> {/* Amenity item styling, uses CSS variables */}
                  <i className="fas fa-check-circle text-[var(--color-primary-brown)] mr-2"></i> {amenity} {/* Primary brown checkmark, uses CSS variable */}
                </li>
              ))}
              {amenities.length > 4 && (
                <li className="col-span-full text-center text-[var(--color-text-dark)] opacity-70 text-xs md:text-sm mt-3"> {/* Dark, more opaque, larger margin, uses CSS variable */}
                  (and more features available...)
                </li>
              )}
            </ul>
          </div>
        )}

        <Link
          to={`/rooms/${_id}`}
          className="block w-full text-center py-4 rounded-full font-bold bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] hover:bg-opacity-90 hover:scale-105 transition-all duration-300 mt-6 shadow-xl tracking-wide" 
        >
          View Details & Book
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
