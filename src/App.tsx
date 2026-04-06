import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import SymptomChecker from './components/SymptomChecker';
import Hospitals from './components/Hospitals';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Specialties />
        <SymptomChecker />
        <Hospitals />
        <Reviews />
      </main>
      <Footer />
      <Chatbot onBookClick={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}


