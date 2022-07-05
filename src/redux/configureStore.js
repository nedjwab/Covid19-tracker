import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './Countries';


const rootReducer = combineReducers({
  countriesData: countryReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;