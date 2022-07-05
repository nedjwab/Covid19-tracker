import { FaMicrophone, FaArrowLeft } from 'react-icons/fa';

const Navbar = () => (
  <header>
    <span className="arrow-class"><FaArrowLeft /></span>
    <p className="title">Covid-19 Tracker</p>
    <div className="icons">
      <span className="microphone"><FaMicrophone /></span>
      <span className="microphone"><FaMicrophone /></span>
    </div>
  </header>
);

export default Navbar;
