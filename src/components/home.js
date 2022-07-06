import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiAfrica, GiWorld } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchCountry } from '../redux/Countries';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, []);

  const countriesData = useSelector((state) => state.countriesData);
  const filtredcountriesData = countriesData.filter((dat) => (dat.continent === 'Africa'));
  const [postCity, setCity] = useState('');
  const dataSearch = (str) => setCity(str);
  return (
    <section className="body">
      <div className="home-banner">
        <span className="world-map"><GiWorld /></span>
        <div className="banner-text">
          <p className="banner-title">Covid statistics</p>
          <p className="place">AFRICA</p>
          <span className="map-unique"><GiAfrica /></span>
        </div>
      </div>
      <div className="main-container">
        <span className="search-container">
          <FiSearch />
        </span>
        <input placeholder="Eg: Algeria , America" onChange={(e) => dataSearch(e.target.value)} />
      </div>
      <div className="categories-container">
        <p>STATS BY COUNTRY</p>
      </div>
      <div className="countries-container">
        <ul className="countries-list">
          {
      filtredcountriesData.filter((value) => value.country
        .toLowerCase().includes(postCity
          .toLocaleLowerCase())).map((data) => (
            <Link
              to={`/details/${data.country}`}
              key={data.country}
              className="card-country"
              state={data.country === null ? '' : { country: data.country, flag: data.flag }}
            >
              <div className="country-info">
                <div className="right-arrow"><BsArrowRightCircle /></div>
                <img className="country-img" src={data.flag} alt="flag" />
                <div className="info">
                  <p className="country-capital">{data.iso}</p>
                  <p>{data.cases}</p>
                </div>
              </div>
            </Link>
      ))
     }
        </ul>
      </div>
    </section>
  );
}

export default Home;
