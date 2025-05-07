import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ShoppingBag, Tag, Star, Share2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Study Materials Bundle',
    description: 'Complete study materials for Computer Science',
    price: '50 ICP',
    seller: 'TechEdu Store',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Online Course Access',
    description: 'Premium access to top-rated courses',
    price: '75 ICP',
    seller: 'EduHub',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5905558/pexels-photo-5905558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Research Papers Collection',
    description: 'Access to premium research papers',
    price: '30 ICP',
    seller: 'ResearchNet',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5905437/pexels-photo-5905437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const MarketplacePage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Marketplace</h1>
            <p className="text-gray-400 mt-2">Buy and sell educational resources</p>
          </div>
          <Button variant="secondary" leftIcon={<ShoppingBag size={18} />}>
            List Item
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} hoverable>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <Tag className="text-secondary-500" size={20} />
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Seller</p>
                    <p className="text-white">{product.seller}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-secondary-500 font-semibold">{product.price}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-gray-400">
                      <Star size={16} className="mr-1 text-secondary-500" />
                      <span>{product.rating}</span>
                    </div>
                    <button className="text-gray-400 hover:text-secondary-500">
                      <Share2 size={16} />
                    </button>
                  </div>
                  <Button variant="primary">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};
