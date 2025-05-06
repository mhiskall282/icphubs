import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Bell, DollarSign, Award, MessageSquare, User } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'donation',
    title: 'New Donation Received',
    message: 'Robert Washington has donated $200 to your scholarship request',
    time: '2 hours ago',
    icon: DollarSign,
    color: 'text-secondary-500'
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Achievement Unlocked',
    message: 'Congratulations! You\'ve received your first donation',
    time: '1 day ago',
    icon: Award,
    color: 'text-accent-500'
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message',
    message: 'Dr. Eleanor Hayes left a comment on your scholarship request',
    time: '2 days ago',
    icon: MessageSquare,
    color: 'text-success-500'
  },
  {
    id: 4,
    type: 'follow',
    title: 'New Follower',
    message: 'Skylar Tech Foundation is now following your scholarship journey',
    time: '3 days ago',
    icon: User,
    color: 'text-warning-500'
  }
];

export const NotificationsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Bell className="mr-2" /> Notifications
          </h1>
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className="hover:bg-primary-800 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${notification.color} bg-opacity-20 mr-4`}>
                    <notification.icon className={notification.color} size={20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-medium">{notification.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <span className="sr-only">Dismiss</span>
                    &times;
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};