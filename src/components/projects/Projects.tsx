import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import './Projects.css';

const Projects = () => {

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="box_component mb-4">
        <h1>Mis Proyectos</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">

          {/* Project 1 */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
              <h5 className="card-title">GrumpiApp</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    <FaAngular size={20} color="#E9EDD5" />
                  </h6>
                </div>
                <div className="col">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    <FaNodeJs size={20} color="#E9EDD5" />
                  </h6>
                </div>
              </div>
              <p className="card-text animacion_texto">
                Mediante esta aplicación se pretende acercar la gamificación al mundo digital, para que sirva como apoyo o como elemento acompañante al proceso de enseñanza-aprendizaje.
              </p>
            </div>
            <div className="card-footer text-body-secondary">
              <button type="button" className="card-link" onClick={() => handleLinkClick("https://github.com/PandaGamingClassroom/grumpiStore")}>
                <FiGithub size={20} style={{ marginRight: "8px" }} />
                Github
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
              <h5 className="card-title">PrideRide</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    <FaAngular size={20} color="#E9EDD5" />
                  </h6>
                </div>
                <div className="col">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    <FaPython size={20} color="#E9EDD5" />
                  </h6>
                </div>
              </div>
              <p className="card-text animacion_texto">
                Aplicación que pretende hacer más fácil y seguro el momento de realizar un viaje. Especialmente enfocada para el colectivo LGTBI.
              </p>
            </div>
            <div className="card-footer text-body-secondary">
              <button type="button" className="card-link" onClick={() => handleLinkClick("https://github.com/JTomas88/PrideRide")}>
                <FiGithub size={20} style={{ marginRight: "8px" }} />
                Github
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
              <h5 className="card-title">SiennaCharts Bot</h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                <FaPython size={20} color="#E9EDD5" />
              </h6>
              <p className="card-text animacion_texto">
                Bot de Telegram diseñado para dar la bienvenida de forma personalizada a nuevos miembros que se unan a tu grupo.
              </p>
            </div>
            <div className="card-footer text-body-secondary">
              <button type="button" className="card-link" onClick={() => handleLinkClick("https://github.com/Daniel160490/SiennaChartsBot")}>
                <FiGithub size={20} style={{ marginRight: "8px" }} />
                Github
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
              <h5 className="card-title">Porfolio</h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                <FaReact size={20} color="#E9EDD5" />
              </h6>
              <p className="card-text animacion_texto">
                Currículum web creado para permitir tener más acceso a mi estado actual profesional.
              </p>
            </div>
            <div className="card-footer text-body-secondary">
              <button type="button" className="card-link" onClick={() => handleLinkClick("https://github.com/Daniel160490/Portfolio")}>
                <FiGithub size={20} style={{ marginRight: "8px" }} />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Projects;
