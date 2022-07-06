import '@testing-library/jest-dom/extend-expect';
import Home from '../components/home';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import { Provider } from 'react-redux';

it('renders correctly', () => {
  const home = renderer
    .create(<Provider store={store}><Router><Home /></Router></Provider>)
    .toJSON();
  expect(home).toMatchSnapshot();
});