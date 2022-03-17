import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, urlButton, hrefButton = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(`/${urlButton}`);
  };

  return urlButton ? (
    <button type="button" onClick={handleClick} className="btn">
      {text}
    </button>
  ) : hrefButton.startsWith('#') ? (
    <a href={hrefButton} className="btn">
      {text}
    </a>
  ) : (
    <a href={hrefButton} target="_blank" rel="noreferrer" className="btn">
      {text}
    </a>
  );
};

export default Button;
