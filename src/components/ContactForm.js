import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm({ setSnackbarOpen }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d130s6",
        "template_uqaggf7",
        form.current,
        "user_6ins1lka8vqyvO7vC7uRd"
      )
      .then(
        (result) => {
          setSnackbarOpen(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-wrapper name-input">
        <label for="name-input">Name</label>
        <input id="name-input" type="text" name="name" placeholder="Jane Doe" />
      </div>
      <div className="input-wrapper email-input">
        <label for="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="janedoe123@email.com"
          required
        />
      </div>
      <div className="input-wrapper message-input">
        <label for="message-input">Message</label>
        <textarea id="message-input" name="message" rows="5" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
