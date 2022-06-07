import React from "react";
import { Link } from "react-scroll";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <form className="contact__form">
        <p>Have a question or want to work together?</p>
        <p>
          Fill out the form below or send an email to brendancouttsdev@gmail.com
        </p>
        <input className="contact__form-input" placeholder="Name"></input>
        <input className="contact__form-input" placeholder="Email"></input>
        <textarea
          className="contact__form-input contact__form-input--message "
          placeholder="Message"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
      <Link to="landing" spy={true} smooth={true} offset={-100} duration={500}>
        <button className="btn btn--primary btn--top">
          <span class="material-symbols-outlined">arrow_upward</span>Jump to top
        </button>
      </Link>
    </div>
  );
}

export default Contact;
