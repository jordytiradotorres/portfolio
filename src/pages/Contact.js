import React from 'react';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  return (
    <main className="container contact">
      <div className="contact__content">
        <div className="contact__me">
          <h2>Get in Touch</h2>
        </div>

        <div className="contact__info">
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Lima. But I’m also happy to hear about opportunites that
            don’t fit that description. I’m a hard-working and positive person
            who will always approach each task with a sense of purpose and
            attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <SocialMedia />
        </div>
      </div>

      <div className="contact__content">
        <div className="contact__me">
          <h2>Contact Me</h2>
        </div>

        <div className="contact__info">
          <form className="form">
            <div className="form__item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jordy Tirado"
              />
            </div>

            <div className="form__item">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
            </div>

            <div className="form__item">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="How can I help?"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
