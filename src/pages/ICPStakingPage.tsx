import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Lock, Unlock, TrendingUp, Clock } from 'lucide-react';

const stakingPools = [
  {
    id: 1,
    name: 'Scholarship Fund',
    apy: 12.5,
    totalStaked: 250000,
    minStake: 10,
    lockPeriod: '6 months'
  },
  {
    id: 2,
    name: 'Community Growth',
    apy: 8.75,
    totalStaked: 175000,
    minStake: 5,
    lockPeriod: '3 months'
  },
  {
    id: 3,
    name: 'Innovation Pool',
    apy: 15.0,
    totalStaked: 320000,
    minStake: 20,
    lockPeriod: '12 months'
  }
];

export const ICPStakingPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Staking</h1>
            <p className="text-gray-400 mt-2">Stake ICP tokens and earn rewards</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Total Staked</p>
                  <p className="text-2xl font-bold text-white">745,000 ICP</p>
                </div>
                <Lock className="text-secondary-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Your Rewards</p>
                  <p className="text-2xl font-bold text-white">125.5 ICP</p>
                </div>
                <TrendingUp className="text-accent-500" size={24} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">Available to Claim</p>
                  <p className="text-2xl font-bold text-white">45.2 ICP</p>
                </div>
                <Unlock className="text-success-500" size={24} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stakingPools.map((pool) => (
            <Card key={pool.id} hoverable>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{pool.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">APY</span>
                    <span className="text-success-500 font-semibold">{pool.apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Staked</span>
                    <span className="text-white">{pool.totalStaked.toLocaleString()} ICP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min. Stake</span>
                    <span className="text-white">{pool.minStake} ICP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lock Period</span>
                    <span className="text-white">{pool.lockPeriod}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="primary" fullWidth>
                    Stake Now
                  </Button>
                  <Button variant="outline" fullWidth>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};