// src/pages/AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div className="bg-[var(--color-neutral-light)] min-h-screen text-[var(--color-text-dark)] font-sans">
      {/* Hero Banner Section */}
      <section
        className="relative h-80 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20791613/pexels-photo-20791613.jpeg')" }} // Using a more generic, high-quality image
      >
        <div className="absolute inset-0 bg-[var(--color-neutral-dark)] opacity-70"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider animate-fade-in-up">
            Our Legacy, Your Luxury!
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto animate-fade-in-up delay-100">
            Discover the Heart of The Lake Mount: A Timeless Tale of Serenity and Splendor.
          </p>
        </div>
      </section>

      {/* Introduction Section - Elevated & Overlapping Design */}
      <section className="py-16 md:py-28 bg-white shadow-2xl relative z-10 -mt-16 md:-mt-24 rounded-t-3xl border-t-4 border-[var(--color-primary-brown)]"> {/* Uses CSS variable */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in-left"> {/* Added animation */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] mb-6 relative pb-4"> {/* Uses CSS variable */}
              <span className="relative z-10">Welcome to Our World of Serenity!</span>
              <span className="absolute -bottom-0 left-0 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span> {/* Thicker, bolder underline */}
            </h2>
            <p className="text-xl text-[var(--color-text-dark)] mb-6 leading-relaxed"> {/* Uses CSS variable */}
              Nestled on the pristine banks of **Bhambori Lake**, **The Lake Mount** is more than just a hotel; it's an experience meticulously crafted to blend **opulent comfort** with the tranquil embrace of nature. Since our inception, we've been dedicated to delivering **unparalleled hospitality**, where every detail reflects our unwavering commitment to excellence.
            </p>
            <p className="text-lg text-[var(--color-text-dark)] mb-8 leading-relaxed"> {/* Uses CSS variable */}
              From our **elegantly appointed suites** offering breathtaking lake vistas to our **world-class amenities** and **bespoke services**, we ensure your stay transcends the ordinary. We invite you to step into a realm of peace and luxury, where every moment is a treasured memory waiting to be made.
            </p>
            <Link
              to="/rooms"
              className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold
                           hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide animate-bounce-in" 
            >
              Explore Our Exquisite Rooms!
            </Link>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative group animate-fade-in-right"> {/* Added animation */}
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // High-quality luxury interior image
              alt="Luxury Hotel Interior"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Decorative elements with enhanced blur and animation */}
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[var(--color-primary-brown)] rounded-full opacity-15 blur-2xl -z-10 animate-pulse-slow"></div> {/* Uses CSS variable, increased blur */}
            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-[var(--color-secondary-gold)] rounded-full opacity-15 blur-2xl -z-10 animate-pulse-slow delay-200"></div> {/* Uses CSS variable, increased blur */}
          </div>
        </div>
      </section>

      {/* Our Guiding Principles Section - Richer Background & Elevated Cards */}
      <section className="py-16 md:py-24 bg-[var(--color-neutral-light)] border-t border-b border-[var(--color-border-light)]"> {/* Uses CSS variables */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4 animate-fade-in-up"> {/* Uses CSS variable, added animation */}
            <span className="relative z-10">Our Guiding Principles!</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-primary-brown)] rounded-full opacity-80"></span> {/* Uses CSS variable */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-3xl p-10 flex flex-col items-center text-center transform hover:scale-[1.05] hover:-translate-y-3 transition-all duration-500 border border-[var(--color-border-light)] group hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0s' }}> {/* Enhanced 3D effect, staggered animation */}
              <div className="text-[var(--color-primary-brown)] text-7xl mb-6 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-compass"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-4">Our Mission</h3> {/* Uses CSS variable */}
              <p className="text-[var(--color-text-dark)] leading-relaxed text-lg"> {/* Uses CSS variable */}
                To craft **unparalleled experiences**, fostering serene escapes and memorable journeys through unwavering commitment to luxury and personalized service.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-3xl p-10 flex flex-col items-center text-center transform hover:scale-[1.05] hover:-translate-y-3 transition-all duration-500 border border-[var(--color-border-light)] group hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}> {/* Enhanced 3D effect, staggered animation */}
              <div className="text-[var(--color-primary-brown)] text-7xl mb-6 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-mountain"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-4">Our Vision</h3> {/* Uses CSS variable */}
              <p className="text-[var(--color-text-dark)] leading-relaxed text-lg"> {/* Uses CSS variable */}
                To be the **pinnacle of lakeside luxury** in Rajasthan, celebrated for our distinctive elegance, sustainable practices, and heartfelt guest relations.
              </p>
            </div>
            {/* Values Card */}
            <div className="bg-white rounded-2xl shadow-3xl p-10 flex flex-col items-center text-center transform hover:scale-[1.05] hover:-translate-y-3 transition-all duration-500 border border-[var(--color-border-light)] group hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}> {/* Enhanced 3D effect, staggered animation */}
              <div className="text-[var(--color-primary-brown)] text-7xl mb-6 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-dark)] mb-4">Our Values</h3> {/* Uses CSS variable */}
              <p className="text-[var(--color-text-dark)] leading-relaxed text-lg"> {/* Uses CSS variable */}
                **Integrity**, **Excellence**, **Sustainability**, and **Passionate Service** define our every interaction, enriching both our guests and our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Distinctive Feature Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-neutral-dark)] text-center mb-16 relative pb-4 animate-fade-in-up"> {/* Uses CSS variable, added animation */}
            <span className="relative z-10">Why Choose The Lake Mount?!</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-[var(--color-secondary-gold)] rounded-full opacity-80"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-water"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Panoramic Lakefront Views!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Wake up to breathtaking vistas of the tranquil Bhambori Lake from your private balcony, a truly mesmerizing sight.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-bed"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Opulent Accommodations!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Discover exquisitely designed rooms and suites, blending traditional charm with modern luxury for ultimate comfort.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-utensils"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Gourmet Culinary Experiences!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Indulge in a journey of flavors at our fine dining restaurants, featuring local Rajasthani and international cuisines.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-concierge-bell"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Impeccable Personalized Service!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Our dedicated team ensures every aspect of your stay is seamless, anticipating your needs with genuine warmth.
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-spa"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Rejuvenating Wellness & Spa!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Unwind and revitalize with our state-of-the-art spa, serene infinity pool, and tranquil yoga spaces.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="flex items-start bg-[var(--color-neutral-light)] p-8 rounded-lg shadow-lg border-l-8 border-[var(--color-primary-brown)] transform hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}> {/* Uses CSS variables, enhanced 3D effect, staggered animation */}
              <div className="flex-shrink-0 text-[var(--color-primary-brown)] text-5xl mr-6 mt-1 group-hover:text-[var(--color-secondary-gold)] transition-colors duration-300 animate-bounce-in-icon"> {/* Uses CSS variables, added bounce-in-icon animation */}
                <i className="fas fa-route"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)] mb-2">Gateway to Local Heritage!</h3> {/* Uses CSS variable */}
                <p className="text-[var(--color-text-dark)] text-base leading-relaxed"> {/* Uses CSS variable */}
                  Explore Bhambori's rich heritage, vibrant local markets, and cultural sites from our prime location.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-block bg-[var(--color-primary-brown)] text-[var(--color-neutral-light)] px-12 py-5 rounded-full text-xl font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-xl tracking-wide animate-bounce-in"> {/* Uses CSS variables, added bounce-in animation */}
              Connect With Us!
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Consistent Branding */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-brown)] to-[var(--color-neutral-dark)] text-[var(--color-neutral-light)] text-center"> {/* Uses CSS variables */}
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md animate-fade-in-up"> {/* Added animation */}
            Your Serene Escape Awaits!
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-100"> {/* Added animation and delay */}
            Book your luxurious retreat today and immerse yourself in the tranquility of The Lake Mount.
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-[var(--color-secondary-gold)] text-[var(--color-neutral-dark)] px-10 py-4 rounded-full text-lg font-bold
                       hover:bg-opacity-90 hover:scale-110 transition-all duration-300 shadow-xl tracking-wide animate-bounce-in" 
          >
            Check Availability & Book Now!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
