import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Trophy, Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockDonors, mockStudents } from '../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const LeaderboardPage: React.FC = () => {
  const topDonors = [...mockDonors].sort((a, b) => b.totalDonated - a.totalDonated);
  const topStudents = [...mockStudents].sort((a, b) => b.achievements.length - a.achievements.length);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Hall of Fame</h1>
          <p className="text-xl text-gray-400">Celebrating our top contributors and achievers</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Donors */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-secondary-500 mb-6 flex items-center">
              <Trophy className="mr-2" /> Top Donors
            </h2>
            {topDonors.map((donor, index) => (
              <motion.div key={donor.id} variants={item}>
                <Card className="mb-4 bg-gradient-to-r from-primary-800 to-primary-900 hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                  <CardContent className="flex items-center p-6">
                    <div className="relative">
                      <img
                        src={donor.avatar}
                        alt={donor.name}
                        className="w-16 h-16 rounded-full border-2 border-secondary-500"
                      />
                      {index < 3 && (
                        <div className="absolute -top-2 -right-2 bg-secondary-500 rounded-full p-1">
                          {index === 0 && <Trophy size={16} />}
                          {index === 1 && <Award size={16} />}
                          {index === 2 && <Medal size={16} />}
                        </div>
                      )}
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white">{donor.name}</h3>
                      <p className="text-gray-400">{donor.donationsCount} donations</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary-500">${donor.totalDonated}</p>
                      <p className="text-sm text-gray-400">total donated</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Top Students */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-2xl font-bold text-accent-500 mb-6 flex items-center">
              <Award className="mr-2" /> Top Students
            </h2>
            {topStudents.map((student, index) => (
              <motion.div key={student.id} variants={item}>
                <Card className="mb-4 bg-gradient-to-r from-primary-800 to-primary-900 hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                  <CardContent className="flex items-center p-6">
                    <div className="relative">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-16 h-16 rounded-full border-2 border-accent-500"
                      />
                      {index < 3 && (
                        <div className="absolute -top-2 -right-2 bg-accent-500 rounded-full p-1">
                          {index === 0 && <Trophy size={16} />}
                          {index === 1 && <Award size={16} />}
                          {index === 2 && <Medal size={16} />}
                        </div>
                      )}
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-white">{student.name}</h3>
                      <p className="text-gray-400">{student.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent-500">{student.achievements.length}</p>
                      <p className="text-sm text-gray-400">achievements</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};
