import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const analyticsData = {
  dailyUsers: [
    { name: 'Mon', value: 150 },
    { name: 'Tue', value: 230 },
    { name: 'Wed', value: 180 },
    { name: 'Thu', value: 290 },
    { name: 'Fri', value: 200 },
    { name: 'Sat', value: 140 },
    { name: 'Sun', value: 120 }
  ],
  scholarshipStats: [
    { category: 'Books', amount: 25000 },
    { category: 'Courses', amount: 35000 },
    { category: 'Research', amount: 20000 },
    { category: 'Equipment', amount: 15000 }
  ]
};

export const AnalyticsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Analytics Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold text-white">12,345</p>
                </div>
                <Users className="text-secondary-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Donations</p>
                  <p className="text-2xl font-bold text-white">95,000 ICP</p>
                </div>
                <DollarSign className="text-accent-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Active Scholarships</p>
                  <p className="text-2xl font-bold text-white">456</p>
                </div>
                <Award className="text-success-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning-500/20 to-warning-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Growth Rate</p>
                  <p className="text-2xl font-bold text-white">+24.8%</p>
                </div>
                <TrendingUp className="text-warning-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Daily Active Users</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData.dailyUsers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{ background: '#1f1f1f', border: 'none' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#FFD166" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Scholarship Distribution</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData.scholarshipStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="category" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      contentStyle={{ background: '#1f1f1f', border: 'none' }}
                    />
                    <Bar dataKey="amount" fill="#A164FF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
