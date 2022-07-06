import { fetchCountry,  getCountries } from '../Redux/Countries';

const action = (payload) => ({
  type: 'GET_COUNTRIES',
  payload,
});

describe('Should test countries reducer', () => {
  it('Should return an array ', async () => {
    const arr = fetchCountry;
    expect(arr.length).toBe(0);
  });

  it('Should return an array ', () => {
    expect(getCountries(action.payload)).toBeInstanceOf(Object);
  });
});