import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './countries';
import statReducer from './countriesStat';

const rootReducer = combineReducers({
  countriesData: countryReducer,
  countryStat: statReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
