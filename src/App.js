import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:country" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
