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
      ><p className="circleBig">
        <span className="bold">🚀🎨 Hello World!</span> I'm Tejas, a versatile software developer specializing in
        frontend technologies like HTML, CSS, Javascript, and frameworks like React.js, Framer motion, material UI, etc. With a keen eye for design
        and a knack for crafting seamless user experiences, I bring ideas to
        life through clean and efficient code. Additionally, my journey extends
        into the realm of blockchain, adding a unique dimension to my skill set.
        Let's collaborate and turn your concepts into captivating digital
        solutions!
        </p>
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
