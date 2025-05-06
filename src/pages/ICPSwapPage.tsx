import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowDownUp, RefreshCw, Settings, Info } from 'lucide-react';

export const ICPSwapPage: React.FC = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Swap</h1>
            <p className="text-gray-400 mt-2">Trade tokens instantly</p>
          </div>
          <Button variant="outline" size="sm" leftIcon={<Settings size={18} />}>
            Settings
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">From</label>
                  <span className="text-sm text-gray-400">Balance: 100 ICP</span>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="0.0"
                  />
                  <Button variant="outline">ICP</Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full p-2"
                  onClick={() => {
                    const temp = fromAmount;
                    setFromAmount(toAmount);
                    setToAmount(temp);
                  }}
                >
                  <ArrowDownUp size={20} />
                </Button>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">To</label>
                  <span className="text-sm text-gray-400">Balance: 1000 USDT</span>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="flex-1 bg-primary-800 border border-primary-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    placeholder="0.0"
                  />
                  <Button variant="outline">USDT</Button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-800 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Exchange Rate</span>
                <span className="text-white">1 ICP = 35.45 USDT</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Price Impact</span>
                <span className="text-success-500">{'<0.1%'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network Fee</span>
                <span className="text-white">0.001 ICP</span>
              </div>
            </div>

            <Button variant="primary" fullWidth className="mt-6">
              Swap Tokens
            </Button>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between p-4 bg-primary-800 rounded-lg">
          <div className="flex items-center">
            <RefreshCw size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Updated 20 sec ago</span>
          </div>
          <div className="flex items-center">
            <Info size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">24h Volume: 1.2M ICP</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};