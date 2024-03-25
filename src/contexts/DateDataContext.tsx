import { useCity } from '@/hooks/useCity';
import { useDate } from '@/hooks/useDate';
import dayjs from 'dayjs';
import React, { createContext, useEffect, useState } from 'react';

export const DateDataContext = createContext({
  timings: {
    Imsak: '',
    Fajr: '',
    Sunrise: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  },
  hijri: '',
});

interface Props {
  children: React.ReactNode;
}

type Timings = {
  Imsak: string;
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

const DateDataContextProvider: React.FC<Props> = ({ children }) => {
  const { activeCity } = useCity();
  const { rawDate } = useDate();
  const [timings, setTimings] = useState<Timings>({
    Imsak: '',
    Fajr: '',
    Sunrise: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  });
  const [hijri, setHijri] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const year = dayjs(rawDate).year();
        const month = dayjs(rawDate).month() + 1;
        const date = dayjs(rawDate).date();

        const response = await fetch(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${activeCity.toLocaleLowerCase()}&country=indonesia&method=11&tune=3,3,-3,4,2,3,3,2,3,0`);
        const rawData = await response.json();

        const today = rawData.data.filter((item: any) => item.date.gregorian.day === date.toString())[0];

        setTimings({
          Imsak: today.timings.Imsak.replace(' (', ':00 ').replace(')', ''),
          Fajr: today.timings.Fajr.replace(' (', ':00 ').replace(')', ''),
          Sunrise: today.timings.Sunrise.replace(' (', ':00 ').replace(')', ''),
          Dhuhr: today.timings.Dhuhr.replace(' (', ':00 ').replace(')', ''),
          Asr: today.timings.Asr.replace(' (', ':00 ').replace(')', ''),
          Maghrib: today.timings.Maghrib.replace(' (', ':00 ').replace(')', ''),
          Isha: today.timings.Isha.replace(' (', ':00 ').replace(')', ''),
        });

        setHijri(`${today.date.hijri.day} ${today.date.hijri.month.en} ${today.date.hijri.year}`);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [activeCity, rawDate]);

  return <DateDataContext.Provider value={{ timings, hijri }}>{children}</DateDataContext.Provider>;
};

export default DateDataContextProvider;
