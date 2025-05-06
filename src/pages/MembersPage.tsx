import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Search, Users, Award, Briefcase } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Dr. Eleanor Hayes',
    role: 'Professor',
    institution: 'Stanford University',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    contributions: 23,
    awards: ['Top Donor 2023', 'Community Leader']
  },
  {
    id: 2,
    name: 'Alex Chen',
    role: 'Student',
    institution: 'MIT',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    contributions: 15,
    awards: ['Rising Star', 'Tech Innovator']
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Researcher',
    institution: 'Berkeley',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    contributions: 45,
    awards: ['Research Excellence']
  },
  {
    id: 4,
    name: 'Robert Washington',
    role: 'Industry Expert',
    institution: 'Tech Foundation',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    contributions: 67,
    awards: ['Mentor of the Year']
  }
];

export const MembersPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Community Members</h1>
            <p className="text-gray-400 mt-2">Connect with students, donors, and educators</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <Card key={member.id} hoverable>
              <CardContent className="p-6 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-secondary-500"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-secondary-500 text-sm mb-2">{member.role}</p>
                
                <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                  <Briefcase size={14} className="mr-1" />
                  {member.institution}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-300">
                    <Users size={14} className="mr-1" />
                    <span>{member.contributions} contributions</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.awards.map((award, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-700 text-secondary-500"
                      >
                        <Award size={12} className="mr-1" />
                        {award}
                      </span>
                    ))}
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