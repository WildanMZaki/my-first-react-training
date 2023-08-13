import { Link } from 'react-router-dom';
import "./navbar.css";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
  const { user }= useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
          <span className="logo">Z-Booking</span>
        </Link>
        { user ? user.username : (<div className="navItems">
          <Link to='/register'>
            <button className="navButton">Register</button>
          </Link>
          <Link to='/login'>
            <button className="navButton">Login</button>
          </Link>
        </div> ) }
      </div>
    </div>
  )
}

export default Navbar
