import React from 'react';
import { GiWorld } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';

const Home = () => (
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
  </section>
);

export default Home;
