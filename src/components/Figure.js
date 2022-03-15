const Figure = ({ avatar }) => {
  return (
    <figure className="about__image">
      <img src={avatar} alt="avatar" />
    </figure>
  );
};

export default Figure;
