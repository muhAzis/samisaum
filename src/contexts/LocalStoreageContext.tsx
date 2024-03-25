import React, { createContext, useEffect, useState } from 'react';

export const LocalStoreageContext = createContext({
  defaultCity: '',
  setDefaultCity: (city: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const LocalStoreageContextProvider: React.FC<Props> = ({ children }) => {
  const [defaultCity, setDefaultCity] = useState<string>('');

  useEffect(() => {
    const city = localStorage.getItem('city');
    if (!city) {
      localStorage.setItem('city', 'Jakarta Pusat');
      setDefaultCity('Jakarta Pusat');
    } else {
      setDefaultCity(city);
    }
  }, []);

  useEffect(() => {
    if (defaultCity !== '') {
      localStorage.setItem('city', defaultCity);
    }
  }, [defaultCity]);

  return <LocalStoreageContext.Provider value={{ defaultCity, setDefaultCity }}>{children}</LocalStoreageContext.Provider>;
};

export default LocalStoreageContextProvider;
