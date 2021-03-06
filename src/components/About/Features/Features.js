import style from "./features.module.css"

function Features({ logo, title, text, animacion }) {

    return (
        <div className={style.ContainerFeatures__Card} data-aos={animacion}>
            <div className={style.ContainerFeatures__Card_Icon}>
                {logo}
            </div>
            <h2 className={style.ContainerFeatures__Card_Title}>{title}</h2>
            <p className={style.ContainerFeatures__Card_Texto}>{text}</p>
        </div>
    )
}

export default Features; 