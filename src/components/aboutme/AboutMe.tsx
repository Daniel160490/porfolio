import img from '../../assets/img/20240401_025930.jpg';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="text-content">
        <p>
          Hola, soy Daniel, desarrollador de aplicaciones multiplataforma con experiencia desde 2019.
          A lo largo de mi carrera, he desarrollado un aprecio por mi trabajo y una habilidad para gestionar proyectos de manera autónoma. 
          Aunque he demostrado ser eficiente trabajando solo, también disfruto colaborar en equipo cuando es necesario.
          Mi enfoque en la gestión del tiempo y la organización de tareas me permite cumplir con los plazos y garantizar la calidad de cada proyecto. 
          Me considero una persona competente y trabajadora, siempre comprometida con la excelencia y la mejora continua en mi campo.
        </p>
      </div>
      
      <div className="image-container">
        <img src={img} className="profile-img" alt="About Me" />
      </div>
    </div>
  );
};

export default AboutMe;
