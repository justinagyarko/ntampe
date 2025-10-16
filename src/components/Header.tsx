import React from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import StartMenu from './StartMenu';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, isMenuOpen, onMenuToggle }) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = React.useState(false);

  return (
    <>
      <header className="win95-taskbar border-b-2 border-gray-600 relative z-30">
      <div className="container mx-auto px-2 py-1">
        <div className="flex items-center justify-between h-6">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
              className={`win95-start-button flex items-center space-x-1 ${isStartMenuOpen ? 'border-inset' : ''}`}
            >
              <div className="w-4 h-4 bg-red-500 border border-black flex items-center justify-center text-white text-xs font-bold">
                W
              </div>
              <span>Start</span>
            </button>
            <div className="win95-button px-3 py-1">
              <span className="text-xs font-bold">WindowsStore 95</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <button className="win95-button text-xs">Home</button>
            <button className="win95-button text-xs">Products</button>
            <button className="win95-button text-xs">Categories</button>
            <button className="win95-button text-xs">About</button>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="win95-input w-32 text-xs"
              />
            </div>
            
            <button className="win95-button p-1">
              <User size={12} />
            </button>
            
            <button 
              onClick={onCartClick}
              className="win95-button p-1 relative"
            >
              <ShoppingCart size={12} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center border border-black">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={onMenuToggle}
              className="md:hidden win95-button p-1"
            >
              {isMenuOpen ? <X size={12} /> : <Menu size={12} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-2 win95-panel">
            <div className="flex flex-col space-y-1">
              <button className="win95-button text-left text-xs">Home</button>
              <button className="win95-button text-left text-xs">Products</button>
              <button className="win95-button text-left text-xs">Categories</button>
              <button className="win95-button text-left text-xs">About</button>
            </div>
            <div className="mt-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="win95-input w-full text-xs"
              />
            </div>
          </div>
        )}
      </div>
      </header>
      
      <StartMenu 
        isOpen={isStartMenuOpen} 
        onClose={() => setIsStartMenuOpen(false)} 
      />
    </>
  );
};

export default Header;