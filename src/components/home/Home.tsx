import "./Home.css";
import { IoDownloadOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/CURRICULUM2025.pdf";
    link.download = "CURRICULUM2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container main">
      <div className="text-container">
        <h2 className="animacion_texto">¡Hola! Me llamo</h2>
        <h1 className="name-title animacion_texto">Daniel García Díaz</h1>
        <h3 className="role-title animacion_texto">DEVELOPER | FULL-STACK</h3>
      </div>
      <div className="button-container">
        <button onClick={() => handleLinkClick("https://www.linkedin.com/in/daniel-garc%C3%ADa-d%C3%ADaz-0a970862/")}>
          <CiLinkedin size={30} /> Linkedin
        </button>
        <button onClick={() => handleLinkClick("https://github.com/Daniel160490")}>
          <FiGithub size={30} /> Github
        </button>
        <button onClick={handleDownloadCV}>
          <IoDownloadOutline size={30} /> C.V.
        </button>
        <button>
          <MdOutlineEmail size={30} />
          <a href="mailto:danigd71@gmail.com">Correo</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
