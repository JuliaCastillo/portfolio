import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactForm({ setSnackbarOpen }) {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          setName("");
          setEmail("");
          setMessage("");
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
        <input
          id="name-input"
          type="text"
          name="name"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper email-input">
        <label for="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="janedoe123@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper message-input">
        <label for="message-input">Message</label>
        <textarea
          id="message-input"
          name="message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
