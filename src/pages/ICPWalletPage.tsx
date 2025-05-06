import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Wallet, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const transactions = [
  {
    id: 1,
    type: 'send',
    amount: 100,
    to: 'icp1234...5678',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    id: 2,
    type: 'receive',
    amount: 250,
    from: 'icp8765...4321',
    timestamp: '2024-03-14T15:45:00Z'
  },
  {
    id: 3,
    type: 'send',
    amount: 50,
    to: 'icp9876...5432',
    timestamp: '2024-03-13T09:20:00Z'
  }
];

export const ICPWalletPage: React.FC = () => {
  const { wallet } = useAuth();
  const [sendAddress, setSendAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock send transaction
    console.log('Sending', sendAmount, 'ICP to', sendAddress);
    setSendAddress('');
    setSendAmount('');
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Wallet className="text-secondary-500 mr-2" size={24} />
                    <h2 className="text-xl font-semibold text-white">ICP Wallet</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Balance</p>
                    <p className="text-2xl font-bold text-secondary-500">{wallet.balance} ICP</p>
                  </div>
                </div>

                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Recipient Address
                    </label>
                    <input
                      type="text"
                      value={sendAddress}
                      onChange={(e) => setSendAddress(e.target.value)}
                      className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="icp..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Amount (ICP)
                    </label>
                    <input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      leftIcon={<ArrowUpRight size={18} />}
                    >
                      Send
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      fullWidth
                      leftIcon={<ArrowDownLeft size={18} />}
                    >
                      Receive
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <History className="text-accent-500 mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                </div>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-primary-800 rounded-lg">
                      <div className="flex items-center">
                        {tx.type === 'send' ? (
                          <ArrowUpRight className="text-error-500 mr-3" size={20} />
                        ) : (
                          <ArrowDownLeft className="text-success-500 mr-3" size={20} />
                        )}
                        <div>
                          <p className="text-white font-medium">
                            {tx.type === 'send' ? `Sent to ${tx.to}` : `Received from ${tx.from}`}
                          </p>
                          <p className="text-sm text-gray-400">
                            {new Date(tx.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <p className={`font-medium ${tx.type === 'send' ? 'text-error-500' : 'text-success-500'}`}>
                        {tx.type === 'send' ? '-' : '+'}{tx.amount} ICP
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Wallet Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Your Address</p>
                    <p className="text-white font-mono break-all">{wallet.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Network</p>
                    <p className="text-white">Internet Computer Mainnet</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-success-500">Connected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};