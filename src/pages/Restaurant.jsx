// src/pages/Restaurant.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantPage() {
  // Static data for menu highlights
  const menuHighlights = [
    {
      id: 1,
      title: 'Hyderabadi Biryani',
      description: 'Experience the rich aroma and exquisite taste of our authentic Hyderabadi Biryani, prepared with tender meat/vegetables and rare, aromatic spices.',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
    {
      id: 2,
      title: 'Creamy Alfredo Pasta',
      description: 'Indulge in a classic Italian delight: fresh, al dente pasta tossed in a luxurious, velvety Alfredo sauce with sautéed mushrooms and succulent grilled chicken.',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
    {
      id: 3,
      title: 'Assorted Sushi Platter',
      description: 'A masterpiece of Japanese culinary art, our assorted sushi platter features the freshest sashimi, delicate nigiri, and expertly rolled maki, a true delight for connoisseurs.',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
    {
      id: 4,
      title: 'Traditional Rajasthani Thali', // Changed name to Thali for authenticity
      description: 'Embark on a culinary journey through Rajasthan with our traditional Thali, a grand platter featuring an array of authentic local delicacies and flavors.',
      image: 'https://images.pexels.com/photos/4969877/pexels-photo-4969877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
    {
      id: 5,
      title: 'Seafood Platter by the Lake',
      description: 'Freshly caught seafood, expertly grilled and seasoned, served with a selection of vibrant sauces, offering a taste of the ocean with a serene lake view.',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
    {
      id: 6,
      title: 'Decadent Chocolate Lava Cake',
      description: 'A warm, rich chocolate cake with a molten center, served with a scoop of artisanal vanilla bean ice cream. The perfect sweet ending to your meal.',
      image: 'https://images.pexels.com/photos/1346345/pexels-photo-1346345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels image
    },
  ];

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Restaurant Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }} // Pexels image for banner
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Our Exquisite Restaurant
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Savor Culinary Masterpieces by The Lake.
          </p>
        </div>
      </section>

      {/* Introduction to Dining */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-6 relative pb-4">
            <span className="relative z-10">A Culinary Journey Awaits You</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>
          <p className="text-xl text-text-dark max-w-4xl mx-auto mb-8 leading-relaxed">
            At **The Lake Mount**, dining is an experience meticulously crafted to delight every palate. Our **signature multi-cuisine restaurant** offers a delightful array of dishes, each prepared by our **master chefs** using only the freshest, locally-sourced ingredients. Whether your craving is for authentic Indian flavors, Continental classics, or exquisite Asian specialties, our diverse menu is designed to tantalize your taste buds.
          </p>
          <p className="text-lg text-text-dark max-w-4xl mx-auto leading-relaxed">
            Enjoy your meal in our **elegantly designed dining hall**, featuring sophisticated decor and warm ambiance, or opt for an **al-fresco experience** on our terrace with stunning panoramic lake views. Every meal with us promises to be an unforgettable culinary journey.
          </p>
        </div>
      </section>

      {/* Signature Dishes & Menu Highlights */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">Our Signature Culinary Creations</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary-blue rounded-full opacity-80"></span> {/* Blue underline */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            {menuHighlights.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] border border-border-light group"> {/* Premium card style */}
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" // Taller image, zoom effect
                />
                <div className="p-8"> {/* More padding */}
                  <h3 className="text-2xl font-bold text-neutral-dark mb-3 leading-tight">{dish.title}</h3> {/* Darker heading, tighter line-height */}
                  <p className="text-text-dark leading-relaxed text-base">{dish.description}</p> {/* Darker, slightly larger body text */}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            {/* Link to a full menu or contact for menu */}
            <Link to="/contact" className="inline-block bg-primary-blue text-neutral-dark px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide">
              View Our Full Menu (Inquire)
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-neutral-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Plan Your Exquisite Culinary Experience
          </h2>
          <p className="text-lg text-black/30 md:text-xl mb-8 opacity-90">
            Make a reservation today to ensure your preferred dining time and a memorable experience.
          </p>
          {/* Using a tel: link for direct call for reservations in absence of a booking form */}
          <a
            href="tel:+911234567890"
            className="inline-block bg-secondary-gold text-black px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Call to Reserve a Table (+91 12345 67890)
          </a>
        </div>
      </section>
    </div>
  );
}

export default RestaurantPage;
