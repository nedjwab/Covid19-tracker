import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchStat } from '../redux/CountriesStat';

function Details() {
  const location = useLocation();
  const { capital } = location.state;
  console.log(capital);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStat(capital));
  }, []);

  const stat = useSelector((state) => state.countryStat);
  return (
    <div className="container">
      <h1>{ stat.deaths }</h1>
      <h1>Test</h1>
    </div>
  );
}

export default Details;
