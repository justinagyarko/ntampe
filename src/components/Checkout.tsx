import React, { useState } from 'react';
import { X, CreditCard, Shield } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, items, total }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Payment processing with ${paymentMethod === 'stripe' ? 'Stripe' : 'ShakePay'}...`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="win95-window max-w-4xl w-full max-h-full overflow-y-auto">
          <div className="win95-titlebar flex items-center justify-between">
            <span>Checkout - WindowsStore 95</span>
            <button 
              onClick={onClose}
              className="w-4 h-4 bg-red-500 border border-gray-600 text-xs text-white flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="p-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="win95-panel mb-4">
                  <h3 className="text-sm font-bold mb-3 bg-gray-400 p-1 border-b border-gray-600">Shipping Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-3 p-2">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="win95-input w-full"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="win95-input w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="win95-input w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="win95-input w-full"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="win95-input w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="win95-input w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="win95-input w-full"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </form>
                </div>
                
                <div className="win95-panel">
                  <h4 className="text-sm font-bold mb-3 bg-gray-400 p-1 border-b border-gray-600">Payment Method</h4>
                  <div className="space-y-2 p-2">
                    <label className="flex items-center space-x-2 win95-panel p-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        checked={paymentMethod === 'stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-blue-600"
                      />
                      <CreditCard className="w-4 h-4" />
                      <div>
                        <div className="font-bold text-xs">Stripe</div>
                        <div className="text-xs text-gray-700">Credit/Debit Card</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center space-x-2 win95-panel p-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="shakepay"
                        checked={paymentMethod === 'shakepay'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-blue-600"
                      />
                      <Shield className="w-4 h-4" />
                      <div>
                        <div className="font-bold text-xs">ShakePay</div>
                        <div className="text-xs text-gray-700">Cryptocurrency</div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="p-2">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="win95-button w-full py-2 text-xs font-bold"
                    >
                      Complete Order - ${total.toFixed(2)}
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="win95-panel">
                  <h3 className="text-sm font-bold mb-3 bg-gray-400 p-1 border-b border-gray-600">Order Summary</h3>
                  <div className="p-2">
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center win95-panel p-2">
                          <div className="flex items-center space-x-2">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-8 h-8 object-cover border border-gray-600"
                            />
                            <div>
                              <div className="font-bold text-xs">{item.name}</div>
                              <div className="text-xs text-gray-700">Qty: {item.quantity}</div>
                            </div>
                          </div>
                          <div className="font-bold text-xs">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t-2 border-gray-600 mt-3 pt-3">
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
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

export default Checkout;