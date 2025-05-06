import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Users, DollarSign, Award, Activity } from 'lucide-react';
import { mockAdminStats, mockUsers } from '../data/mockData';

export const AdminDashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold text-white">{mockAdminStats.totalUsers}</p>
                </div>
                <Users className="text-secondary-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Active Users</p>
                  <p className="text-2xl font-bold text-white">{mockAdminStats.activeUsers}</p>
                </div>
                <Activity className="text-accent-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Donations</p>
                  <p className="text-2xl font-bold text-white">${mockAdminStats.totalDonations}</p>
                </div>
                <DollarSign className="text-success-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning-500/20 to-warning-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Scholarships</p>
                  <p className="text-2xl font-bold text-white">{mockAdminStats.totalScholarships}</p>
                </div>
                <Award className="text-warning-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-primary-700">
                    <th className="pb-4 text-gray-400 font-medium">User</th>
                    <th className="pb-4 text-gray-400 font-medium">Email</th>
                    <th className="pb-4 text-gray-400 font-medium">Role</th>
                    <th className="pb-4 text-gray-400 font-medium">Status</th>
                    <th className="pb-4 text-gray-400 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-b border-primary-700">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <span className="text-white">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-gray-400">{user.email}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary-500/20 text-secondary-500">
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'active'
                            ? 'bg-success-500/20 text-success-500'
                            : 'bg-error-500/20 text-error-500'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};