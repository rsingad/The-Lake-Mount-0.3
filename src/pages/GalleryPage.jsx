// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GalleryPage() {
  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg', alt: 'Hotel Exterior at Sunset', category: 'Hotel' },
    { id: 2, src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', alt: 'Grand Lobby Interior', category: 'Interiors' },
    { id: 3, src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', alt: 'Suite with Lake View', category: 'Rooms' },
    { id: 4, src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg', alt: 'Dining by the Lake', category: 'Dining' },
    { id: 5, src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg', alt: 'Infinity Pool View', category: 'Amenities' },
    { id: 6, src: 'https://images.pexels.com/photos/3865556/pexels-photo-3865556.jpeg', alt: 'Spa & Wellness', category: 'Amenities' },
    { id: 7, src: 'https://images.pexels.com/photos/161732/pexels-photo-161732.jpeg', alt: 'Banquet Hall', category: 'Events' },
    { id: 8, src: 'https://images.pexels.com/photos/158607/pexels-photo-158607.jpeg', alt: 'Garden Landscape', category: 'Hotel' },
    { id: 9, src: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg', alt: 'Guest Room Bed', category: 'Rooms' },
    { id: 10, src: 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg', alt: 'Bar Lounge', category: 'Dining' },
    { id: 11, src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg', alt: 'Café Corner', category: 'Dining' },
    { id: 12, src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg', alt: 'Outdoor Event Setup', category: 'Events' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(images.map(image => image.category))];
  const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory);

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-80 md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">Our Gallery</h1>
          <p className="text-lg md:text-xl mt-4 font-light drop-shadow-md max-w-xl mx-auto">
            Explore moments of elegance and serenity captured at The Lake Mount.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium shadow-sm transition
                ${selectedCategory === category
                  ? 'bg-[var(--color-primary-gold)] text-[var(--color-neutral-dark)] shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-[var(--color-neutral-light)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.length === 0 ? (
            <p className="text-center text-lg col-span-full">No images found for this category.</p>
          ) : (
            filteredImages.map(image => (
              <div key={image.id} className="relative group rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-[1.03] transition duration-500">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-center px-4 text-sm font-light">{image.alt}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-gold)] to-[var(--color-neutral-dark)] text-[var(--color-text-dark)] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Experience The Elegance Yourself</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            These images are just a glimpse. Book your stay and create your own unforgettable memories.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-white text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[var(--color-secondary-gold)] shadow-md"
          >
            Explore Rooms & Book
          </Link>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
