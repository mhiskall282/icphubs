import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ScholarshipRequest, RequestStatus, ScholarshipCategory, Transaction } from '../types';
import { mockScholarshipRequests } from '../data/mockData';
import { useAuth } from './AuthContext';

interface ScholarshipContextType {
  scholarshipRequests: ScholarshipRequest[];
  loadingRequests: boolean;
  createRequest: (request: Omit<ScholarshipRequest, 'id' | 'createdAt' | 'amountRaised' | 'transactions' | 'status'>) => Promise<void>;
  contributeToRequest: (requestId: string, amount: number) => Promise<void>;
  getRequestById: (id: string) => ScholarshipRequest | undefined;
  getStudentRequests: (studentId: string) => ScholarshipRequest[];
  getDonorContributions: (donorId: string) => Transaction[];
}

const ScholarshipContext = createContext<ScholarshipContextType | undefined>(undefined);

export const ScholarshipProvider = ({ children }: { children: ReactNode }) => {
  const [scholarshipRequests, setScholarshipRequests] = useState<ScholarshipRequest[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    // Simulate API call to fetch scholarship requests
    const fetchRequests = async () => {
      setLoadingRequests(true);
      try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        setScholarshipRequests(mockScholarshipRequests);
      } finally {
        setLoadingRequests(false);
      }
    };

    fetchRequests();
  }, []);

  const createRequest = async (
    requestData: Omit<ScholarshipRequest, 'id' | 'createdAt' | 'amountRaised' | 'transactions' | 'status'>
  ): Promise<void> => {
    if (!currentUser) throw new Error('User must be authenticated to create a request');

    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newRequest: ScholarshipRequest = {
      ...requestData,
      id: `req-${Date.now()}`,
      createdAt: new Date().toISOString(),
      amountRaised: 0,
      status: RequestStatus.ACTIVE,
      transactions: []
    };

    setScholarshipRequests(prev => [newRequest, ...prev]);
  };

  const contributeToRequest = async (requestId: string, amount: number): Promise<void> => {
    if (!currentUser) throw new Error('User must be authenticated to contribute');
    
    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setScholarshipRequests(prev => prev.map(req => {
      if (req.id === requestId) {
        const newAmountRaised = req.amountRaised + amount;
        const newTransaction: Transaction = {
          id: `tx-${Date.now()}`,
          requestId,
          donorId: currentUser.id,
          amount,
          timestamp: new Date().toISOString(),
          blockchainTxHash: `tx_${Math.random().toString(36).substring(2, 15)}`
        };
        
        return {
          ...req,
          amountRaised: newAmountRaised,
          status: newAmountRaised >= req.amount ? RequestStatus.FUNDED : req.status,
          transactions: [...req.transactions, newTransaction]
        };
      }
      return req;
    }));
  };

  const getRequestById = (id: string): ScholarshipRequest | undefined => {
    return scholarshipRequests.find(req => req.id === id);
  };

  const getStudentRequests = (studentId: string): ScholarshipRequest[] => {
    return scholarshipRequests.filter(req => req.studentId === studentId);
  };

  const getDonorContributions = (donorId: string): Transaction[] => {
    return scholarshipRequests
      .flatMap(req => req.transactions)
      .filter(tx => tx.donorId === donorId);
  };

  return (
    <ScholarshipContext.Provider value={{
      scholarshipRequests,
      loadingRequests,
      createRequest,
      contributeToRequest,
      getRequestById,
      getStudentRequests,
      getDonorContributions
    }}>
      {children}
    </ScholarshipContext.Provider>
  );
};

export const useScholarship = (): ScholarshipContextType => {
  const context = useContext(ScholarshipContext);
  if (!context) {
    throw new Error('useScholarship must be used within a ScholarshipProvider');
  }
  return context;
};