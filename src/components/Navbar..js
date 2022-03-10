import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import iconHambueger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close.svg';

const Navbar = () => {
  const iconHamburguerRef = useRef();
  const iconCloseRef = useRef();
  const navbarListRef = useRef();

  const handleIconHamburger = () => {
    iconHamburguerRef.current.style.display = 'none';
    iconCloseRef.current.style.display = 'block';
    navbarListRef.current.style.display = 'block';
  };

  const handleIconClose = () => {
    iconHamburguerRef.current.style.display = 'block';
    iconCloseRef.current.style.display = 'none';
    navbarListRef.current.style.display = 'none';
  };

  return (
    <nav className="navbar">
      <button
        type="button"
        className="icon-hamburger"
        onClick={handleIconHamburger}
        ref={iconHamburguerRef}
      >
        <img src={iconHambueger} alt="icon-hambuger" />
      </button>
      <button
        type="button"
        className="icon-close"
        ref={iconCloseRef}
        onClick={handleIconClose}
      >
        <img src={iconClose} alt="icon-close" />
      </button>
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
    </nav>
  );
};

export default Navbar;
