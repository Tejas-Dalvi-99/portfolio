import { motion } from "framer-motion";
import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigateTo = useNavigate();

  return (
    <div className="nav" id="nav">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="logo"
      >
        <h1 className="">
          Port<span>folio.</span>
        </h1>
      </motion.div>
      <div
        className="nav-btn"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? (
          <CloseIcon sx={{ color: "#FE8D59" }} />
        ) : (
          <MenuIcon sx={{ color: "#FE8D59" }} />
        )}
      </div>
      <div className="page-links">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 2, times: [0.2] }}
              className="link noCircle"
              onClick={()=>navigateTo('/')}
            >
              Home
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 2, times: [0.3] }}
              className="link noCircle"
              onClick={()=>navigateTo('/projects')}
            >
              Projects
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 2, times: [0.4] }}
              className="link noCircle"
              onClick={()=>navigateTo('/skills')}
            >
              Skills
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 2, times: [0.5] }}
              className="link noCircle"
              onClick={()=>navigateTo('/contact')}
            >
              Contact
            </motion.div>
      </div>

      <div
      className={`hidden ${navOpen ? "secret" : ""}`}>
        <div className="link" onClick={()=>{setNavOpen(false); navigateTo('/')}}>Home</div>
        <div className="link" onClick={()=>{setNavOpen(false); navigateTo('/projects')}}>Projects</div>
        <div className="link" onClick={()=>{setNavOpen(false); navigateTo('/skills')}}>Skills</div>
        <div className="link" onClick={()=>{setNavOpen(false); navigateTo('/contact')}}>Contact</div>
      </div>

    </div>
  );
}

export default Navbar;
