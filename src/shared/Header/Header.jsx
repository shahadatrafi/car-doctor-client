import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // localStorage.removeItem('car-access-token');
       })
      .catch(err => {
        console.log(err.message);
        
    })
  }

  const navigation = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    {user ? <>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link><button onClick={handleLogOut}>Log out</button></Link></li>
    </> :
    <li><Link to="/login">Login</Link></li>
    }
  </>

  return (
    <div className="navbar bg-base-100 h-28
        ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navigation}
          </ul>
        </div>
        <Link to='/'><img className='h-20' src={logo} alt="" /></Link>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navigation}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline  btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Header;