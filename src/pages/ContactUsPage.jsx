// src/pages/ContactPage.jsx
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null); // { type: 'success' | 'error', text: '...' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulate a network request (e.g., to a backend)
    // In a real application, you would send this data to your API using axios or fetch
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success or error based on some condition (e.g., email format)
      if (formData.email.includes('@') && formData.name.length > 2 && formData.message.length > 10) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you for your inquiry! Our team will get back to you shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send message. Please ensure all fields are correctly filled.',
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again later or contact us directly via phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-light min-h-screen font-sans">
      {/* Contact Hero Banner */}
      <section
        className="relative h-72 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20791613/pexels-photo-20791613.jpeg')" }} // Ensure this high-quality image exists
      >
        <div className="absolute inset-0 bg-neutral-dark opacity-60"></div> {/* Deeper, richer overlay */}
        <div className="relative z-10 text-center p-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-wider">
            Connect With Us
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-xl max-w-2xl mx-auto">
            Your queries are important to us. Let's make your stay exceptional.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-24 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-neutral-light p-10 rounded-2xl shadow-3xl border border-border-light"> {/* Premium card style */}
            <h2 className="text-4xl font-extrabold text-neutral-dark mb-8 relative pb-4">
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-secondary-gold rounded-full opacity-80"></span> {/* Gold underline */}
            </h2>
            <p className="text-text-dark text-lg mb-8 leading-relaxed">
              Have questions about your upcoming stay, planning an event, or any other inquiries? We are here to provide comprehensive assistance and ensure your experience is seamless.
            </p>

            <div className="space-y-8"> {/* Increased space-y */}
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-blue text-3xl mr-5 flex-shrink-0 mt-1"></i> {/* Larger icon, primary-blue */}
                <div>
                  <h3 className="font-semibold text-neutral-dark text-xl mb-1">Our Location</h3> {/* Darker text */}
                  <p className="text-text-dark text-lg">
                    The Lake Mount Hotel,
                    <br /> Serene Lake Road, Bhambori,
                    <br /> Rajasthan, India - 302001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-phone-alt text-primary-blue text-3xl mr-5 flex-shrink-0 mt-1"></i> {/* Larger icon, primary-blue */}
                <div>
                  <h3 className="font-semibold text-neutral-dark text-xl mb-1">Call Us</h3> {/* Darker text */}
                  <p className="text-text-dark text-lg">
                    <a href="tel:+911234567890" className="hover:text-primary-blue transition-colors duration-300 font-medium">+91 12345 67890</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-envelope text-primary-blue text-3xl mr-5 flex-shrink-0 mt-1"></i> {/* Larger icon, primary-blue */}
                <div>
                  <h3 className="font-semibold text-neutral-dark text-xl mb-1">Email Us</h3> {/* Darker text */}
                  <p className="text-text-dark text-lg">
                    <a href="mailto:info@lakemounthotel.com" className="hover:text-primary-blue transition-colors duration-300 font-medium">info@lakemounthotel.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-3xl border border-border-light"> {/* Premium card style */}
            <h2 className="text-4xl font-extrabold text-neutral-dark mb-8 text-center relative pb-4">
              <span className="relative z-10">Send Us a Message</span>
              <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-primary-blue rounded-full opacity-80"></span> {/* Blue underline */}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-dark text-lg font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow-sm appearance-none border border-border-light rounded-lg w-full py-3 px-4 text-text-dark leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 placeholder-neutral-dark placeholder-opacity-60"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-dark text-lg font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow-sm appearance-none border border-border-light rounded-lg w-full py-3 px-4 text-text-dark leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 placeholder-neutral-dark placeholder-opacity-60"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-dark text-lg font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="shadow-sm appearance-none border border-border-light rounded-lg w-full py-3 px-4 text-text-dark leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 placeholder-neutral-dark placeholder-opacity-60"
                  placeholder="Regarding your booking, event, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-dark text-lg font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6" // Increased rows for more space
                  required
                  className="shadow-sm appearance-none border border-border-light rounded-lg w-full py-3 px-4 text-text-dark leading-tight focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300 resize-y placeholder-neutral-dark placeholder-opacity-60"
                  placeholder="Type your detailed message here..."
                ></textarea>
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg text-base font-medium ${
                    submitMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  } mb-4 animate-fade-in`} // Enhanced styling and animation
                  role="alert"
                >
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-blue text-neutral-light px-8 py-4 rounded-full text-lg font-bold tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Your Inquiry...
                  </>
                ) : (
                  'Send Your Inquiry'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 md:py-24 bg-neutral-light border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-16 relative pb-4">
            <span className="relative z-10">Locate Us Easily</span>
            <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-secondary-gold rounded-full opacity-80"></span> {/* Gold underline */}
          </h2>
          <div className="bg-white rounded-2xl shadow-3xl overflow-hidden border border-border-light"> {/* Premium map container */}
            {/* Replace this iframe with your actual Google Maps embed code for The Lake Mount Hotel in Bhambori, Rajasthan */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.839845344381!2d75.8239069!3d26.822295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dbf5c5b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sThe%20Lake%20Mount%20Hotel%2C%20Bhambori%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1701999999999!5m2!1sen!2sin"
              width="100%"
              height="550" // Increased height for better visibility
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Lake Mount Hotel Location on Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;