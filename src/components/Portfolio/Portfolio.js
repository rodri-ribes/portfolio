import style from './portfolio.module.css'

/** Components */
import Projects from './Projects/Projects';


function Portfolio() {

    const ProjectsCard = [
        { Title: "Projects-App", Technology: "ReactJS, ReduxJS, NodeJS, Express, Sequelize, PostgreSQL, Encrypt, JWT", Img: "proyects", Animacion: 'flip-left', Link: "https://projects-ribes.netlify.app/" },
        { Title: "Countrys-App", Technology: "ReactJS, ReduxJS, Express, Postgresql, Sequelize", Img: "countrys", Animacion: 'flip-down', Link: "https://countrys-ribes.netlify.app/" },
        { Title: "Wheater-App", Technology: "ReactJS, ReduxJS", Img: "wheater", Animacion: 'flip-right', Link: "https://weather-ribes.netlify.app/" },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-left' },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-down' },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-right' },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-left' },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-down' },
        // { Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01", Animacion: 'flip-right' },
    ]

    return (
        <div className={style.Container}>
            <h1 className={style.Title} id="portfolio" data-aos="fade-right">Projects</h1>
            <hr className={style.hrPortfolio} data-aos="fade-left" />
            <div className={style.ContainerProjects}>
                {ProjectsCard.map((e, i) => {
                    return (
                        <Projects
                            title={e.Title}
                            technology={e.Technology}
                            img={e.Img}
                            key={i}
                            animacion={e.Animacion}
                            link={e.Link}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;