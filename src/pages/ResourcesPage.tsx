import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { FileText, Download, ExternalLink, BookOpen } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Blockchain Basics Guide',
    description: 'A comprehensive guide to understanding blockchain technology fundamentals.',
    type: 'PDF',
    size: '2.4 MB',
    downloads: 1234,
    category: 'Technical'
  },
  {
    id: 2,
    title: 'Scholarship Application Template',
    description: 'Ready-to-use template for creating compelling scholarship applications.',
    type: 'DOCX',
    size: '856 KB',
    downloads: 2567,
    category: 'Templates'
  },
  {
    id: 3,
    title: 'ICP Development Tutorial',
    description: 'Step-by-step tutorial for building on the Internet Computer Protocol.',
    type: 'Video',
    duration: '45 mins',
    views: 3789,
    category: 'Tutorial'
  },
  {
    id: 4,
    title: 'Student Success Handbook',
    description: 'Essential tips and strategies for academic and professional success.',
    type: 'PDF',
    size: '1.8 MB',
    downloads: 945,
    category: 'Guide'
  }
];

export const ResourcesPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Resources</h1>
            <p className="text-gray-400 mt-2">Educational materials and templates</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} hoverable>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary-700 text-secondary-500">
                    {resource.type === 'Video' ? (
                      <BookOpen size={24} />
                    ) : (
                      <FileText size={24} />
                    )}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary-700 text-secondary-500">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-2">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-gray-400">
                        {resource.type === 'Video' ? (
                          <span className="flex items-center">
                            <BookOpen size={14} className="mr-1" />
                            {resource.duration} • {resource.views} views
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Download size={14} className="mr-1" />
                            {resource.downloads} downloads • {resource.size}
                          </span>
                        )}
                      </div>
                      <button className="text-secondary-500 hover:text-secondary-400 flex items-center">
                        {resource.type === 'Video' ? (
                          <>
                            Watch Now
                            <ExternalLink size={16} className="ml-1" />
                          </>
                        ) : (
                          <>
                            Download
                            <Download size={16} className="ml-1" />
                          </>
                        )}
                      </button>
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