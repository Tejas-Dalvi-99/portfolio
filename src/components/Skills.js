import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaAws,
  FaGithub,
  FaEthereum,
  FaBootstrap,
} from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="skills">
      <SkillBox icon={<FaReact size={50} color="#61DBFB" />} name={"ReactJs"} />
      <SkillBox icon={<FaHtml5 size={50} color="#e34c26" />} name={"HTML"} />
      <SkillBox icon={<FaCss3 size={50} color="#264de4" />} name={"CSS"} />
      <SkillBox
        icon={<IoLogoJavascript size={50} color="#F0DB4F" />}
        name={"Javascript"}
      />
      <SkillBox
        icon={<SiSolidity size={50} color="#8C8C8C" />}
        name={"Solidity"}
      />
      <SkillBox
        icon={<FaAws size={50} color="#FF9900" />}
        name={"Amazon Web Services"}
      />
      <SkillBox icon={<FaGithub size={50} color="#000" />} name={"Github"} />
      <SkillBox
        icon={<FaEthereum size={50} color="#A6BEDF" />}
        name={"Ethereum"}
      />
      <SkillBox icon={<SiMui size={50} color="#1769aa" />} name={"MUI"} />
      <SkillBox
        icon={<FaBootstrap size={50} color="#563d7c" />}
        name={"Bootstrap"}
      />
    </div>
  );
}

function SkillBox({ name, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="skill-card"
    >
      <div className="skill-logo">{icon}</div>
      <div className="skill-name">{name}</div>
    </motion.div>
  );
}

export default Skills;
