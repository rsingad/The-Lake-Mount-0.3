// src/pages/Restaurant.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUtensils } from 'react-icons/fa';

function RestaurantPage() {
  const menuHighlights = [
    {
      id: 1,
      title: 'Hyderabadi Biryani',
      description: 'Authentic biryani with tender meat and aromatic spices.',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Creamy Alfredo Pasta',
      description: 'Classic pasta tossed in rich, creamy Alfredo sauce.',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Assorted Sushi Platter',
      description: 'Fresh sashimi, nigiri, and maki rolls.',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Rajasthani Thali',
      description: 'Traditional platter with authentic local delicacies.',
      image: 'https://images.pexels.com/photos/4969877/pexels-photo-4969877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Seafood Platter',
      description: 'Grilled seafood with vibrant sauces.',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
    },
    {
      id: 6,
      title: 'Chocolate Lava Cake',
      description: 'Warm cake with molten chocolate center.',
      image: 'https://images.pexels.com/photos/1346345/pexels-photo-1346345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
    },
  ];

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-70"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl">Our Exquisite Restaurant</h1>
          <p className="text-lg md:text-2xl mt-4 font-light">Savor Culinary Masterpieces by The Lake</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white shadow-inner text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] mb-6">A Culinary Journey Awaits You</h2>
          <p className="text-xl text-[var(--color-text-dark)] mb-6">
            At <strong>The Lake Mount</strong>, dining is an experience crafted to delight every palate. Enjoy authentic Indian flavors, Continental classics, and Asian specialties.
          </p>
          <Link to="/contact" className="inline-block bg-[var(--color-primary-brown)] text-white px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition">
            Book Your Table Now
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-t border-gray-200 w-1/2 mx-auto" />

      {/* Menu Highlights */}
      <section className="py-16 bg-[var(--color-neutral-light)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuHighlights.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500 border border-gray-200">
                <img src={dish.image} alt={dish.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <FaUtensils className="text-[var(--color-primary-brown)] text-2xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">{dish.title}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`mr-1 ${i < Math.floor(dish.rating) ? '' : 'opacity-30'}`} />
                      ))}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">({dish.rating})</span>
                  </div>
                  <p className="text-gray-700">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block bg-[var(--color-primary-brown)] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl">
              View Full Menu / Inquire
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Dining Experience</h2>
          <p className="text-lg md:text-xl mb-8">Call us today to reserve your table and enjoy a memorable culinary journey.</p>
          <a href="tel:+911234567890" className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 hover:scale-105 transition duration-300 shadow-xl">
            Call to Reserve (+91 12345 67890)
          </a>
        </div>
      </section>
    </div>
  );
}

export default RestaurantPage;
