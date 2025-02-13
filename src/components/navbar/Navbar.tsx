import { Link } from "react-router-dom";
import "./Navbar.css";
import Arrow from '../arrow/Arrow'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100">
        <div className="container d-flex justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobremi">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiencia">Mi Experiencia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos">Mis Proyectos</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-3">
        <Arrow />
      </div>
    </>

  );
};

export default Navbar;
