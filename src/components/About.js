import data from '../data';
import Figure from './Figure';
import Information from './Information';

const About = () => {
  const filterAbout = data.filter((elem) =>
    elem.title.toLowerCase().includes('about')
  );

  return filterAbout.map((elem) => (
    <section className="about" key={elem.title} id="aboutme">
      <Figure avatar={elem.image} />
      <Information
        title={elem.title}
        description={elem.description}
        textButton={elem.textButton}
        urlButton={elem.urlButton}
      />
    </section>
  ));
};

export default About;
