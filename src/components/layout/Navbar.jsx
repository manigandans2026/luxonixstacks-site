import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import companyConfig from '../../config/company';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={companyConfig.logo.src}
                alt={companyConfig.name}
                className="h-8 w-auto text-black"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </button>
            <Link
              to="/about"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              About
            </Link>
            <button
              onClick={() => handleNavClick('services')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-300">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleNavClick('home')}
                className="text-black hover:text-gray-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <Link
                to="/about"
                className="text-black hover:text-gray-600 transition-colors font-medium text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => handleNavClick('services')}
                className="text-black hover:text-gray-600 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-black hover:text-gray-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
