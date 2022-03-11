import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-white.svg';
import SocialMedia from './SocialMedia';

import UnorderList from './UnorderList';

const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="container">
        <footer className="footer header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
          </Link>

          <UnorderList />

          <SocialMedia />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
