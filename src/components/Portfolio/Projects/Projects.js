import style from './projects.module.css'


function Projects({ title, technology, img, animacion, link }) {

    const background = {
        backgroundImage: `url(/img/Projects/${img}.png)`,
        backgroundSize: "cover"
    }
    return (
        <div style={background} className={style.ContainerProjects__Cards} data-aos={animacion}>
            <div className={style.ContainerProjects__Cards_White}>
                <h1 className={style.ContainerProjects__Cards_Title}>{title}</h1>
                <h3 className={style.ContainerProjects__Cards_Tecno}>{technology}</h3>
                <a className={style.ContainerProjects__Cards_Link} href={link} target="_blank" rel="noreferrer">Ver {title}</a>
            </div>
        </div>
    );
}

export default Projects;