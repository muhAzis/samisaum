import React, { useEffect, useState } from 'react';
import '@/styles/TimesCard.scss';
import { useDate } from '@/hooks/useDate';
import { useDateData } from '@/hooks/useDateData';

interface Props {
  time: string;
  icon: string;
  iconAlt: string;
  isActive: boolean;
  setActive: () => void;
}

const TimesCard: React.FC<Props> = ({ time, icon, iconAlt, isActive, setActive }) => {
  const { rawDate, addDate, substractDate } = useDate();
  const { timings, hijri } = useDateData();
  const [activeTime, setActiveTime] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    switch (time) {
      case 'Imsak':
        setActiveTime(timings.Imsak);
        break;
      case 'Subuh':
        setActiveTime(timings.Fajr);
        break;
      case 'Dzuhur':
        setActiveTime(timings.Dhuhr);
        break;
      case 'Ashar':
        setActiveTime(timings.Asr);
        break;
      case 'Maghrib':
        setActiveTime(timings.Maghrib);
        break;
      case 'Isya':
        setActiveTime(timings.Isha);
        break;
      default:
        setActiveTime('');
        break;
    }
  }, [setActiveTime, time, timings]);

  useEffect(() => {
    const countDown = setInterval(() => {
      const now = new Date();
      const time = new Date(`${rawDate} ${activeTime.slice(0, 8)}`);
      const distance = time.getTime() - now.getTime();

      const hour = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(
        hour >= 1
          ? 'Masih besok kok'
          : hours < 0
          ? 'Udah lewattt'
          : `
        ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}
      `
      );
    }, 1000);

    return () => clearInterval(countDown);
  }, [timeRemaining, activeTime, rawDate]);

  return (
    <main id="mainCard" className={`${isActive ? '' : 'nonactive'} ${hijri.month === 'Ramadhan' && (time === 'Imsak' || time === 'Maghrib') ? 'ramadhan' : ''}`}>
      <div className="card-container" onClick={() => (isActive ? '' : setActive())}>
        {isActive && hijri.month === 'Ramadhan' && (time === 'Imsak' || time === 'Maghrib') && (
          <>
            <img className="ramadhan-lantern1" src="/lantern1.png" alt="lantern1" />
            <img className="ramadhan-lantern2" src="/lantern2.png" alt="lantern2" />
            <img className="ramadhan-lantern3" src="/lantern1.png" alt="lantern3" />
            <img className="ramadhan-lantern4" src="/lantern2.png" alt="lantern4" />
          </>
        )}
        {isActive && (!hijri ? <span className="hijriyah-date-loading" /> : <span className="hijriyah-date">{hijri.date}</span>)}
        <h2 className="time">{time}</h2>
        <img className="time-icon" src={icon} alt={iconAlt} />
        {!activeTime ? <h3 className="time-clock-loading" /> : <h3 className="time-clock">{activeTime}</h3>}
        {isActive && (
          <>
            <p className="text">Waktu tersisa</p>
            {!timeRemaining ? <p className="time-left-loading" /> : <p className="time-left">{timeRemaining}</p>}
            <div className="cta">
              <div className="left-btn bi bi-caret-left-fill" onClick={() => substractDate(1)} />
              <div className="right-btn bi bi-caret-right-fill" onClick={() => addDate(1)} />
            </div>
            <div className="clouds" />
          </>
        )}
      </div>
    </main>
  );
};

export default TimesCard;
