import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Image, Tag, Heart, Share2 } from 'lucide-react';

const nfts = [
  {
    id: 1,
    name: 'Scholar Achievement #001',
    description: 'Special NFT awarded for outstanding academic performance',
    image: 'https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '50 ICP',
    creator: 'MicroScholar',
    likes: 234
  },
  {
    id: 2,
    name: 'Community Contributor #042',
    description: 'Recognition for exceptional community support',
    image: 'https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '75 ICP',
    creator: 'MicroScholar',
    likes: 156
  },
  {
    id: 3,
    name: 'Innovation Award #013',
    description: 'Celebrating breakthrough research and innovation',
    image: 'https://images.pexels.com/photos/8369562/pexels-photo-8369562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '100 ICP',
    creator: 'MicroScholar',
    likes: 389
  }
];

export const ICPNFTPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">NFT Gallery</h1>
            <p className="text-gray-400 mt-2">Exclusive achievement NFTs</p>
          </div>
          <Button variant="secondary" leftIcon={<Image size={18} />}>
            Create NFT
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Card key={nft.id} hoverable>
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{nft.name}</h3>
                  <Tag className="text-secondary-500" size={20} />
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{nft.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Creator</p>
                    <p className="text-white">{nft.creator}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-secondary-500 font-semibold">{nft.price}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-400 hover:text-secondary-500">
                      <Heart size={20} className="mr-1" />
                      <span>{nft.likes}</span>
                    </button>
                    <button className="text-gray-400 hover:text-secondary-500">
                      <Share2 size={20} />
                    </button>
                  </div>
                  <Button variant="primary">
                    View Details
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