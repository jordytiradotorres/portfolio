import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar.';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>

        <Navbar />
      </header>
    </div>
  );
};

export default Header;
