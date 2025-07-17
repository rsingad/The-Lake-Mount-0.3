// src/pages/ExploreNearbyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ExploreNearbyPage() {
  // Static data for nearby categories
  const nearbyCategories = [
    {
      id: 1,
      name: 'Historical & Cultural Sites',
      description: 'Step back in time and discover Bhambori\'s rich history through its majestic forts, ancient temples, and significant landmarks.',
      icon: 'fas fa-gopuram', // More specific icon for historical/cultural sites, assuming Font Awesome 5 or 6 is used
      linkTo: '/nearby/attractions'
    },
    {
      id: 2,
      name: 'Gourmet Dining & Cafés',
      description: 'Savor the local flavors and international cuisines at Bhambori\'s finest restaurants, from authentic Rajasthani thalis to elegant cafés.',
      icon: 'fas fa-utensils',
      linkTo: '/nearby/restaurants'
    },
    {
      id: 3,
      name: 'Boutiques & Local Markets',
      description: 'Indulge in a unique shopping experience, exploring vibrant local markets for handicrafts and modern boutiques for contemporary finds.',
      icon: 'fas fa-shopping-basket', // More specific icon for markets/shopping
      linkTo: '/nearby/shopping'
    },
    {
      id: 4,
      name: 'Lakes & Natural Landscapes',
      description: 'Immerse yourself in the serene beauty of Bhambori\'s natural surroundings, including tranquil lakes, lush gardens, and scenic viewpoints.',
      icon: 'fas fa-mountain', // Changed to mountain for landscapes
      linkTo: '/nearby/nature'
    },
    {
      id: 5,
      name: 'Art Galleries & Museums',
      description: 'Explore the artistic soul of the region at various galleries showcasing local talent and museums preserving Rajasthan\'s vibrant heritage.',
      icon: 'fas fa-paint-brush', // More specific icon for art
      linkTo: '/nearby/museums'
    },
    {
      id: 6,
      name: 'Adventure & Outdoor Activities',
      description: 'For the thrill-seekers and nature lovers, discover exciting outdoor activities from scenic hikes to water sports on the lake.',
      icon: 'fas fa-hiking', // Specific icon for adventure
      linkTo: '/nearby/adventure'
    },
  ];

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Explore Nearby Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg')" }} // Ensure this high-quality image exists
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Explore Bhambori
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Uncover the Enchanting Gems & Experiences Near The Lake Mount.
          </p>
        </div>
      </section>

      {/* Introduction to Nearby Exploration */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6 relative pb-4">
            <span className="relative z-10">Uncover Local Gems</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-8 leading-relaxed">
            The Lake Mount Hotel is not just a stay; it's your gateway to exploring the captivating beauty and vibrant culture of Bhambori and its enchanting surroundings. Our prime location offers you effortless access to a myriad of experiences.
          </p>
          <p className="text-lg text-text-dark max-w-4xl mx-auto leading-relaxed">
            Whether your desire is for thrilling **adventure**, deep **cultural immersion**, serene **relaxation**, or simply discovering local **treasures**, there is an abundance of unique activities and sights awaiting you just a short distance from our doors. Allow us to guide you to the very best of our region.
          </p>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">What Are You Eager to Discover?</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span> {/* Blue underline */}
          </h2>
          {nearbyCategories.length === 0 ? (
            <div className="text-center text-text-dark text-xl p-8 bg-white rounded-lg shadow-md border border-border-light">
              <p>No nearby categories listed at the moment. Please check back soon for our curated recommendations!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
              {nearbyCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.linkTo}
                  className="block bg-white rounded-2xl shadow-3xl p-8 text-center transform transition-all duration-500 hover:scale-[1.03] border border-border-light group" // Premium card style
                >
                  <div className="text-primary-blue text-7xl mb-6 group-hover:text-secondary-gold transition-colors duration-300"> {/* Larger icon, gold hover */}
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-3 group-hover:text-primary-blue transition-colors duration-300">{category.name}</h3> {/* Darker text, blue hover */}
                  <p className="text-text-dark text-base leading-relaxed">{category.description}</p> {/* Darker, slightly larger body text */}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action for Personalized Recommendations */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-neutral-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Desire Personalized Recommendations?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-black/30">
            Our expert concierge team is dedicated to curating bespoke local excursions tailored to your interests.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary-gold text-neutral-dark px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-black hover:text-white text-black hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Connect with Our Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ExploreNearbyPage;