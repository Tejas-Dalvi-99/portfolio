import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

// CREATE MOUSE FOLLOWER FOR THE PORTFOLIO
// CREATE MOUSE FOLLOWER FOR THE PORTFOLIO
// CREATE MOUSE FOLLOWER FOR THE PORTFOLIO
// CREATE MOUSE FOLLOWER FOR THE PORTFOLIO
// CREATE MOUSE FOLLOWER FOR THE PORTFOLIO

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar />
      <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
