import React from 'react'
import './redes.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Redes() {
    return (
        <div className="Container">
            <ul className="ContainerUl">
                <li>
                    <a href="https://github.com/rodri-ribes">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <span> <FaGithub /> Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rodrigo-ribes-9793b5207/">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <span> <FaLinkedin /> Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=+5492246517581&text=Hi%20Rodrigo,%20I%20have%20a%20proposal%20to%20offer%20you">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <span> <FaWhatsapp /> WhatsApp</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
