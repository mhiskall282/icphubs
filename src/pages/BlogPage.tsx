import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Decentralized Education',
    excerpt: 'Exploring how blockchain technology is revolutionizing educational funding and accessibility.',
    author: 'Dr. Eleanor Hayes',
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Success Stories: Micro-Scholarships in Action',
    excerpt: 'Real stories from students who have benefited from blockchain-based micro-scholarships.',
    author: 'Maria Rodriguez',
    date: '2024-03-14',
    image: 'https://images.pexels.com/photos/8353787/pexels-photo-8353787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Success Stories'
  },
  {
    id: 3,
    title: 'Understanding ICP Integration in Education',
    excerpt: 'A deep dive into how Internet Computer Protocol is changing the landscape of educational funding.',
    author: 'Alex Chen',
    date: '2024-03-13',
    image: 'https://images.pexels.com/photos/8353826/pexels-photo-8353826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technical'
  }
];

export const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} hoverable className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-secondary-500 mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <button className="mt-4 text-secondary-500 hover:text-secondary-400 flex items-center text-sm font-medium">
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};