import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`/${url}`);
  };

  return (
    <button type="button" onClick={handleClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
