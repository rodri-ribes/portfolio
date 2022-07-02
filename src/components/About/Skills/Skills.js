import style from './skills.module.css';

function Skills({logo, porcentaje, name}) {

    const styleBar = {
        width: `${porcentaje}%`,
    }

    return ( 
        <div className={style.ContainerSkills__Cards}>
            <div className={style.ContainerSkills__Cards_logo}>
                {logo} 
            </div>
            <div className={style.ContainerSkills__Cards_bar}>
                <div style={styleBar} className={style.ContainerSkills__Cards_barColor}><h1 className={style.ContainerSkills__Cards_Text}>{name}</h1></div>
                <h1 className={style.ContainerSkills__Cards_porcentaje}>{porcentaje}%</h1>
            </div>
        </div>
    );
}

export default Skills;