import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { fetchStat } from '../redux/CountriesStat';

function Details() {
  const location = useLocation();
  const { country } = location.state;
  const { flag } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStat(country));
  }, []);

  const stat = useSelector((state) => state.countryStat);
  return (
    <div className="container">
      <img className="details-flag" src={flag} alt="flag" />
      <div className="detail-container">
        <p>
          Name :
          { stat.country }
        </p>
        <p>
          Cases :
          { stat.cases }
        </p>
        <p>
          Population :
          { stat.population }
        </p>
        <p>
          Tests :
          { stat.tests }
        </p>
        <p>
          Recovered :
          { stat.recovered }
        </p>
        <p>
          Critical:
          { stat.critical }
        </p>
        <p>
          CasePerPeople :
          { stat.oneCasePerPeople }
        </p>
        <p>
          DeathPerPeople :
          { stat.oneDeathPerPeople }
        </p>
        <p>
          TestPerPeople :
          { stat.oneTestPerPeople }
        </p>
      </div>
    </div>
  );
}

export default Details;
