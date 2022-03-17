import React from 'react';
import Figure from '../components/Figure';
import Information from '../components/Information';
import Interested from '../components/Interested';
import data from '../data';

const Portfolio = () => {
  const filterWithoutAbout = data.filter((elem) => elem.title !== 'About me');

  return (
    <div className="container">
      {filterWithoutAbout.map((elem) => (
        <section className="about portfolio" key={elem.title}>
          <Figure avatar={elem.image} />
          <Information
            title={elem.title}
            description={elem.description}
            textButton={elem.textButton}
            hrefButton={elem.hrefButton}
          />
        </section>
      ))}
      <Interested />
    </div>
  );
};

export default Portfolio;
