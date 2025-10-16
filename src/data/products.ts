export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 1247,
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 892,
    category: 'Wearables'
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    price: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 456,
    category: 'Photography'
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 449.99,
    image: 'https://images.pexels.com/photos/586958/pexels-photo-586958.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 623,
    category: 'Furniture'
  },
  {
    id: '5',
    name: 'Mechanical Gaming Keyboard',
    price: 159.99,
    image: 'https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 1089,
    category: 'Gaming'
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 734,
    category: 'Audio'
  },
  {
    id: '7',
    name: 'Smartphone Case',
    price: 24.99,
    image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 2156,
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 567,
    category: 'Accessories'
  }
];