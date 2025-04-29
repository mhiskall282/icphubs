import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { useScholarship } from '../context/ScholarshipContext';
import { ScholarshipCard } from '../components/scholarship/ScholarshipCard';
import { formatCurrency } from '../utils/formatters';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { currentUser, isStudent } = useAuth();
  const { scholarshipRequests, getStudentRequests, getDonorContributions } = useScholarship();

  const studentRequests = isStudent ? getStudentRequests(currentUser?.id || '') : [];
  const donorContributions = !isStudent ? getDonorContributions(currentUser?.id || '') : [];
  
  const totalContributed = donorContributions.reduce((sum, tx) => sum + tx.amount, 0);
  const activeRequests = studentRequests.filter(req => req.status === 'Active').length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="flex items-center">
              <div className="p-3 rounded-full bg-secondary-500/20 mr-4">
                <TrendingUp className="text-secondary-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total {isStudent ? 'Received' : 'Contributed'}</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(totalContributed)}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="flex items-center">
              <div className="p-3 rounded-full bg-accent-500/20 mr-4">
                <Users className="text-accent-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">{isStudent ? 'Total Donors' : 'Students Helped'}</p>
                <p className="text-2xl font-bold text-white">{donorContributions.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="flex items-center">
              <div className="p-3 rounded-full bg-success-500/20 mr-4">
                <Award className="text-success-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold text-white">
                  {isStudent ? 
                    `${Math.round((studentRequests.filter(r => r.status === 'Funded').length / studentRequests.length) * 100)}%` :
                    '100%'}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning-500/20 to-warning-500/5">
            <CardContent className="flex items-center">
              <div className="p-3 rounded-full bg-warning-500/20 mr-4">
                <Clock className="text-warning-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active {isStudent ? 'Requests' : 'Contributions'}</p>
                <p className="text-2xl font-bold text-white">{activeRequests}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            {isStudent ? 'Your Scholarship Requests' : 'Your Contributions'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isStudent ? (
              studentRequests.map(request => (
                <ScholarshipCard key={request.id} scholarship={request} />
              ))
            ) : (
              scholarshipRequests
                .filter(req => donorContributions.some(tx => tx.requestId === req.id))
                .map(request => (
                  <ScholarshipCard key={request.id} scholarship={request} />
                ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};