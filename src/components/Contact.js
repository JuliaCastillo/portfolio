import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Snackbar from "@mui/material/Snackbar";

function Contact() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [snackbarPosition] = useState({
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal } = snackbarPosition;
  return (
    <section id="contact" className="contact">
      <div className="section_wrapper contact__content">
        <div className="section_title">
          <h2>Contact</h2>
        </div>
        <ContactForm setSnackbarOpen={setSnackbarOpen} />
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Message sent"
      />
    </section>
  );
}

export default Contact;
