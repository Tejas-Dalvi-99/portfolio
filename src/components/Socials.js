import React from 'react'
import { motion } from "framer-motion";
import "./Socials.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




function Socials() {
    return (
      <div className="socials">
        <SocialBox icon={<FaGithub size={50} color="var(--social-icon-clr)" />} name={"Github"} link={"https://github.com/Tejas-Dalvi-99"}/>
        <SocialBox icon={<FaLinkedin size={50} color="#0a66c2" />} name={"Linkedin"} link={"https://linkedin.com/in/tejas-dalvi-3a094a1a4/"}/>
        <SocialBox icon={<FaSquareXTwitter size={50} color="var(--social-icon-clr)" />} name={"Twitter"} link={"https://twitter.com/TejaScript"}/>
        <SocialBox2  name={"Secured By Darshan Naik (CEH)"} link={"https://www.linkedin.com/in/darshan-naik-73b870204/"}/>
      </div>
    );
  }
  
  function SocialBox({ name, icon, link }) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="skill-card social-card"
        onClick={() => window.open(link)}
      >
        <div className="skill-logo">{icon}</div>
        <div className="skill-name">{name}</div>
      </motion.div>
    );
  }

  function SocialBox2({ name, icon, link }) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="skill-card2 social-card"
        onClick={() => window.open(link)}
      >
        <div className="skill-logo">{icon}</div>
        <div className="skill-name">{name}</div>
      </motion.div>
    );
  }
  
export default Socials