'use client';
import TimesCard from '@/components/TimesCard';
import SearchBar from '@/components/SearchBar';
import '@/styles/page.scss';
import { useState } from 'react';
import Header from '@/components/Header';
import DateContextProvider from '@/contexts/DateContext';
import CityContextProvider from '@/contexts/CityContext';
import DateDataContextProvider from '@/contexts/DateDataContext';
import LocalStoreageContextProvider from '@/contexts/LocalStoreageContext';

export default function Home() {
  const [activeCard, setActiveCard] = useState<string>('imsak');

  return (
    <DateContextProvider>
      <LocalStoreageContextProvider>
        <CityContextProvider>
          <DateDataContextProvider>
            <main className="main">
              <div className="container">
                <Header />
                <SearchBar />
                <TimesCard time={'Imsak'} icon={'/Subh.svg'} iconAlt={'Imsak'} isActive={activeCard === 'imsak'} setActive={() => setActiveCard('imsak')} />
                <TimesCard time={'Subuh'} icon={'/Subh.svg'} iconAlt={'Subuh'} isActive={activeCard === 'subuh'} setActive={() => setActiveCard('subuh')} />
                <TimesCard time={'Dzuhur'} icon={'/Dhuhr.svg'} iconAlt={'Dzuhur'} isActive={activeCard === 'dzuhur'} setActive={() => setActiveCard('dzuhur')} />
                <TimesCard time={'Ashar'} icon={'/Asr.svg'} iconAlt={'Ashar'} isActive={activeCard === 'ashar'} setActive={() => setActiveCard('ashar')} />
                <TimesCard time={'Maghrib'} icon={'/Maghrib.svg'} iconAlt={'Maghrib'} isActive={activeCard === 'maghrib'} setActive={() => setActiveCard('maghrib')} />
                <TimesCard time={'Isya'} icon={'/Isya.svg'} iconAlt={'Isya'} isActive={activeCard === 'isya'} setActive={() => setActiveCard('isya')} />

                {/* <div className="topo-line-container1">
                  <div className="topo-line">
                    <div className="topo-line">
                      <div className="topo-line">
                        <div className="topo-line" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topo-line-container2">
                  <div className="topo-line">
                    <div className="topo-line">
                      <div className="topo-line">
                        <div className="topo-line" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </main>
          </DateDataContextProvider>
        </CityContextProvider>
      </LocalStoreageContextProvider>
    </DateContextProvider>
  );
}
