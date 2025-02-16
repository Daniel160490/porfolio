import './Experience.css';
import SplashCursor from '../animations/splashCursor/SplashCursor';


const Experience = () => {

    return (
        <>
            <SplashCursor />
            <div className="box_component animacion_texto">
                <h1>Mi Experiencia</h1>
                <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">

                    <div className='container box_experiences'>
                        <span> 2020 - Actualidad</span>
                        <h2>
                            NTTDATA
                        </h2>
                        <h4>Desarrollador Full-Stack</h4>
                        <hr></hr>
                        <div className='container text-start'>
                            <p>
                                Incorporación al proyecto Santander One.
                                Realización de nuevos desarrollos, tareas de mantenimientos posteriores al
                                lanzamiento al despliegue del proyecto en oficinas del banco Santander.
                                <br></br>
                                Desarrollo de un nuevo proyecto para la gestión de los horarios de las
                                oficinas
                                del banco Santander.
                                <ul>
                                    <li>- Tareas de mantenimiento para diferentes proyectos de Santander.</li>
                                    <li>- Migraciones.</li>
                                    <li>- <strong>Lenguajes utilizados: </strong>Angular / Java / JavaScript / React</li>
                                </ul>
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>

                    <div className='container box_experiences'>
                        <span> 2018 - 2019</span>
                        <h2>
                            INDRA
                        </h2>
                        <h4>Desarrollador Front-End</h4>
                        <hr></hr>
                        <div className='container text-start'>
                            <p>
                                Incorporación al proyecto Novobanco, en el equipo de Front-end.
                                Realización de tareas de mantenimiento de los diferentes módulos de la
                                aplicación, así como de la realización de algún módulo nuevo.
                                - Lenguajes: AngularTS.
                                Agosto de 2019 – Incorporación al equipo de Terminal Financiero.
                                Realización de tareas de mantenimiento y creación de pantallas para el
                                terminal financiero, así como la utilización de Base de Datos con Oracle.
                                - Lenguajes: JavaScript - Programas: Eclipse, SVN
                            </p>
                        </div>
                    </div>

                    <div className='container box_experiences'>
                        <span> 2018</span>
                        <h2>
                            DESARROLLADOR EN PRÁCTICAS
                        </h2>
                        <h4>Escuela Andaluza de Salud Pública (Páracticas FP)</h4>
                        <h4>Desarrollador Full-Stack</h4>
                        <hr></hr>
                        <div className='container text-start'>
                            <p>
                                Proyecto web encargado de la edición y almacenamiento de las diferentes
                                encuestas realizadas por los empleados a sus alumnos en los cursos que
                                realizaban. Desarrollado en PHP con el framework Laravel.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Experience;
