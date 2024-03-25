import { DateContext } from '@/contexts/DateContext';
import { useContext } from 'react';

export const useDate = () => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDate must be used within a DateContextProvider');
  }

  return context;
};
