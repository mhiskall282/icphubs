import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MessageSquare, Users, Eye, Clock } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'How to get started with ICP development?',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    category: 'Technical',
    replies: 23,
    views: 456,
    lastActivity: '2024-03-15T10:30:00Z'
  },
  {
    id: 2,
    title: 'Scholarship application tips and tricks',
    author: {
      name: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    category: 'Advice',
    replies: 45,
    views: 789,
    lastActivity: '2024-03-14T15:45:00Z'
  },
  {
    id: 3,
    title: 'Success story: How I got funded through MicroScholar',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    category: 'Success Stories',
    replies: 67,
    views: 1234,
    lastActivity: '2024-03-13T09:20:00Z'
  }
];

export const ForumPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Community Forum</h1>
            <p className="text-gray-400 mt-2">Join the discussion with fellow students and donors</p>
          </div>
          <Button leftIcon={<MessageSquare size={18} />}>
            New Discussion
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {discussions.map((discussion) => (
            <Card key={discussion.id} hoverable>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <img
                    src={discussion.author.avatar}
                    alt={discussion.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white hover:text-secondary-500">
                        {discussion.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary-700 text-secondary-500">
                        {discussion.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mt-2">
                      <span className="mr-4">{discussion.author.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {discussion.views} views
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {new Date(discussion.lastActivity).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};