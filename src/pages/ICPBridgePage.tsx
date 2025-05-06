import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, RefreshCw, Shield, AlertCircle } from 'lucide-react';

const networks = [
  { id: 'icp', name: 'Internet Computer', icon: '🌐', token: 'ICP' },
  { id: 'eth', name: 'Ethereum', icon: '⟠', token: 'ETH' },
  { id: 'bsc', name: 'BNB Chain', icon: '⛓️', token: 'BNB' }
];

export const ICPBridgePage: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [fromNetwork, setFromNetwork] = useState(networks[0]);
  const [toNetwork, setToNetwork] = useState(networks[1]);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Bridge</h1>
            <p className="text-gray-400 mt-2">Transfer tokens across networks</p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">From Network</label>
                <select
                  className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  value={fromNetwork.id}
                  onChange={(e) => setFromNetwork(networks.find(n => n.id === e.target.value)!)}
                >
                  {networks.map(network => (
                    <option key={network.id} value={network.id}>
                      {network.icon} {network.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <ArrowRight size={24} className="text-gray-400" />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">To Network</label>
                <select
                  className="w-full bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  value={toNetwork.id}
                  onChange={(e) => setToNetwork(networks.find(n => n.id === e.target.value)!)}
                >
                  {networks.map(network => (
                    <option key={network.id} value={network.id}>
                      {network.icon} {network.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount</label>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="0.0"
                  />
                  <span className="inline-flex items-center px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white">
                    {fromNetwork.token}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-primary-800 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Bridge Fee</span>
                  <span className="text-white">0.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Time</span>
                  <span className="text-white">~15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">You will receive</span>
                  <span className="text-white">
                    {amount ? `${(Number(amount) * 0.999).toFixed(4)} ${toNetwork.token}` : '-'}
                  </span>
                </div>
              </div>

              <Button variant="primary" fullWidth>
                Bridge Tokens
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4 text-center">
              <RefreshCw size={24} className="mx-auto mb-2 text-secondary-500" />
              <h3 className="font-medium text-white">Fast</h3>
              <p className="text-sm text-gray-400">15 min average</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Shield size={24} className="mx-auto mb-2 text-secondary-500" />
              <h3 className="font-medium text-white">Secure</h3>
              <p className="text-sm text-gray-400">Fully audited</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <AlertCircle size={24} className="mx-auto mb-2 text-secondary-500" />
              <h3 className="font-medium text-white">Support</h3>
              <p className="text-sm text-gray-400">24/7 available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};