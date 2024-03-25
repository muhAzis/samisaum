import { CityContext } from '@/contexts/CityContext';
import { useContext } from 'react';

export const useCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityContextProvider');
  }

  return context;
};
