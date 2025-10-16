import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white border-t-2 border-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="win95-window">
          <div className="win95-titlebar">
            <span>WindowsStore 95 - Footer Information</span>
            <div className="flex space-x-1">
              <button className="w-3 h-3 bg-gray-300 border border-gray-600 text-xs">_</button>
              <button className="w-3 h-3 bg-gray-300 border border-gray-600 text-xs">□</button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="win95-panel">
                <h3 className="text-sm font-bold mb-2 text-black">WindowsStore 95</h3>
                <p className="text-xs text-gray-800 mb-3">
                  Your premier destination for quality products with an authentic Windows 95 shopping experience.
                </p>
                <div className="flex space-x-2">
                  <button className="win95-button text-xs">Facebook</button>
                  <button className="win95-button text-xs">Twitter</button>
                  <button className="win95-button text-xs">Instagram</button>
                </div>
              </div>
              
              <div className="win95-panel">
                <h4 className="text-sm font-bold mb-2 text-black">Quick Links</h4>
                <div className="space-y-1">
                  <button className="win95-button text-xs w-full text-left">Home</button>
                  <button className="win95-button text-xs w-full text-left">Products</button>
                  <button className="win95-button text-xs w-full text-left">Categories</button>
                  <button className="win95-button text-xs w-full text-left">About Us</button>
                  <button className="win95-button text-xs w-full text-left">Contact</button>
                </div>
              </div>
              
              <div className="win95-panel">
                <h4 className="text-sm font-bold mb-2 text-black">Contact Info</h4>
                <div className="space-y-2 text-xs text-gray-800">
                  <div className="flex items-center space-x-2">
                    <MapPin size={12} />
                    <span>123 Retro Street, Nostalgia City</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={12} />
                    <span>+1 (437) 990-6049</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={12} />
                    <span>support@windowsstore95.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t-2 border-gray-600 mt-4 pt-4 text-center">
              <p className="text-xs text-gray-800">
                © 1995-2024 WindowsStore 95. All rights reserved. Secure payments powered by Stripe and ShakePay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;