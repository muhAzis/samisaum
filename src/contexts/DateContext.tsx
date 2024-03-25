import dayjs from 'dayjs';
import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

interface ContextProps {
  date: string;
  rawDate: string;
  setRawDate: (date: string) => void;
  addDate: (days: number) => void;
  substractDate: (days: number) => void;
}

export const DateContext = createContext<ContextProps>({
  date: '',
  rawDate: '',
  setRawDate: () => {},
  addDate: () => {},
  substractDate: () => {},
});

const DateContextProvider: React.FC<Props> = ({ children }) => {
  const [rawDate, setRawDate] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [date, setDate] = useState<string>('');

  const addDate = (days: number): void => {
    setRawDate(dayjs(rawDate).add(days, 'day').format('YYYY-MM-DD'));
  };

  const substractDate = (days: number): void => {
    setRawDate(dayjs(rawDate).subtract(days, 'day').format('YYYY-MM-DD'));
  };

  useEffect(() => {
    setDate(dateConversion(rawDate));
  }, [rawDate]);

  const dateConversion = (date: string): string => {
    let day = '';
    let month = '';

    switch (dayjs(date).format('d')) {
      case '0':
        day = 'Minggu';
        break;
      case '1':
        day = 'Senin';
        break;
      case '2':
        day = 'Selasa';
        break;
      case '3':
        day = 'Rabu';
        break;
      case '4':
        day = 'Kamis';
        break;
      case '5':
        day = 'Jumat';
        break;
      case '6':
        day = 'Sabtu';
        break;
      default:
        day = 'Senin';
        break;
    }

    switch (dayjs(date).format('M')) {
      case '1':
        month = 'Januari';
        break;
      case '2':
        month = 'Februari';
        break;
      case '3':
        month = 'Maret';
        break;
      case '4':
        month = 'April';
        break;
      case '5':
        month = 'Mei';
        break;
      case '6':
        month = 'Juni';
        break;
      case '7':
        month = 'Juli';
        break;
      case '8':
        month = 'Agustus';
        break;
      case '9':
        month = 'September';
        break;
      case '10':
        month = 'Oktober';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'Desember';
        break;
      default:
        month = 'Januari';
        break;
    }

    return `${day}, ${dayjs(date).format('D')} ${month} ${dayjs(date).format('YYYY')}`;
  };

  const values = {
    date,
    rawDate,
    setRawDate,
    addDate,
    substractDate,
  };

  return <DateContext.Provider value={values}>{children}</DateContext.Provider>;
};

export default DateContextProvider;
