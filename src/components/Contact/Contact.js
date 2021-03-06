import style from "./contact.module.css"

import Formulario from "./Formulario/Formulario";
import Redes from "./Redes";

function Contact() {


    return (
        <div className={style.Container}>
            <h1 className={style.Title} id="contact" data-aos="fade-right">CONTACT</h1>
            <hr className={style.hrContact} data-aos="fade-left" />
            <p className={style.Text} data-aos="fade">Do you have something to propose to me? Contact me!</p>
            <Formulario data-aos="fade" />
            <Redes />
        </div>
    );
}

export default Contact;