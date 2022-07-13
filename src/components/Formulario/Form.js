import React, { useState } from 'react';
import axios from 'axios';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Container } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

const Form = () => {

    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [mensaje, cambiarMensaje] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[A-Za-z0-9\s]{8,100}$/
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (nombre.valido === 'true' && correo.valido === 'true' && mensaje.valido === 'true') {
            let { campo: name } = nombre
            let { campo: email } = correo
            let { campo: message } = mensaje
            try {
                console.log(name, email, message)
                // await axios.post("https://conservative-mountie-61739.herokuapp.com/send-email", {
                await axios.post("http://localhost:3002/send-email", {
                    name, email, message
                })
            } catch (error) {
                console.log(error);
            }

            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarMensaje({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }

    return (
        <Container>
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Name"
                    placeholder=""
                    name="Name"
                    leyendaError="The name is invalid."
                    expresionRegular={expresiones.nombre}
                    animacion="fade"
                />
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Email"
                    placeholder=""
                    name="Email"
                    leyendaError="The email is not valid."
                    expresionRegular={expresiones.correo}
                    animacion="fade"
                />

                <Input
                    estado={mensaje}
                    cambiarEstado={cambiarMensaje}
                    tipo="text"
                    label="Message"
                    placeholder=""
                    name="Message"
                    leyendaError="The message must have a minimum of 8 characters."
                    expresionRegular={expresiones.mensaje}
                    animacion="fade"
                />

                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Please fill in the form correctly.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit" data-aos="fade">Send</Boton>
                    {formularioValido === true && <MensajeExito>Successfully sent!</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </Container>
    );
}

export default Form;