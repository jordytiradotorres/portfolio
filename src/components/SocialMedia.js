import React from 'react';
import IconGithub from '../icons/Github';
import IconLinkedin from '../icons/Linkedin';
import IconTwitter from '../icons/Twitter';

const SocialMedia = () => {
  return (
    <ul className="socialMedia icons">
      <li className="socialMedia__item">
        <a
          href="https://github.com/jordytiradotorres"
          target="_blank"
          rel="noreferrer"
          className="socialMedia__link"
        >
          <IconGithub />
        </a>
      </li>
      <li className="socialMedia__item">
        <a
          href="https://twitter.com/jordytirado20"
          target="_blank"
          rel="noreferrer"
          className="socialMedia__link"
        >
          <IconTwitter />
        </a>
      </li>
      <li className="socialMedia__item">
        <a
          href="https://www.linkedin.com/in/jordytiradotorres-developer/"
          target="_blank"
          rel="noreferrer"
          className="socialMedia__link"
        >
          <IconLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
