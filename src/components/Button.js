import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/contact');
  };

  return (
    <button type="button" onClick={handleClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
