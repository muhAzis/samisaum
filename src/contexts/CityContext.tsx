import { useLocalStorage } from '@/hooks/useLocalStorage';
import React, { createContext, useEffect, useState } from 'react';

export const CityContext = createContext({
  activeCity: '',
  setActiveCity: (city: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const CityContextProvider: React.FC<Props> = ({ children }) => {
  const { defaultCity, setDefaultCity } = useLocalStorage();
  const [activeCity, setActiveCity] = useState<string>('');

  useEffect(() => {
    setActiveCity(defaultCity);
  }, [defaultCity]);

  useEffect(() => {
    setDefaultCity(activeCity);
  }, [activeCity, setDefaultCity]);

  return <CityContext.Provider value={{ activeCity, setActiveCity }}>{children}</CityContext.Provider>;
};

export default CityContextProvider;
