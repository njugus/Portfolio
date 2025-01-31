import './contact.css';

const Contact = () => {

  

  return (
    <>
      <section className="main-contact-section">
        <div className="contact-info">
          <div className="top-div">
            <h1>Contact Me</h1>
            <p>
              "We're here to answer your questions and help you with whatever you
              need. Contact us through any of the channels below, and our team
              will respond promptly."
            </p>
          </div>

          <div className="bottom-div">
            <div className="contact-details">
              <h3>Phone</h3>
              <p>
                Give me a call : <a href="tel:+254110080435">+254110080435</a>
              </p>
              <h3>Email</h3>
              <p>
                Or Email Me :{' '}
                <a href="mailto:kevinnjugush95@gmail.com">
                  kevinnjugush95@gmail.com
                </a>
              </p>
            </div>
            <div className="social-media-handles">
              <h3>Follow Us</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <form id="contact-form" name="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
