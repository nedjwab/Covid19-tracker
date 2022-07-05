import React from 'react';
import { GiWorld } from 'react-icons/gi';

const Home = () => (
  <section className="home-banner">
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
  </section>
);

export default Home;
