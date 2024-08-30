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
          A frontend developer who works with ReactJs and also curious about
          blockchain technology!
        </p>
        <button onClick={()=>window.open("https://drive.google.com/file/d/1TCK-M-XG4e1Y6UT23i0IUIN_GhfrEraz/view?usp=sharing")}>Resume</button>
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
