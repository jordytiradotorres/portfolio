import React from 'react';
import { NavLink } from 'react-router-dom';

const UnorderList = ({ navbarListRef, handleIconClose }) => {
  return (
    <ul className="navbar__list" ref={navbarListRef}>
      <li className="navbar__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            'navbar__link ' + (isActive ? 'activated' : '')
          }
          onClick={handleIconClose}
        >
          Home
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            'navbar__link ' + (isActive ? 'activated' : '')
          }
          onClick={handleIconClose}
        >
          Portfolio
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            'navbar__link ' + (isActive ? 'activated' : '')
          }
          onClick={handleIconClose}
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
};

export default UnorderList;
