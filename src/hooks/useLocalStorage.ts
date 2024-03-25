import { LocalStoreageContext } from '@/contexts/LocalStoreageContext';
import { useContext } from 'react';

export const useLocalStorage = () => {
  const context = useContext(LocalStoreageContext);
  if (context === undefined) {
    throw new Error('useLocalStorage must be used within a LocalStoreageContextProvider');
  }

  return context;
};
