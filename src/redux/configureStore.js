import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './Countries';
import statReducer from './CountriesStat';

const rootReducer = combineReducers({
  countriesData: countryReducer,
  countryStat: statReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
