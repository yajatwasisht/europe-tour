// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About-Us';
import Tours from './pages/tours';
import Destinations from './pages/Destinations';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        {/* Navbar */}
        <nav className="bg-white shadow-md w-full">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/images/zenith.png" alt="Zenith" className="h-10 mr-4" />
              <div className="hidden md:flex ml-10 space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                <a href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium">Destinations</a>
                <a href="/tours" className="text-gray-700 hover:text-blue-600 font-medium">Tours</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer whitespace-nowrap">
                  <i className="fas fa-globe mr-1"></i>
                  <span className="text-white">EN</span>
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                <i className="fas fa-user-circle text-xl"></i>
              </a>
              <button 
                className="md:hidden text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="container mx-auto px-4 py-2">
                <a href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
                <a href="/destinations" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Destinations</a>
                <a href="/tours" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Tours</a>
                <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/destinations" element={<Destinations />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <img src="/images/zenith.png" alt="Zenith" className="h-12 mb-4" />
                  <p className="text-gray-600">Discover the best of Europe with our curated tours and travel experiences.</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
                  <li><a href="/tours" className="text-gray-600 hover:text-blue-600">Tours</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-blue-600">About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">Email: info@zenith.com</li>
                  <li className="text-gray-600">Phone: +1 234 567 890</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2025 Yajat. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
