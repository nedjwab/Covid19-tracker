import axios from 'axios';

const GET_STAT = 'Covid19-tracker/GET_STAT';

export const getCountries = (payload) => ({
  type: GET_STAT,
  payload,
});

export const fetchStat = (countryName) => async (dispatch) => {
  const url = `https://disease.sh/v3/covid-19/countries/${countryName}`;
  const response = await axios.get(url);
  const data = await response.data;
  dispatch(getCountries(data));
};

export default function statReducer(state = [], action) {
  switch (action.type) {
    case GET_STAT:
      return action.payload;
    default:
      return state;
  }
}
