import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchStat } from '../redux/CountriesStat';

function Details() {
  const location = useLocation();
  const { country } = location.state;
  console.log(country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStat(country));
  }, []);

  const stat = useSelector((state) => state.countryStat);
  return (
    <div className="container">
      <h1>{ stat.deaths }</h1>
      <h1>{ stat.cases }</h1>
      <img src={stat.countryInfo.flag} alt="flag" />
      <h1>Test</h1>
    </div>
  );
}

export default Details;
