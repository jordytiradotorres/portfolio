import heroImage from '../assets/images/hero.jpg';
import iconArrows from '../assets/images/icon-arrows.svg';
import Button from './Button';

const Hero = () => {
  return (
    <section className="hero">
      <figure className="hero__figure">
        <img src={heroImage} alt="hero" />
      </figure>

      <div className="hero__content">
        <h2>Hey, I’m Jordy Tirado and I love building beautiful websites</h2>
        <div>
          <img src={iconArrows} alt="icon arrows" />

          <Button text="About Me" hrefButton="#aboutme" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
