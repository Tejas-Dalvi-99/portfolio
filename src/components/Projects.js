import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import blockhare from '../Images/blockshare.png'
import donation from '../Images/blue sky donation.png'
import certificate from '../Images/certificates.png'
import todo from '../Images/cheemdiya list.png'
import complaint from '../Images/complaint chain.png'
import research from '../Images/research tool.png'
import ghoEco from '../Images/gho eco cover image.png'
import Partsign from '../Images/partsign1.png'

function Projects() {
  return (
    <div className="projects">
      <ProjectCard name={"PartSign"} img={Partsign} link={"https://partsign.netlify.app/"} description={"This project solves the problem of computer parts scalping by using the sign protocol attestation service."}/>
      <ProjectCard name={"Gho-Eco"} img={ghoEco} link={"http://ghoeco.netlify.app/"} description={"Gho-Eco is a platform where we invite organizations from across the globe to showcase their eco-friendly initiatives. The best entries get rewarded with GHO Tokens as an appreciation"}/>
      <ProjectCard name={"Certificates Page"} img={certificate} link={"https://tejascertificates.netlify.app/"} description={"A full stack application where all of my certificates are displayed. Created an API from where i can upload new certificates. The certificates are stored in mongodb in base64 format and are fetched from the api and displayed on frontend"}/>
      <ProjectCard name={"Complaint Chain"} img={complaint} link={"http://complaintchain.tech/"} description={"Blockchain based Anonymous Complaining app where users can send complaints anonymously. The complaints are viewed by the respective authorities on the admin page. The admins can login through NFT Gating mechanism to access the admin page. (Note:- please install metamask wallet browser extension before using the project)"}/>
      <ProjectCard name={"Cheemdiya List"} img={todo} link={"https://cheemdiyalist.netlify.app/"} description={"A To-Do list app"}/>
      <ProjectCard name={"BlueSky Donation"} img={donation} link={"https://cheemdiya.netlify.app/"} description={"Blockchain based platform for NGOs to receive donations in the form of cryptocurrency. The list of donors is displayed on the home page so that others get motivated. (Note:- please install metamask wallet browser extension before using the project)"}/>
      <ProjectCard name={"BlockShare"} img={blockhare} link={"https://blockshare2-1a8859.spheron.app/"} description={"Blockchain based image sharing platform. Share your files from anywhere in the world to everywhere in the world using Blockchain (Note:- please install metamask wallet browser extension before using the project)"}/>
      <ProjectCard name={"API Based Search Tool"} img={research} link={"https://indegenous99.netlify.app/"} description={"A tool where users can enter some keywords and get the research papers related to that keywords."}/>
    </div>
  );
}


function ProjectCard({name , description , link , img}){
  return(
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="project-card dotBig"
        onClick={()=>{window.open(link)}}
      >
        <div className="project-img">
          <img src={img} alt=""></img>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
      </motion.div>
  )
}


export default Projects;
