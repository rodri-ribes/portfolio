import style from './portfolio.module.css'

/** Components */
import Projects from './Projects/Projects';



function Portfolio() {

    const ProjectsCard = [
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
        {Title: "Pagina", Technology: "JavaScript, Node.Js", Img: "web01"},
    ]

    return ( 
        <div className={style.Container}>
            <h1 className={style.Title} id="portfolio">Portfolio</h1>
            <hr className={style.hrPortfolio}/>

            <div className={style.ContainerProjects}>
                {ProjectsCard.map((e,i) => {
                    return(
                        <Projects
                            title={e.Title}
                            technology={e.Technology}
                            img={e.Img}
                            key={i}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;