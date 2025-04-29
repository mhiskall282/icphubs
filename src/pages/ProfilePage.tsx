import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { Edit2, Shield, Book, Award } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { currentUser, isStudent } = useAuth();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={currentUser?.avatar}
                    alt={currentUser?.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-secondary-500"
                  />
                  <h2 className="text-2xl font-bold text-white mt-4">{currentUser?.name}</h2>
                  <p className="text-gray-400 mt-1">{isStudent ? 'Student' : 'Donor'}</p>
                  
                  <Button
                    variant="outline"
                    className="mt-4"
                    leftIcon={<Edit2 size={16} />}
                  >
                    Edit Profile
                  </Button>
                </div>

                <div className="mt-6 border-t border-primary-700 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Verification</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-success-500">
                      <Shield size={16} className="mr-2" />
                      <span>Email Verified</span>
                    </div>
                    <div className="flex items-center text-success-500">
                      <Shield size={16} className="mr-2" />
                      <span>Identity Verified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {isStudent ? (
              <>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Book className="mr-2" /> Education
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">School</label>
                        <p className="text-white font-medium">Stanford University</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Major</label>
                        <p className="text-white font-medium">Computer Science</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Graduation Year</label>
                        <p className="text-white font-medium">2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Award className="mr-2" /> Achievements
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary-800 rounded-lg">
                        <h4 className="text-secondary-500 font-medium">Hackathon Winner 2023</h4>
                        <p className="text-gray-400 text-sm mt-1">First place in University Hackathon</p>
                      </div>
                      <div className="p-4 bg-primary-800 rounded-lg">
                        <h4 className="text-secondary-500 font-medium">Dean's List 2022-2023</h4>
                        <p className="text-gray-400 text-sm mt-1">Academic Excellence Recognition</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Donation History</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="p-4 bg-primary-800 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-medium">Machine Learning Conference Registration</h4>
                            <p className="text-gray-400 text-sm mt-1">Donated to Aisha Johnson</p>
                          </div>
                          <span className="text-secondary-500 font-bold">$500</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-400">March 15, 2024</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
