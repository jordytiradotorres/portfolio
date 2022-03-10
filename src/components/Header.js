import React from 'react';
import logo from '../assets/images/logo.svg';
import Navbar from './Navbar.';

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="logo" />
      </figure>

      <Navbar />
    </header>
  );
};

export default Header;
