import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchStat } from '../redux/CountriesStat';

function Details() {
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStat(country));
  }, []);

  const stat = useSelector((state) => state.countryStat);
  return (
    <div className="container">
      <h1>{ stat.cases }</h1>
      <h1>{ stat.population }</h1>
      <h1>{ stat.tests }</h1>
      <h1>{ stat.continent }</h1>
      <h1>{ stat.oneCasePerPeople }</h1>
      <h1>{ stat.oneDeathPerPeople }</h1>
      <h1>{ stat.oneTestPerPeople }</h1>
      <h1>{ stat.recoveredPerOneMillion }</h1>
      <h1>Test</h1>
    </div>
  );
}

export default Details;
