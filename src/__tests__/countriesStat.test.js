import { fetchStat, getCountries } from '../redux/countriesStat';

const action = (payload) => ({
  type: ' GET_STAT',
  payload,
});

describe('Should test countriesstat reducer', () => {
  it('Should return an array on api call', async () => {
    const arr = fetchStat;
    expect(arr.length).toBeGreaterThan(0);
  });

  it('Should return an array', () => {
    expect(getCountries(action.payload)).toBeInstanceOf(Object);
  });
});
