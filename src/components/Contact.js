import React, { useState , useRef } from "react";
import "./Contact.css";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function Contact() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const serviceID = process.env.REACT_APP_YOUR_SERVICE_ID ; 
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID ; 
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY ;

  function handleChangeName(e){
    setName(e.target.value)
  }
  function handleChangeEmail(e){
    setEmail(e.target.value)
  }
  function handleChangeMessage(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateId, form.current, publicKey)
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
    toast.success("Thank you for the Feeback !", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "coloured",
    });
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="contact"
      >
        <h1>Contact</h1>
        <form className="form" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            value={name}
            onChange={handleChangeName}
            className="noCircle field"
          />
          <input
            type="email"
            placeholder="example@email.com"
            name="user_email"
            value={email}
            onChange={handleChangeEmail}
            className="noCircle field"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={handleChangeMessage}
            className="message-box noCircle field"
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </motion.div>
      <ToastContainer transition={Flip} toastStyle={{ color: "black" }} />
    </>
  );
}

export default Contact;
