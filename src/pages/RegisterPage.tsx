import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Wallet } from 'lucide-react';
import { AuthClient } from '@dfinity/auth-client';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  userType: z.enum(['student', 'donor'])
});

type RegisterForm = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  });
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const navigate = useNavigate();

  const connectIIWallet = async () => {
    setIsConnectingWallet(true);
    try {
      const authClient = await AuthClient.create();
      await authClient.login({
        identityProvider: 'https://identity.ic0.app',
        onSuccess: () => {
          // Handle successful wallet connection
        },
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnectingWallet(false);
    }
  };

  const onSubmit = async (data: RegisterForm) => {
    try {
      // Mock registration
      console.log('Registration data:', data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-gray-400">Join the decentralized education revolution</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...register('password')}
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-error-500">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  I am a
                </label>
                <select
                  {...register('userType')}
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                >
                  <option value="student">Student</option>
                  <option value="donor">Donor</option>
                </select>
              </div>

              <Button
                type="button"
                variant="outline"
                fullWidth
                onClick={connectIIWallet}
                isLoading={isConnectingWallet}
                leftIcon={<Wallet size={18} />}
              >
                Connect Internet Identity
              </Button>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isSubmitting}
                leftIcon={<UserPlus size={18} />}
              >
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
