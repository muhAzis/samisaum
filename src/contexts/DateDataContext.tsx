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
  hijri: {
    date: '',
    month: '',
  },
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

type Hijri = {
  date: string;
  month: string;
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
  const [hijri, setHijri] = useState<Hijri>({
    date: '',
    month: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const year = dayjs(rawDate).year();
        const month = dayjs(rawDate).month() + 1;
        const date = dayjs(rawDate).date();

        const response = await fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${activeCity.toLocaleLowerCase()}&country=indonesia&method=11&tune=3,3,-3,4,2,3,3,2,3,0`);
        const rawData = await response.json();

        const today = rawData.data.filter((item: any) => item.date.gregorian.day === (date < 10 ? `0${date.toString()}` : date.toString()))[0];

        setTimings({
          Imsak: today.timings.Imsak.replace(' (', ':00 ').replace(')', ''),
          Fajr: today.timings.Fajr.replace(' (', ':00 ').replace(')', ''),
          Sunrise: today.timings.Sunrise.replace(' (', ':00 ').replace(')', ''),
          Dhuhr: today.timings.Dhuhr.replace(' (', ':00 ').replace(')', ''),
          Asr: today.timings.Asr.replace(' (', ':00 ').replace(')', ''),
          Maghrib: today.timings.Maghrib.replace(' (', ':00 ').replace(')', ''),
          Isha: today.timings.Isha.replace(' (', ':00 ').replace(')', ''),
        });

        setHijri({
          date: `${today.date.hijri.day} ${hijriConversion(today.date.hijri.month.number)} ${today.date.hijri.year}`,
          month: hijriConversion(today.date.hijri.month.number),
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [activeCity, rawDate]);

  const hijriConversion = (month: number): string => {
    switch (month) {
      case 1:
        return 'Muharram';
      case 2:
        return 'Safar';
      case 3:
        return 'Rabiul Awal';
      case 4:
        return 'Rabiul Akhir';
      case 5:
        return 'Jumadil Awal';
      case 6:
        return 'Jumadil Akhir';
      case 7:
        return 'Rajab';
      case 8:
        return "Sya'ban";
      case 9:
        return 'Ramadhan';
      case 10:
        return 'Syawal';
      case 11:
        return 'Dzulqaidah';
      case 12:
        return 'Dzulhijjah';
      default:
        return 'Muharram';
    }
  };

  return <DateDataContext.Provider value={{ timings, hijri }}>{children}</DateDataContext.Provider>;
};

export default DateDataContextProvider;
