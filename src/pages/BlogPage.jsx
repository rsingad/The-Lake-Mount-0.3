// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPage() {
  // Static data for blog posts
  // In a real application, this data would come from your backend/CMS
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Must-Visit Attractions Near The Lake Mount',
      excerpt: 'Discover the hidden gems and popular landmarks just a short drive from our hotel. Perfect for history buffs and adventure seekers alike!',
      image: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Changed to a Pexels image
      date: 'July 10, 2024',
      author: 'Hotel Management',
      slug: 'top-attractions-near-hotel' // Unique identifier for the post URL
    },
    {
      id: 2,
      title: 'A Culinary Journey: Exploring Authentic Rajasthani Flavors',
      excerpt: 'Dive into the rich and vibrant cuisine of Rajasthan. Our guide to local dishes and where to find the best authentic flavors for a true gastronomic delight.',
      image: 'https://images.pexels.com/photos/4969877/pexels-photo-4969877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'June 28, 2024',
      author: 'Hotel Chef',
      slug: 'rajasthani-flavors'
    },
    {
      id: 3,
      title: 'Wellness & Rejuvenation: Your Guide to Our Signature Spa Services',
      excerpt: 'Unwind and rejuvenate at The Lake Mount Spa. Learn about our bespoke treatments and how to book your ultimate relaxation and holistic wellness session.',
      image: 'https://images.pexels.com/photos/3865556/pexels-photo-3865556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'June 15, 2024',
      author: 'Wellness Team',
      slug: 'spa-services-guide'
    },
    {
      id: 4,
      title: 'Planning Your Dream Destination Wedding at The Lake Mount',
      excerpt: 'Dreaming of a fairytale wedding by the lake? Discover our bespoke wedding packages and how we meticulously craft every detail to make your special day unforgettable.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'May 30, 2024',
      author: 'Events Manager',
      slug: 'destination-wedding-guide'
    },
    {
      id: 5,
      title: 'Seasonal Delights: The Best Times to Experience Bhambori',
      excerpt: 'Find out the ideal time to plan your trip to Bhambori, based on weather, vibrant local festivals, and unique experiences each season offers for an enriched visit.',
      image: 'https://images.pexels.com/photos/158607/pexels-photo-158607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'May 10, 2024',
      author: 'Travel Expert',
      slug: 'best-times-to-visit'
    },
    {
      id: 6,
      title: 'Beyond the Stay: Engaging Activities for Young Guests at The Lake Mount',
      excerpt: 'Traveling with family? Explore fun and interactive activities designed for our younger guests, ensuring a delightful and memorable experience for everyone.',
      image: 'https://images.pexels.com/photos/2096196/pexels-photo-2096196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'April 25, 2024',
      author: 'Family Concierge',
      slug: 'kids-activities-hotel'
    },
  ];

  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen font-sans">
      {/* Blog Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20791613/pexels-photo-20791613.jpeg')" }} // Using a more generic, high-quality image
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Our Insights & Stories
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Discover Travel Tips, Culinary Adventures, and Hotel Highlights from The Lake Mount.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-[var(--color-border-light)]"> {/* Added borders and background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4 animate-fade-in-up"> {/* Added fade-in-up animation */}
            <span className="relative z-10">Latest Articles & Updates</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>

          {blogPosts.length === 0 ? (
            <div className="text-center text-[var(--color-text-dark)] text-xl p-8 bg-[var(--color-neutral-light)] rounded-lg shadow-md border border-[var(--color-border-light)]">
              <p>No blog posts available at the moment. Please check back soon for fresh content!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-[var(--color-neutral-light)] rounded-2xl shadow-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border border-[var(--color-border-light)] group hover:shadow-2xl"> {/* Enhanced 3D effect: increased scale, translateY, and shadow on hover */}
                  <Link to={`/blog/${post.slug}`} className="block"> {/* Image is now a clickable block */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" // Larger image, zoom effect
                    />
                  </Link>
                  <div className="p-8"> {/* More padding */}
                    <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-3 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[var(--color-primary-brown)] transition-colors duration-300"> {/* Primary Brown hover for link */}
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--color-text-dark)] text-base mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p> {/* Darker text, slightly larger, relaxed leading */}
                    <div className="flex justify-between items-center text-[var(--color-text-dark)] opacity-70 text-sm mb-4"> {/* Darker info text, slightly larger, more opacity */}
                      <span><i className="far fa-calendar-alt mr-2 text-[var(--color-primary-brown)]"></i> {post.date}</span> {/* Primary Brown icon */}
                      <span><i className="far fa-user mr-2 text-[var(--color-primary-brown)]"></i> {post.author}</span> {/* Primary Brown icon */}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] px-6 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-md group-hover:bg-[var(--color-secondary-gold)] group-hover:text-[var(--color-neutral-dark)]" // Button style
                    >
                      Read More
                      <i className="fas fa-arrow-right ml-3 text-sm"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Optional: Call to Action for Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center"> {/* Uses CSS variables */}
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md animate-fade-in-up"> {/* Added fade-in-up animation */}
            Stay Connected with Our Stories!
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-100"> {/* Added fade-in-up animation and delay */}
            Subscribe to our exclusive newsletter for the latest hotel news, captivating travel insights, and special offers delivered right to your inbox.
          </p>
          <Link
            to="/contact" // Assuming /contact handles newsletter sign-up or directs to a form
            className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide"
          >
            Subscribe for Updates
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
