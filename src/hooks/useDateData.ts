import { DateDataContext } from '@/contexts/DateDataContext';
import { useContext } from 'react';

export const useDateData = () => {
  const context = useContext(DateDataContext);
  if (context === undefined) {
    throw new Error('useDateData must be used within a DateDataContextProvider');
  }

  return context;
};
