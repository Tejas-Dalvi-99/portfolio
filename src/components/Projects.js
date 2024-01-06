import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card circleBig"
      >
        <p>Work in Progress</p>
      </motion.div>

    </div>
  );
}

export default Projects;
