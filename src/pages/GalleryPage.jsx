// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GalleryPage() {
  // Static array of image data
  // Using direct links from Pexels.com for demonstration.
  // In a real application, consider hosting images yourself or using a CDN for performance and reliability.
  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'The Lake Mount Hotel Exterior at Sunset', category: 'Hotel' },
    { id: 2, src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Grand Lobby Interior with Elegant Decor', category: 'Interiors' },
    { id: 3, src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Luxurious Suite with Panoramic Lake View', category: 'Rooms' },
    { id: 4, src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Fine Dining Experience at Lakeside Restaurant', category: 'Dining' },
    { id: 5, src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Infinity Swimming Pool Overlooking the Lake', category: 'Amenities' },
    { id: 6, src: 'https://images.pexels.com/photos/3865556/pexels-photo-3865556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Serene Spa and Wellness Sanctuary', category: 'Amenities' },
    { id: 7, src: 'https://images.pexels.com/photos/161732/pexels-photo-161732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Elegant Banquet Hall for Grand Events', category: 'Events' },
    { id: 8, src: 'https://images.pexels.com/photos/158607/pexels-photo-158607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Lush Green Garden Landscape', category: 'Hotel' },
    { id: 9, src: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Comfortable and Stylish Guest Room Bed', category: 'Rooms' },
    { id: 10, src: 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Sophisticated Bar Lounge for Evening Relaxation', category: 'Dining' },
    { id: 11, src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Cozy Corner at The Lake Mount Café', category: 'Dining' },
    { id: 12, src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Outdoor Event Setup by the Lake', category: 'Events' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(images.map(image => image.category))];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Gallery Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }} // Pexels image for banner
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Our Visual Journey
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            A Glimpse into The Lake Mount Experience: Moments of Serenity & Splendor.
          </p>
        </div>
      </section>

      {/* Introduction to Gallery */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6 relative pb-4">
            <span className="relative z-10">Moments Captured, Memories Awaited</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-8 leading-relaxed">
            Step into our visual diary and explore the captivating beauty of The Lake Mount Hotel. Our gallery showcases the elegance of our interiors, the tranquility of our lakeside setting, and the vibrant experiences that await you.
          </p>
          <p className="text-lg text-text-dark max-w-4xl mx-auto leading-relaxed">
            Each photograph tells a story of luxury, comfort, and the serene charm that defines our unique destination. We invite you to browse and envision your perfect escape with us.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">Explore Our Visual Collection</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span> {/* Blue underline */}
          </h2>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16"> {/* Increased gap and margin-bottom */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-primary-blue text-neutral-dark' // Active: Primary Blue background, Dark text
                    : 'bg-neutral-light text-text-dark hover:bg-white border border-border-light' // Inactive: Light background, Dark text, subtle border
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          {filteredImages.length === 0 ? (
            <div className="text-center text-text-dark text-xl p-8 bg-white rounded-lg shadow-md border border-border-light">
              <p>No images found for this category. Please select another or check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Increased gap */}
              {filteredImages.map((image) => (
                <div key={image.id} className="relative group overflow-hidden rounded-2xl shadow-3xl bg-white border border-border-light transform transition-all duration-500 hover:scale-[1.02]"> {/* More rounded, deeper shadow, border, subtle scale on hover */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" // Taller image, smooth zoom on hover
                  />
                  <div className="absolute inset-0 bg-neutral-dark bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"> {/* Darker overlay, smoother transition */}
                    <p className="text-neutral-light text-xl font-bold text-center p-4 leading-relaxed">{image.alt}</p> {/* Lighter text, bolder, larger */}
                  </div>
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
            Experience The Beauty Yourself
          </h2>
          <p className="text-lg md:text-xl mb-8 text-black/30">
            These images are just a glimpse. Book your stay and create your own unforgettable memories at The Lake Mount.
          </p>
          <Link
            to="/rooms"
            className="inline-block hover:bg-black hover:text-white text-neutral-dark px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-opacity-90 text-black hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Explore Our Rooms & Book
          </Link>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;