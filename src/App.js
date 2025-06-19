import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="animate-fade-in">
        {renderCurrentPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
