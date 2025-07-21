import React from 'react';
import { Link } from 'react-router-dom';

function ExploreNearbyPage() {
  const nearbyCategories = [
    {
      id: 1,
      name: 'Historical & Cultural Sites',
      description: 'Step back in time and discover Bhambori\'s rich history through its majestic forts, ancient temples, and significant landmarks.',
      icon: 'fas fa-gopuram',
      linkTo: '/nearby/attractions'
    },
    {
      id: 2,
      name: 'Gourmet Dining & Cafés',
      description: 'Savor local flavors and international cuisines at Bhambori\'s finest restaurants, from authentic Rajasthani thalis to elegant cafés.',
      icon: 'fas fa-utensils',
      linkTo: '/nearby/restaurants'
    },
    {
      id: 3,
      name: 'Boutiques & Local Markets',
      description: 'Indulge in unique shopping experiences, exploring vibrant markets for handicrafts and modern boutiques for contemporary finds.',
      icon: 'fas fa-shopping-basket',
      linkTo: '/nearby/shopping'
    },
    {
      id: 4,
      name: 'Lakes & Natural Landscapes',
      description: 'Immerse yourself in serene beauty, including tranquil lakes, lush gardens, and scenic viewpoints around Bhambori.',
      icon: 'fas fa-mountain',
      linkTo: '/nearby/nature'
    },
    {
      id: 5,
      name: 'Art Galleries & Museums',
      description: 'Explore the artistic soul of the region through galleries showcasing local talent and museums preserving vibrant heritage.',
      icon: 'fas fa-paint-brush',
      linkTo: '/nearby/museums'
    },
    {
      id: 6,
      name: 'Adventure & Outdoor Activities',
      description: 'For thrill-seekers and nature lovers, discover outdoor activities from scenic hikes to water sports on the lake.',
      icon: 'fas fa-hiking',
      linkTo: '/nearby/adventure'
    },
  ];

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white animate-fade-in"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Explore Bhambori
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Uncover the Enchanting Gems & Experiences Near The Lake Mount.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white shadow-inner animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] mb-6 relative pb-4">
            <span className="relative z-10">Uncover Local Gems</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span>
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] max-w-4xl mx-auto mb-8 leading-relaxed">
            The Lake Mount Hotel is your gateway to exploring the captivating beauty and vibrant culture of Bhambori and its enchanting surroundings.
          </p>
          <p className="text-lg text-[var(--color-text-dark)] max-w-4xl mx-auto leading-relaxed">
            Whether you seek thrilling <strong>adventures</strong>, deep <strong>cultural immersion</strong>, serene <strong>relaxation</strong>, or discovering local <strong>treasures</strong>, an abundance of unique activities and sights await just steps from our doors.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-neutral-light)] border-t border-b border-[var(--color-border-light)] animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4">
            <span className="relative z-10">What Are You Eager to Discover?</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-primary-brown)] rounded-full opacity-80"></span>
          </h2>

          {nearbyCategories.length === 0 ? (
            <div className="text-center text-[var(--color-text-dark)] text-xl p-8 bg-white rounded-lg shadow-md border border-[var(--color-border-light)]">
              <p>No nearby categories listed at the moment. Please check back soon for curated recommendations!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {nearbyCategories.map((category) => (
                <Link
                  key={category.id}
                  to={category.linkTo}
                  className="block bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:scale-[1.03] border border-[var(--color-border-light)] group"
                >
                  <div className="text-[var(--color-primary-brown)] text-6xl mb-6 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300">
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-3 group-hover:text-[var(--color-primary-brown)] transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-[var(--color-text-dark)] text-base leading-relaxed">{category.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-secondary-gold)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Desire Personalized Recommendations?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Our expert concierge team curates bespoke local excursions tailored to your interests.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[var(--color-secondary-gold)] shadow-md transition"
          >
            Connect with Our Concierge
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ExploreNearbyPage;
