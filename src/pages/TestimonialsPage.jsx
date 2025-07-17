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
    },
    {
      id: 2,
      quote: "From the delicious food at the restaurant to the tranquil spa, every aspect of our visit was perfect. The Executive Suite was incredibly comfortable and well-appointed. Highly recommended!",
      author: "Rahul Gupta",
      location: "Delhi, India",
      rating: 5,
    },
    {
      id: 3,
      quote: "A truly peaceful getaway! The hotel's location by the lake is ideal for relaxation. The amenities, especially the pool, were top-notch. Great service and a memorable experience.",
      author: "Anjali Singh",
      location: "Bengaluru, India",
      rating: 4,
    },
    {
      id: 4,
      quote: "We hosted our corporate event here, and everything went smoothly. The conference facilities were excellent, and the event team was incredibly supportive. Our clients were very impressed.",
      author: "Vikram Kumar",
      location: "Hyderabad, India",
      rating: 5,
    },
    {
      id: 5,
      quote: "The Lake Mount is a hidden gem! The rooms are clean, spacious, and offer beautiful views. The staff went above and beyond to make our anniversary special. Fantastic experience!",
      author: "Sneha Reddy",
      location: "Chennai, India",
      rating: 5,
    },
    {
      id: 6,
      quote: "Enjoyed a wonderful family vacation. The kids loved the pool, and we appreciated the thoughtful services. It's a perfect blend of luxury and comfort.",
      author: "Arjun Desai",
      location: "Ahmedabad, India",
      rating: 4,
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
          className={`fas fa-star ${i < rating ? 'text-secondary-gold' : 'text-gray-300'}`}
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
      <section className="py-20 md:py-32 bg-neutral-light font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
            <span className="relative z-10">What Our Cherished Guests Say</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
          </h2>
          <div className="text-center text-text-dark text-xl p-10 bg-white rounded-2xl shadow-lg border border-border-light">
            <p className="font-semibold">No testimonials available at the moment. Check back soon for heartwarming feedback!</p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-neutral-light font-sans relative overflow-hidden"> {/* Added relative and overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark text-center mb-16 relative pb-4">
          <span className="relative z-10">What Our Cherished Guests Say</span>
          <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-secondary-gold rounded-full opacity-80"></span>
        </h2>

        <div className="relative flex items-center justify-center"> {/* Flex container for slider and navigation */}
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 lg:-left-20 z-20 p-4 rounded-full bg-primary-blue text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-blue"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-black text-xl"></i>
          </button>

          {/* Testimonial Card */}
          <div
            key={currentTestimonial.id} // Key change for re-render and transition trigger
            className="bg-white rounded-2xl shadow-3xl p-10 transform transition-all duration-700 ease-in-out flex flex-col justify-between border border-border-light max-w-3xl w-full" // Added max-w and w-full
          >
            {renderStars(currentTestimonial.rating)}
            <p className="text-text-dark text-xl md:text-lg italic mb-8 text-center font-serif leading-relaxed">
              "{currentTestimonial.quote}"
            </p>
            <div className="text-center mt-auto border-t border-border-light pt-6">
              <p className="text-primary-blue font-extrabold text-xl mb-1">{currentTestimonial.author}</p>
              <p className="text-text-dark opacity-80 text-sm font-medium">{currentTestimonial.location}</p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 lg:-right-20 z-20 p-4 rounded-full bg-primary-blue text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-blue"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-xl text-black"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
