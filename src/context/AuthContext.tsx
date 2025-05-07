import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Student, Donor, WalletInfo } from '../types';
import { mockStudents, mockDonors } from '../data/mockData';

interface AuthContextType {
  currentUser: User | null;
  wallet: WalletInfo;
  isAuthenticated: boolean;
  isStudent: boolean;
  isDonor: boolean;
  login: (userId: string, userType: 'student' | 'donor') => Promise<void>;
  logout: () => void;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const initialWallet: WalletInfo = {
  address: '',
  balance: 0,
  connected: false
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [wallet, setWallet] = useState<WalletInfo>(initialWallet);
  const [loading, setLoading] = useState(false);

  const login = async (userId: string, userType: 'student' | 'donor'): Promise<void> => {
    setLoading(true);
    try {
      const user = userType === 'student' 
        ? mockStudents.find(s => s.id === userId)
        : mockDonors.find(d => d.id === userId);
      
      if (user) {
        setCurrentUser(user);
        if (user.wallet) {
          setWallet({
            address: user.wallet,
            balance: Math.floor(Math.random() * 100),
            connected: true
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setWallet(initialWallet);
  };

  const connectWallet = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockAddress = `icp${Math.random().toString(36).substring(2, 15)}`;
        setWallet({
          address: mockAddress,
          balance: Math.floor(Math.random() * 100),
          connected: true
        });
        
        if (currentUser) {
          setCurrentUser({
            ...currentUser,
            wallet: mockAddress
          });
        }
        
        resolve();
      }, 500);
    });
  };

  const disconnectWallet = () => {
    setWallet(initialWallet);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      wallet,
      isAuthenticated: !!currentUser,
      isStudent: currentUser ? 'school' in currentUser : false,
      isDonor: currentUser ? 'totalDonated' in currentUser : false,
      login,
      logout,
      connectWallet,
      disconnectWallet
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
