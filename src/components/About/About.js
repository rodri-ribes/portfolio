import style from "./about.module.css"

 /** Iconos de Features */
import {MdOutlineSpeed} from "react-icons/md"
import {BsFillPhoneFill} from "react-icons/bs"
import {IoRocketSharp} from "react-icons/io5"

/** Componentes de About */
import Features from "./Features/Features";
import Skills from "./Skills/Skills";

/** Iconos de Skills */

import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiRedux} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {SiAdobephotoshop} from "react-icons/si"
import {SiSequelize} from "react-icons/si"
import {SiWordpress} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"


function About() {
    
    let FeaturesCard =[
        {Logo: <MdOutlineSpeed/>, Title: "Fast", Text: "Fast load times and lag free interaction, my highest priority."},
        {Logo: <BsFillPhoneFill/>, Title: "Responsive", Text: "My layouts will work on any device, big or small."},
        {Logo: <IoRocketSharp/>, Title: "Dynamic", Text: "Websites don't have to be static, I love making pages come to life."}
    ]

    let SkillsCard = [
        {Logo: <SiHtml5/>, Porcentaje: 90, Name: 'HTML'},
        {Logo: <SiCss3/>, Porcentaje: 90, Name: 'CSS'},
        {Logo: <SiJavascript/>, Porcentaje: 80, Name: 'JavaScript'},
        {Logo: <SiReact/>, Porcentaje: 75, Name: 'React'},
        {Logo: <SiRedux/>, Porcentaje: 65, Name: 'Redux'},
        {Logo: <IoLogoNodejs/>, Porcentaje: 70, Name: 'Node'},
        {Logo: <SiExpress/>, Porcentaje: 70, Name: 'Express'},
        {Logo: <SiSequelize/>, Porcentaje: 70, Name: 'Sequelize'},
        {Logo: <SiWordpress/>, Porcentaje: 85, Name: 'Wordpress'},
        {Logo: <SiAdobephotoshop/>, Porcentaje: 80, Name: 'PhotoShop'},
    ]

    return (
        <div className={style.Container}>
            <h1 className={style.Title} id="about">ABOUT</h1>
            <hr className={style.hrAbout}/>

            <div className={style.ContainerAboutMe}>
                <div className={style.ContainerAboutMe__info}>
                    <img className={style.ContainerAboutMe__img} src="/img/perfil.jpg" alt="perfil"/>
                    <p>I'm a Full-Stack Developer, but I stand out more in the Front End, I am passionate about the user interface, animations and the creation of intuitive and dynamic user experiences.</p>
                </div>

                <div className={style.ContainerSkills}>
                    {SkillsCard.map((e, i)=> {
                        return(
                            <Skills
                                logo={e.Logo}
                                porcentaje={e.Porcentaje}
                                name={e.Name}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>

            <div className={style.ContainerFeatures}>
            {FeaturesCard.map((e, i)=>{
                return(
                    <Features
                        logo={e.Logo}
                        text={e.Text}
                        title={e.Title}
                        key={i}
                    />
                )
            })}
            </div>
        </div>
    );
}

export default About;