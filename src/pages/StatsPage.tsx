import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ScholarshipCategory } from '../types';
import { useScholarship } from '../context/ScholarshipContext';
import { formatCurrency } from '../utils/formatters';

const COLORS = ['#FFD166', '#A164FF', '#10B981', '#F59E0B', '#EF4444'];

export const StatsPage: React.FC = () => {
  const { scholarshipRequests } = useScholarship();

  // Calculate category statistics
  const categoryStats = Object.values(ScholarshipCategory).map(category => {
    const requests = scholarshipRequests.filter(req => req.category === category);
    const totalAmount = requests.reduce((sum, req) => sum + req.amount, 0);
    const totalRaised = requests.reduce((sum, req) => sum + req.amountRaised, 0);
    return {
      name: category,
      requestCount: requests.length,
      totalAmount,
      totalRaised
    };
  });

  // Monthly trends data
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const month = new Date();
    month.setMonth(month.getMonth() - i);
    const requests = scholarshipRequests.filter(req => {
      const reqDate = new Date(req.createdAt);
      return reqDate.getMonth() === month.getMonth() && reqDate.getFullYear() === month.getFullYear();
    });
    return {
      name: month.toLocaleString('default', { month: 'short' }),
      amount: requests.reduce((sum, req) => sum + req.amountRaised, 0)
    };
  }).reverse();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Platform Statistics</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Category Distribution */}
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold text-white mb-6">Scholarship Categories</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryStats}
                      dataKey="totalAmount"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{ background: '#1f1f1f', border: 'none' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trends */}
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold text-white mb-6">Monthly Funding Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{ background: '#1f1f1f', border: 'none' }}
                    />
                    <Bar dataKey="amount" fill="#FFD166" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Details */}
        <div className="grid md:grid-cols-3 gap-6">
          {categoryStats.map((stat, index) => (
            <Card key={stat.name}>
              <CardContent>
                <h3 className="text-lg font-semibold text-white mb-4">{stat.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Requests:</span>
                    <span className="text-white font-medium">{stat.requestCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Amount:</span>
                    <span className="text-secondary-500 font-medium">
                      {formatCurrency(stat.totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Funded:</span>
                    <span className="text-accent-500 font-medium">
                      {formatCurrency(stat.totalRaised)}
                    </span>
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