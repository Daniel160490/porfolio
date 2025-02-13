import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="flex-grow-1 d-flex justify-content-center pt-5">
          <div className="container text-center w-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobremi" element={<AboutMe />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/experiencia" element={<Experience />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

