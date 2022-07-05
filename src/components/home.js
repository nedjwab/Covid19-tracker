import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiWorld } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { fetchCountry } from '../redux/Countries';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, []);

  const countriesData = useSelector((state) => state.countriesData);
  return (
    <section className="body">
      <div className="home-banner">
        <span className="world-map"><GiWorld /></span>
        <div className="banner-text">
          <p className="banner-title">world statistics</p>
          <span className="case-title">cases:12243647454 </span>
          {' '}
          <br />
          <span className="case-title">deaths: 12243647454</span>
          <br />
          <span className="case-title">recovered:12243647454</span>
          <br />
        </div>
      </div>
      <div className="categories-container">
        <p className="categories">Africa</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>America</p>
      </div>
      <div className="main-container">
        <span className="search-container">
          <FiSearch />
        </span>
        <input placeholder="eg:Algeria, America" />
      </div>
      <div className="countries-container">
        <ul className="countries-list">
          {
      countriesData.map((data) => (
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
