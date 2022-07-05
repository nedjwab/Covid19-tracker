import { Link } from 'react-router-dom';
import { FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <header>
    <Link to="/"><span className="arrow-class"><FaArrowLeft /></span></Link>
    <p className="title">Covid-19 Tracker</p>
    <div className="icons">
      <span className="microphone"><FaMicrophone /></span>
      <span className="microphone"><FiSettings /></span>
    </div>
  </header>
);

export default Navbar;
