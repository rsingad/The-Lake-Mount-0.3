// src/components/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';

function TestimonialsSection() {
  // Static data for testimonials
  const testimonialsData = [
    {
      id: 1,
      quote: "Our stay at The Lake Mount Hotel was absolutely magical! The serene lake views from our room were breathtaking, and the staff's hospitality was truly exceptional. We can't wait to come back!",
      author: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      profileImage: "https://placehold.co/80x80/74512D/F8F4E1?text=PS" // Placeholder image for Priya Sharma
    },
    {
      id: 2,
      quote: "From the delicious food at the restaurant to the tranquil spa, every aspect of our visit was perfect. The Executive Suite was incredibly comfortable and well-appointed. Highly recommended!",
      author: "Rahul Gupta",
      location: "Delhi, India",
      rating: 5,
      profileImage: "https://placehold.co/80x80/FEBA17/4E1F00?text=RG" // Placeholder image for Rahul Gupta
    },
    {
      id: 3,
      quote: "A truly peaceful getaway! The hotel's location by the lake is ideal for relaxation. The amenities, especially the pool, were top-notch. Great service and a memorable experience.",
      author: "Anjali Singh",
      location: "Bengaluru, India",
      rating: 4,
      profileImage: "https://placehold.co/80x80/4E1F00/F8F4E1?text=AS" // Placeholder image for Anjali Singh
    },
    {
      id: 4,
      quote: "We hosted our corporate event here, and everything went smoothly. The conference facilities were excellent, and the event team was incredibly supportive. Our clients were very impressed.",
      author: "Vikram Kumar",
      location: "Hyderabad, India",
      rating: 5,
      profileImage: "https://placehold.co/80x80/E5DED5/4E1F00?text=VK" // Placeholder image for Vikram Kumar
    },
    {
      id: 5,
      quote: "The Lake Mount is a hidden gem! The rooms are clean, spacious, and offer beautiful views. The staff went above and beyond to make our anniversary special. Fantastic experience!",
      author: "Sneha Reddy",
      location: "Chennai, India",
      rating: 5,
      profileImage: "https://placehold.co/80x80/F8F4E1/74512D?text=SR" // Placeholder image for Sneha Reddy
    },
    {
      id: 6,
      quote: "Enjoyed a wonderful family vacation. The kids loved the pool, and we appreciated the thoughtful services. It's a perfect blend of luxury and comfort.",
      author: "Arjun Desai",
      location: "Ahmedabad, India",
      rating: 4,
      profileImage: "https://placehold.co/80x80/74512D/FEBA17?text=AD" // Placeholder image for Arjun Desai
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i < rating ? 'text-[var(--color-secondary-gold)]' : 'text-gray-300'}`}
        ></i>
      );
    }
    return <div className="flex justify-center mb-5">{stars}</div>;
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]); // Restart interval when current slide changes

  if (testimonialsData.length === 0) {
    return (
      <section className="py-20 md:py-32 bg-[var(--color-neutral-light)] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4">
            <span className="relative z-10">What Our Cherished Guests Say</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span>
          </h2>
          <div className="text-center text-[var(--color-text-dark)] text-xl p-10 bg-white rounded-2xl shadow-lg border border-[var(--color-border-light)]">
            <p className="font-semibold">No testimonials available at the moment. Check back soon for heartwarming feedback!</p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-[var(--color-neutral-light)] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4">
          <span className="relative z-10">What Our Cherished Guests Say</span>
          <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 lg:-left-20 z-20 p-4 rounded-full bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brown)]"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>

          {/* Testimonial Card */}
          {/* Added animate-fade-in for a smoother entry animation */}
          <div
            key={currentTestimonial.id}
            className="bg-white rounded-2xl shadow-3xl p-10 transform transition-all duration-700 ease-in-out flex flex-col justify-between border border-[var(--color-border-light)] max-w-3xl w-full animate-fade-in"
          >
            <div className="flex flex-col items-center mb-6">
              {currentTestimonial.profileImage ? (
                <img
                  src={currentTestimonial.profileImage}
                  alt={currentTestimonial.author}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[var(--color-secondary-gold)] shadow-md"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] flex items-center justify-center text-3xl font-bold mb-4 shadow-md">
                  {currentTestimonial.author.charAt(0)}
                </div>
              )}
              {renderStars(currentTestimonial.rating)}
            </div>
            <p className="text-[var(--color-text-dark)] text-xl md:text-lg italic mb-8 text-center font-serif leading-relaxed">
              "{currentTestimonial.quote}"
            </p>
            <div className="text-center mt-auto border-t border-[var(--color-border-light)] pt-6">
              <p className="text-[var(--color-primary-brown)] font-extrabold text-xl mb-1">{currentTestimonial.author}</p>
              <p className="text-[var(--color-text-dark)] opacity-80 text-sm font-medium">{currentTestimonial.location}</p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 lg:-right-20 z-20 p-4 rounded-full bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brown)]"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-[var(--color-primary-brown)] shadow-sm
                ${currentIndex === index ? 'bg-[var(--color-primary-brown)] scale-125' : 'bg-[var(--color-border-light)] hover:bg-[var(--color-secondary-gold)]'}` // Improved inactive dot styling
              }
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
