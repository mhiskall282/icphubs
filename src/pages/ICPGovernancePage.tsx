import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Vote, Users, BarChart2, Clock } from 'lucide-react';

const proposals = [
  {
    id: 1,
    title: 'Increase Scholarship Fund Allocation',
    description: 'Proposal to increase the allocation of ICP tokens for scholarship funding by 20%',
    votes: { yes: 234, no: 45 },
    status: 'Active',
    endTime: '2024-04-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'New Verification Process',
    description: 'Implement enhanced verification process for scholarship recipients',
    votes: { yes: 567, no: 123 },
    status: 'Active',
    endTime: '2024-03-28T00:00:00Z'
  },
  {
    id: 3,
    title: 'Community Rewards Program',
    description: 'Establish a rewards program for active community contributors',
    votes: { yes: 789, no: 234 },
    status: 'Ended',
    endTime: '2024-03-15T00:00:00Z'
  }
];

export const ICPGovernancePage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Governance</h1>
            <p className="text-gray-400 mt-2">Participate in platform governance decisions</p>
          </div>
          <Button variant="secondary" leftIcon={<Vote size={18} />}>
            Create Proposal
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Active Proposals</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <Vote className="text-secondary-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Voters</p>
                  <p className="text-2xl font-bold text-white">1,234</p>
                </div>
                <Users className="text-accent-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Voting Power</p>
                  <p className="text-2xl font-bold text-white">5,678 ICP</p>
                </div>
                <BarChart2 className="text-success-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {proposals.map((proposal) => (
            <Card key={proposal.id} hoverable>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{proposal.title}</h3>
                    <p className="text-gray-400 mt-2">{proposal.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    proposal.status === 'Active' ? 'bg-success-500/20 text-success-500' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {proposal.status}
                  </span>
                </div>

                <div className="flex items-center space-x-8 mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Yes Votes</p>
                    <p className="text-lg font-semibold text-success-500">{proposal.votes.yes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">No Votes</p>
                    <p className="text-lg font-semibold text-error-500">{proposal.votes.no}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    <span>Ends {new Date(proposal.endTime).toLocaleDateString()}</span>
                  </div>
                </div>

                {proposal.status === 'Active' && (
                  <div className="flex space-x-4">
                    <Button variant="primary" fullWidth>Vote Yes</Button>
                    <Button variant="outline" fullWidth>Vote No</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};