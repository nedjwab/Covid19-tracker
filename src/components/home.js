import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiAfrica } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { RiVirusFill } from 'react-icons/ri';
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
        <span className="first-virus"><RiVirusFill /></span>
        <span className="world-map"><GiAfrica /></span>
        <div className="banner-text">
          <p className="banner-title">Covid statistics</p>
          <p className="place">AFRICA</p>
          <span className="second-virus"><RiVirusFill /></span>
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
              state={data.country === null ? '' : { country: data.country }}
            >
              <div className="country-info">
                <p className="country-name">{data.country.toUpperCase()}</p>
                <img src={data.flag} alt="flag" />
                <p className="country-capital">{data.iso}</p>
                <p className="country-capital">{data.cases}</p>
                <p className="country-capital">{data.deaths}</p>
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
