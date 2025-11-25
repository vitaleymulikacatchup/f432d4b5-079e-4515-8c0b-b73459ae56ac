import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-coffee-cream py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-2 border-coffee-dark rounded-full">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-coffee-dark rounded-full transform rotate-12"></div>
                  <div className="w-1 h-4 bg-coffee-dark rounded-full"></div>
                  <div className="w-1 h-3 bg-coffee-dark rounded-full transform -rotate-12"></div>
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-coffee-dark text-xs font-semibold">
                Black Coffee
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">Home</a>
          <a href="#" className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">Menu</a>
          <a href="#" className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">Blog</a>
          <a href="#" className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">Media</a>
          <a href="#" className="text-coffee-dark hover:text-coffee-brown transition-colors font-medium">Contact</a>
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <button className="p-2 text-coffee-dark hover:text-coffee-brown transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;