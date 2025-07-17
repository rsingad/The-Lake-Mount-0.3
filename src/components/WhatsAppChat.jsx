// src/components/WhatsAppChat.jsx
import React from 'react';

function WhatsAppChat() {
  // Replace with your hotel's WhatsApp number (including country code, no +, no spaces)
  const phoneNumber = '919876543210'; // Example: +91 98765 43210

  // Optional: Pre-filled message. Encode spaces as %20
  const prefilledMessage = encodeURIComponent("Hello, I'm interested in booking a room at The Lake Mount Hotel. Can you please provide more information?");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50
                 bg-green-600 hover:bg-green-700
                 text-white p-4 rounded-full shadow-xl
                 flex items-center justify-center
                 transition-all duration-300 transform
                 hover:scale-110
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl md:text-4xl"></i> {/* Slightly larger icon */}
    </a>
  );
}

export default WhatsAppChat;
