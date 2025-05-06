import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Blockchain in Education Summit',
    description: 'Join leading educators and technologists to explore the future of decentralized education.',
    date: '2024-04-15T09:00:00Z',
    location: 'Virtual Event',
    attendees: 234,
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '2 days'
  },
  {
    id: 2,
    title: 'Student Success Workshop',
    description: 'Learn how to maximize your scholarship opportunities and academic success.',
    date: '2024-04-20T14:00:00Z',
    location: 'San Francisco, CA',
    attendees: 120,
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '3 hours'
  },
  {
    id: 3,
    title: 'ICP Developer Meetup',
    description: 'Network with fellow developers and learn about the latest in Internet Computer Protocol.',
    date: '2024-04-25T18:00:00Z',
    location: 'New York, NY',
    attendees: 85,
    image: 'https://images.pexels.com/photos/7688159/pexels-photo-7688159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 hours'
  }
];

export const EventsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Upcoming Events</h1>
          <Button variant="secondary" leftIcon={<Calendar size={18} />}>
            Create Event
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} hoverable>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock size={16} className="mr-2" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-secondary-500">
                    <Users size={16} className="mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <Button variant="primary" fullWidth className="mt-4">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};