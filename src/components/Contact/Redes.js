import React from 'react'
import './redes.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Redes() {
    return (
        <div className="Container">
            <ul className="ContainerUl">
                <li>
                    <a href="https://github.com/rodri-ribes" target="_blank" rel="noreferrer">
                        <i></i>
                        <span> <FaGithub /> Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rodrigo-ribes/" target="_blank" rel="noreferrer">
                        <i></i>
                        <span> <FaLinkedin /> Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=+5492246517581&text=Hi%20Rodrigo,%20I%20have%20a%20proposal%20to%20offer%20you" target="_blank" rel="noreferrer">
                        <i></i>
                        <span> <FaWhatsapp /> WhatsApp</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
