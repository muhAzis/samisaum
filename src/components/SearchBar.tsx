import React, { useState } from 'react';
import '@/styles/SearchBar.scss';
import { cities } from '@/data/city';
import { useCity } from '@/hooks/useCity';

const SearchBar: React.FC = () => {
  const { setActiveCity } = useCity();
  const [showList, setShowList] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  return (
    <main id="searchBar">
      <input
        className="input-tab"
        type="text"
        placeholder="temukan lokasimu..."
        onFocus={() => setShowList(true)}
        onBlur={(e) => {
          e.target.value = '';
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="bi bi-search" />
      {showList && (
        <div className="city-list">
          <div className="cancle-btn" onClick={() => setShowList(false)}>
            Tutup <span className="bi bi-x" />
          </div>
          {cities.filter((province) => Object.values(province)[0].filter((city: string) => city.toLowerCase().includes(search.toLowerCase())).length > 0).length === 0 ? (
            <div className="province">
              <div className="city-name">kota tidak ditemukan</div>
            </div>
          ) : (
            ''
          )}
          {cities.map((province, i) => {
            return (
              <div className="province" key={i}>
                {Object.values(province)[0].filter((city: string) => city.toLowerCase().includes(search.toLowerCase())).length > 0 && <div className="province-name">{Object.keys(province)}</div>}
                {Object.values(province)[0].map((city: string, j: number) =>
                  city.toLowerCase().includes(search.toLowerCase()) ? (
                    <div
                      className="city-name"
                      key={j}
                      onClick={() => {
                        setActiveCity(city);
                        setShowList(false);
                        setSearch('');
                      }}
                    >
                      {city}
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default SearchBar;
