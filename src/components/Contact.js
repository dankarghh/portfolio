import React, {useState} from "react";
import { Link } from "react-scroll";
import {send} from 'emailjs-com'

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const btnText = document.getElementById("submitBtn")
    btnText.innerText = "Sending..."
    send(
      'service_hdz4zuz',
      'template_w9ool1q',
      toSend,
      "tpK2Rn4LQQbwS26AR"
    )
      .then((response) => {
        btnText.innerText = "Submit"
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <form onSubmit={onSubmit} className="contact__form">
        <p>Have a question or want to work together?</p>
        <p>
          Fill out the form below or send an email to brendancouttsdev@gmail.com
        </p>
        <input className="contact__form-input" placeholder="Name" type="text" name="from_name" value={toSend.from_name} onChange={handleChange}></input>
        <input className="contact__form-input" placeholder="Email" tpye="email" name="reply_to" value={toSend.reply_to} onChange={handleChange}></input>
        <textarea
          className="contact__form-input contact__form-input--message "
          placeholder="Message"
          type="text"
          name="message" value={toSend.message} onChange={handleChange}
        ></textarea>
        <button id="submitBtn" className="btn">Submit</button>
      </form>
      <Link to="landing" spy={true} smooth={true} offset={-100} duration={500}>
        <button   className="btn btn--primary btn--top">
          <span class="material-symbols-outlined">arrow_upward</span>Jump to top
        </button>
      </Link>
    </div>
  );
}

export default Contact;
