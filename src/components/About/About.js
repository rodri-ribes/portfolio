
import style from "./about.module.css"


/** Iconos de Features */
import { MdOutlineSpeed } from "react-icons/md"
import { BsFillPhoneFill } from "react-icons/bs"
import { IoRocketSharp } from "react-icons/io5"

/** Componentes de About */
import Features from "./Features/Features";
import Skills from "./Skills/Skills";

/** Iconos de Skills */

import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiAdobephotoshop } from "react-icons/si"
import { SiSequelize } from "react-icons/si"
import { SiWordpress } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io"




function About() {

    let FeaturesCard = [
        { Logo: <MdOutlineSpeed />, Title: "Fast", Text: "Fast load times and lag free interaction, my highest priority.", Animacion: 'zoom-in-left' },
        { Logo: <BsFillPhoneFill />, Title: "Responsive", Text: "My layouts will work on any device, big or small.", Animacion: 'zoom-in-up' },
        { Logo: <IoRocketSharp />, Title: "Dynamic", Text: "Websites don't have to be static, I love making pages come to life.", Animacion: 'zoom-in-right' }
    ]

    let SkillsCard = [
        { Logo: <SiHtml5 />, Porcentaje: 90, Name: 'HTML', Animacion: 'fade-left' },
        { Logo: <SiCss3 />, Porcentaje: 90, Name: 'CSS', Animacion: 'fade-right' },
        { Logo: <SiJavascript />, Porcentaje: 80, Name: 'JavaScript', Animacion: 'fade-left' },
        { Logo: <SiReact />, Porcentaje: 75, Name: 'React', Animacion: 'fade-right' },
        { Logo: <SiRedux />, Porcentaje: 65, Name: 'Redux', Animacion: 'fade-left' },
        { Logo: <IoLogoNodejs />, Porcentaje: 70, Name: 'Node', Animacion: 'fade-right' },
        { Logo: <SiExpress />, Porcentaje: 70, Name: 'Express', Animacion: 'fade-left' },
        { Logo: <SiSequelize />, Porcentaje: 70, Name: 'Sequelize', Animacion: 'fade-right' },
        { Logo: <SiPostgresql />, Porcentaje: 80, Name: 'PostgreSQL', Animacion: 'fade-left' },
        { Logo: <SiWordpress />, Porcentaje: 85, Name: 'Wordpress', Animacion: 'fade-right' },
        { Logo: <SiAdobephotoshop />, Porcentaje: 80, Name: 'PhotoShop', Animacion: 'fade-left' },
    ];


    return (
        <div className={style.Container}>
            <h1 className={style.Title} id="about" data-aos="fade-right">ABOUT</h1>
            <hr className={style.hrAbout} data-aos="fade-left" />

            <div className={style.ContainerAboutMe}>
                <div className={style.ContainerAboutMe__info}>
                    <img className={style.ContainerAboutMe__img} src="/img/perfil.jpg" alt="perfil" data-aos="flip-right" />
                    <p data-aos="fade-up">I am a Full-Stack Developer, I like the Back End and the Front End, but I stand out more in the Front End, I am passionate about the user interface, animations and the creation of intuitive and dynamic user experiences.</p>
                </div>

                <div className={style.ContainerSkills}>
                    {SkillsCard.map((e, i) => {
                        return (
                            <Skills
                                logo={e.Logo}
                                porcentaje={e.Porcentaje}
                                name={e.Name}
                                animated={e.Animacion}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>

            <div className={style.ContainerFeatures}>
                {FeaturesCard.map((e, i) => {
                    return (
                        <Features
                            logo={e.Logo}
                            text={e.Text}
                            title={e.Title}
                            animacion={e.Animacion}
                            key={i}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default About;