import React, { useState } from "react";
import "./Contact.css";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";


function Contact() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
            className="noCircle field"
          />
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={handleChangeEmail}
            className="noCircle field"
            required
          />
          <textarea
            placeholder="Message"
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
