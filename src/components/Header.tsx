import React from 'react';
import '@/styles/Header.scss';
import { useDate } from '@/hooks/useDate';
import { useCity } from '@/hooks/useCity';

const Header: React.FC = () => {
  const { activeCity } = useCity();
  const { date, setRawDate } = useDate();

  return (
    <>
      <div className="logo">
        <img id="appLogo" src="/logo.svg" alt="logo" />
        <img id="appLogoText" src="/logo-text.svg" alt="logo-text" />
      </div>
      <span className="salam">Assalamu&apos;alaikum!</span>
      <div className="location">
        <span className="city">{activeCity}</span>
        <span className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem' }} />
      </div>
      <div className="dates">
        <span className="date">{date} </span>
        <span className="bi bi-caret-down-fill date-btn" style={{ color: 'var(--clr-text-light)', fontSize: '1rem' }} />
        <input type="date" className="date-picker" onChange={(e) => setRawDate(e.target.value)} />
      </div>
    </>
  );
};

export default Header;
