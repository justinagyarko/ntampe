import React from 'react';
import { ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-teal-600 text-black min-h-96 relative overflow-hidden">
      {/* Windows 95 Desktop Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-8 h-full p-8">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-gray-300 border-2 border-gray-600 flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500"></div>
              </div>
              <div className="text-xs text-white">Icon</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="win95-window max-w-4xl mx-auto">
          <div className="win95-titlebar flex items-center justify-between">
            <span>WindowsStore 95 - Welcome</span>
            <div className="flex space-x-1">
              <button className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs">_</button>
              <button className="w-4 h-4 bg-gray-300 border border-gray-600 text-xs">□</button>
              <button className="w-4 h-4 bg-red-500 border border-gray-600 text-xs text-white">×</button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4 text-black">
                  Welcome to WindowsStore 95
                </h1>
                <p className="text-sm mb-6 text-gray-800">
                  Experience the nostalgia of Windows 95 while shopping for modern products. 
                  Secure payments with Stripe and ShakePay integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button 
                    onClick={() => {
                      const productsSection = document.getElementById('products-section');
                      if (productsSection) {
                        productsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="win95-button px-6 py-2"
                  >
                    Start Shopping
                  </button>
                  <button className="win95-button px-6 py-2">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="win95-panel">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="win95-panel w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <ShoppingBag size={24} />
                    </div>
                    <h3 className="font-bold text-xs mb-1">Quality Products</h3>
                    <p className="text-xs text-gray-700">Premium selection</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="win95-panel w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Truck size={24} />
                    </div>
                    <h3 className="font-bold text-xs mb-1">Fast Delivery</h3>
                    <p className="text-xs text-gray-700">Same-day shipping</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="win95-panel w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Shield size={24} />
                    </div>
                    <h3 className="font-bold text-xs mb-1">Secure Shopping</h3>
                    <p className="text-xs text-gray-700">Protected transactions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="win95-panel w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <CreditCard size={24} />
                    </div>
                    <h3 className="font-bold text-xs mb-1">Multiple Payments</h3>
                    <p className="text-xs text-gray-700">Stripe & ShakePay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;