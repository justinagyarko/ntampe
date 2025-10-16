import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="win95-window overflow-hidden">
      <div className="win95-titlebar">
        <span>{product.category}</span>
        <div className="flex space-x-1">
          <button className="w-3 h-3 bg-gray-300 border border-gray-600 text-xs">_</button>
          <button className="w-3 h-3 bg-gray-300 border border-gray-600 text-xs">□</button>
          <button className="w-3 h-3 bg-red-500 border border-gray-600 text-xs text-white">×</button>
        </div>
      </div>
      
      <div className="p-3">
        <div className="win95-panel mb-3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-32 object-cover border-2 border-gray-600"
          />
        </div>
        
        <h3 className="text-sm font-bold text-black mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-700 ml-1">
            ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-black">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="win95-button flex items-center space-x-1 text-xs"
          >
            <ShoppingCart size={12} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;