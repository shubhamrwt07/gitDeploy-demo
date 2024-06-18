import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Unsubscribe = () => {
  const form = useRef();
  const [show, setShow] = useState(true);
  const sendmailhandle = (e) => {
    setShow(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_roms7y9",
        "template_2szk3vu",
        form.current,
        "LI1foA_34kSGRtldB"
      )
      .then((response) => {
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <>
      <form ref={form} onSubmit={sendmailhandle}>
        {show ? (
          <div>
            <h4>To unsubscribe, click the button below.</h4>
            <p> Thanks!</p>
            <button type="submit">Unsubscribe</button>
          </div>
        ) : (
          <div>
            <h4>You've successfully unsubscribed!</h4>
          </div>
        )}
      </form>
    </>
  );
};

export default Unsubscribe;
