import React, { useRef } from 'react';
import iconHambueger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close.svg';
import UnorderList from './UnorderList';

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

      <UnorderList
        navbarListRef={navbarListRef}
        handleIconClose={handleIconClose}
      />
    </nav>
  );
};

export default Navbar;
