import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Book, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    description: 'Learn the basics of blockchain technology and cryptocurrency',
    instructor: 'Dr. Sarah Chen',
    duration: '6 weeks',
    students: 1234,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    description: 'Master the art of writing secure smart contracts',
    instructor: 'Alex Johnson',
    duration: '8 weeks',
    students: 856,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/8370836/pexels-photo-8370836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'DeFi Protocols',
    description: 'Explore decentralized finance protocols and applications',
    instructor: 'Maria Garcia',
    duration: '4 weeks',
    students: 567,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/8370813/pexels-photo-8370813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const CoursesPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Courses</h1>
          <Button variant="secondary">Browse All Courses</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} hoverable>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Book size={16} className="mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users size={16} className="mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center text-secondary-500">
                    <Star size={16} className="mr-2" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button variant="primary" fullWidth className="mt-4">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};