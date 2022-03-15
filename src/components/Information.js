import React from 'react';
import Button from './Button';

const Information = ({ title, description, textButton, urlButton }) => {
  return (
    <div className="about__content">
      <div className="about__separator"></div>
      <div className="about__me">
        <h2>{title}</h2>
        <p>{description}</p>

        <Button text={textButton} url={urlButton} />
      </div>
      <div className="about__separator"></div>
    </div>
  );
};

export default Information;
