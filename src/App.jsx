// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Routes and Route are imported here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

// Import your page components
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import RoomsPage from './pages/RoomsPage.jsx';
import RoomDetailPage from './pages/RoomDetailPage'; 
import RestaurantPage from './pages/Restaurant.jsx';
import CafePage from './pages/CafePage.jsx'; // Renamed Solora Cafe
import AmenitiesPage from './pages/AmenitiesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ExploreNearbyPage from './pages/ExploreNearbyPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';



function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        {/* All routing logic is now inside App.jsx */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:id" element={<RoomDetailPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/cafe" element={<CafePage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/explore-nearby" element={<ExploreNearbyPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          Optional: <Route path="/blog" element={<BlogPage />} />
          {/* Add a 404 Not Found page for any unmatched routes */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>

      <Footer /> {/* Footer, visible on all pages */}
      <WhatsAppChat /> {/* Floating WhatsApp button */}
    </div>
  );
}

export default App;