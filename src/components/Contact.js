import React from "react";

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
    </div>
  );
}

export default Contact;
