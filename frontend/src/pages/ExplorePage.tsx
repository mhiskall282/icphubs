import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ScholarshipCard } from '../components/scholarship/ScholarshipCard';
import { useScholarship } from '../context/ScholarshipContext';
import { mockStudents } from '../data/mockData';
import { ScholarshipCategory } from '../types';
import { Search, Filter } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const { scholarshipRequests } = useScholarship();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ScholarshipCategory | 'all'>('all');

  const filteredScholarships = scholarshipRequests.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scholarship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Explore Scholarships</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search scholarships..."
              className="w-full pl-10 pr-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              className="bg-primary-800 border border-primary-700 rounded-lg text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.value as ScholarshipCategory | 'all')}
            >
              <option value="all">All Categories</option>
              {Object.values(ScholarshipCategory).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map(scholarship => {
            const student = mockStudents.find(s => s.id === scholarship.studentId);
            return (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
                studentName={student?.name}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};