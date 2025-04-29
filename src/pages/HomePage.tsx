import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, SearchCheck, Wallet, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Layout } from '../components/layout/Layout';
import { ScholarshipCard } from '../components/scholarship/ScholarshipCard';
import { useScholarship } from '../context/ScholarshipContext';
import { mockStudents } from '../data/mockData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { scholarshipRequests } = useScholarship();
  
  // Get featured scholarships (limit to 3)
  const featuredScholarships = scholarshipRequests
    .filter(req => req.status === 'Active')
    .slice(0, 3);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-b from-primary-800 to-primary-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"></div>
            <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-accent-500/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-secondary-500">Micro</span>-Scholarships 
                <span className="block mt-2">on the Blockchain</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Direct funding for students, transparent for donors.
                Built on Internet Computer Protocol.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/explore')}
                  rightIcon={<ArrowRight size={18} />}
                >
                  Explore Scholarships
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/how-it-works')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              MicroScholar connects students with donors through a transparent blockchain platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="px-6 py-8 text-center bg-gradient-to-b from-primary-800 to-primary-900 border border-primary-700">
              <CardContent>
                <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-secondary-500" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Students Request</h3>
                <p className="text-gray-300">
                  Students create micro-scholarship requests for books, exam fees, or educational supplies.
                </p>
              </CardContent>
            </Card>
            
            {/* Step 2 */}
            <Card className="px-6 py-8 text-center bg-gradient-to-b from-primary-800 to-primary-900 border border-primary-700">
              <CardContent>
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchCheck className="text-accent-500" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Donors Browse</h3>
                <p className="text-gray-300">
                  Donors explore micro-scholarship requests and choose which students to support.
                </p>
              </CardContent>
            </Card>
            
            {/* Step 3 */}
            <Card className="px-6 py-8 text-center bg-gradient-to-b from-primary-800 to-primary-900 border border-primary-700">
              <CardContent>
                <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wallet className="text-secondary-500" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure Funding</h3>
                <p className="text-gray-300">
                  Funds are transferred securely on the Internet Computer Protocol blockchain with full transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Scholarships</h2>
            <Link to="/explore" className="text-secondary-500 hover:text-secondary-400 flex items-center">
              View all
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredScholarships.map(scholarship => {
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
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why MicroScholar?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform offers unique advantages for both students and donors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column - Students */}
            <div>
              <h3 className="text-2xl font-semibold text-secondary-500 mb-6">For Students</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-secondary-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Direct Funding</h4>
                    <p className="text-gray-300 mt-1">
                      Get financial support directly for your specific educational needs without complex application processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-secondary-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Quick Turnaround</h4>
                    <p className="text-gray-300 mt-1">
                      Receive funding quickly when you need it, not months later when the opportunity has passed.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-secondary-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Build Your Profile</h4>
                    <p className="text-gray-300 mt-1">
                      Create a verifiable record of your educational journey and achievements on the blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Donors */}
            <div>
              <h3 className="text-2xl font-semibold text-accent-500 mb-6">For Donors</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-accent-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Full Transparency</h4>
                    <p className="text-gray-300 mt-1">
                      Track exactly where your donations go and see the direct impact of your contributions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-accent-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Choose Your Impact</h4>
                    <p className="text-gray-300 mt-1">
                      Select specific students and educational needs that align with your values and interests.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">
                      <Lightbulb size={16} className="text-accent-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Blockchain Security</h4>
                    <p className="text-gray-300 mt-1">
                      Enjoy the security and immutability of blockchain technology for all your donations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Educational Funding?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join MicroScholar today and be part of the decentralized education revolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/explore')}
              >
                Browse Scholarships
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};