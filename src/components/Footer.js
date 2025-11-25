import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Mocha Coffee</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Espresso Coffee</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Lata Coffee</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Milk Shakes</a></li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Men</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Support</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center text-sm opacity-60">
            <p>&copy; 2024 Black Coffee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;