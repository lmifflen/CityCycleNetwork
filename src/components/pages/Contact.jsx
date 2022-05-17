import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const showAlert = () => {
  alert("Message sent successfully");
}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(
        serviceId,
        templateID,
        form.current,
        publicKey,
      )
      .then(
        (result) => {
          e.target.reset()
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="formbackground">
      <div className="formimage">
        <div className="contactcontainer">
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <div className="contactus">Contact Us</div>
            <div className="touch">Let's get in touch</div>
            <div className="chatform">
              We're open for any suggestion or just to have a chat
            </div>
            <label className="labelform">Name</label>
            <input className="inputform" type="text" name="user_name" />
            <label className="labelform">Email</label>
            <input className="inputform" type="email" name="user_email" />
            <label className="labelform">Message</label>
            <textarea className="textareaform" name="message" />
            {/* <input className="inputformsubmit" type="submit" value="Send" /> */}
            <button className="inputformsubmit" type="submit" value="Send" onClick={showAlert}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
