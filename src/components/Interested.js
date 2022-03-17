import Button from './Button';

const Interested = () => {
  return (
    <section className="interested">
      <h2 className="interested__title">
        Interested in doing a project together?
      </h2>

      <div className="interested__separator"></div>

      <Button text="Contact Me" urlButton="contact" />
    </section>
  );
};

export default Interested;
