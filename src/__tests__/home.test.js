import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Home from '../components/home';

it('renders correctly', () => {
  const home = renderer
    .create(<Provider store={store}><Router><Home /></Router></Provider>)
    .toJSON();
  expect(home).toMatchSnapshot();
});
