import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import coder from "../Images/working man.png";

function Home() {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, times: [0.1] }}
        className="introduction"
      >
        <h1 className="circleBig">Hey, I am Tejas</h1>
        <p className="circleBig">
          A Software Developer who is interested in trending technologoes.
        </p>
        <button onClick={()=>window.open("https://drive.google.com/file/d/12tOPBa0pt89E6bxV5kxp9q7ev-iUdad_/view?usp=sharing")}>Resume</button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, times: [0.1] }}
        className="coder-image"
      >
        <img src={coder} alt={coder}></img>
      </motion.div>
    </div>
  );
}

export default Home;
