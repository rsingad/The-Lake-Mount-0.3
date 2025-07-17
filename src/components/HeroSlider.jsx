// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';

function HeroSlider() {
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Luxury Restaurant Interior
      alt: 'Exquisite Dining at The Lake Mount Restaurant',
      heading: 'Indulge in Exquisite Lakeside Dining',
      subheading: 'Savor gourmet flavors crafted by master chefs with breathtaking panoramic views.',
    },
    {
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Cozy Cafe Ambiance
      alt: 'Cozy Cafe Ambiance at The Lake Mount',
      heading: 'Unwind at The Lake Mount Café',
      subheading: 'Your perfect spot for artisanal coffee, delightful pastries, and serene conversations.',
    },
    {
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Luxurious Hotel Bedroom
      alt: 'Luxurious Hotel Bedroom at The Lake Mount',
      heading: 'Your Sanctuary of Unparalleled Comfort',
      subheading: 'Experience bespoke luxury and tranquility in every meticulously designed room and suite.',
    },
    {
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Infinity Pool with Scenic View
      alt: 'Infinity Swimming Pool with Mesmerizing Lake View',
      heading: 'Dive into Serenity and Splendor',
      subheading: 'Relax by our pristine infinity pool, offering mesmerizing views of the serene lake.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Function to go to a specific slide (for navigation dots)
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide]); // Restart interval when current slide changes to ensure smooth loop

  return (
    <div className="relative w-full h-[650px] md:h-[700px] lg:h-[800px] overflow-hidden font-sans"> {/* Increased height for grander feel */}
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out
                      ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-neutral-dark bg-opacity-60 flex items-center justify-center text-center"> {/* Branded overlay */}
            <div className="max-w-5xl px-4 text-white">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-2xl animate-fade-in-up"> {/* Larger, bolder text, enhanced shadow */}
                {slide.heading}
              </h2>
              <p className="text-lg md:text-2xl lg:text-3xl mb-8 font-light drop-shadow-xl animate-fade-in-up delay-200"> {/* Lighter font, larger text */}
                {slide.subheading}
              </p>
              {/* Optional: Add a call to action button for the slide */}
              {/* <button className="bg-secondary-gold hover:bg-opacity-90 text-neutral-dark font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
                Discover More
              </button> */}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-blue text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary-blue text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-blue"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-xl"></i>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white transition-all duration-300
                        ${index === currentSlide ? 'scale-150 opacity-100 bg-secondary-gold' : 'opacity-50 hover:opacity-75'}`} // Gold active dot
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
