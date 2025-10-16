import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-4 top-4 bottom-4 w-full max-w-md">
        <div className="win95-window h-full flex flex-col">
          <div className="win95-titlebar flex items-center justify-between">
            <span>Shopping Cart</span>
            <button 
              onClick={onClose}
              className="w-4 h-4 bg-red-500 border border-gray-600 text-xs text-white flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <div className="win95-panel p-4">
                  <p className="text-sm text-gray-700">Your cart is empty</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="win95-panel">
                    <div className="flex items-center space-x-3 p-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover border border-gray-600"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-xs text-black">{item.name}</h3>
                        <p className="text-xs text-gray-700">${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center space-x-1 mt-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="win95-button p-1"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-bold px-2">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="win95-button p-1"
                          >
                            <Plus size={10} />
                          </button>
                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="win95-button p-1 ml-2"
                          >
                            <Trash2 size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="win95-panel m-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">Total: ${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="win95-button w-full py-2 text-xs font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;