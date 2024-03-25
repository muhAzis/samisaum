import { useDate } from '@/hooks/useDate';
import React, { useEffect, useState } from 'react';
import '@/styles/TimesCard.scss';

interface Props {
  time: string;
  icon: string;
  iconAlt: string;
  isActive: boolean;
  setActive: () => void;
}

const TimesCardLoading: React.FC<Props> = ({ time, icon, iconAlt, isActive, setActive }) => {
  const { addDate, substractDate } = useDate();

  useEffect(() => {
    console.log('TimesCardLoading rendered');
  }, []);

  return (
    <main id="mainCard" className={isActive ? '' : 'nonactive'}>
      <div className="card-container" onClick={() => (isActive ? '' : setActive())}>
        {isActive && <span className="hijriyah-date-loading" />}
        <h2 className="time">{time}</h2>
        <img className="time-icon" src={icon} alt={iconAlt} />
        <h3 className="time-clock-loading" />
        {isActive && (
          <>
            <p className="text">Waktu tersisa</p>
            <p className="time-left-lading" />
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

export default TimesCardLoading;
