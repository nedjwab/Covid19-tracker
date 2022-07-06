import axios from 'axios';

const GET_COUNTRIES = 'Covid19-tracker/GET_COUNTRIES';
const url = 'https://disease.sh/v3/covid-19/countries';

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const fetchCountry = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const countries = [];
  try {
    data.forEach((el) => {
      countries.push({
        id: el.countryInfo[0],
        country: el.country,
        flag: el.countryInfo.flag,
        cases: el.cases,
        deaths: el.deaths,
        recovered: el.recovered,
        continent: el.continent,
        tests: el.tests,
        iso: el.countryInfo.iso2,
      });
    });
    dispatch(getCountries(countries));
  } catch (error) {
    <h2>{error}</h2>;
  }
};

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}
