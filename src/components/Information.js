import React from 'react';
import Button from './Button';

const Information = ({
  title,
  description,
  textButton,
  urlButton,
  hrefButton,
}) => {
  return (
    <div className="about__content">
      <div className="about__separator"></div>
      <div className="about__me">
        <h2>{title}</h2>
        <p>{description}</p>

        {urlButton ? (
          <Button text={textButton} urlButton={urlButton} />
        ) : (
          <Button text={textButton} hrefButton={hrefButton} />
        )}
      </div>
      <div className="about__separator"></div>
    </div>
  );
};

export default Information;
