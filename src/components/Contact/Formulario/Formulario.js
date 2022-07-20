import React, { useState } from 'react'
import style from './Formulario.module.css'
import axios from 'axios'

import { Formik, Field, ErrorMessage, Form } from 'formik';

export default function Formulario() {

    const [confirm, setConfirm] = useState({
        message: "",
        visible: null,
    })

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: "",
            }}
            onSubmit={async (valores, { resetForm }) => {
                let { name, email, message } = valores

                try {
                    // await axios.post("http://localhost:3002/send-email", {
                    await axios.post("https://conservative-mountie-61739.herokuapp.com/send-email", {
                        name, email, message
                    })
                } catch (error) {
                    console.log(error);
                }
                setConfirm({ message: "Successfully Sent", visible: true })
                setTimeout(() => {
                    setConfirm({ message: "", visible: null })
                }, 2000);
                resetForm()
            }}
            validate={(valores) => {
                let errores = {};

                if (!valores.name) {
                    errores.name = "Enter name"
                } else if (/^[a-zA-ZÀ-ÿ\s]{1,3}$/.test(valores.name)) {
                    errores.name = "Enter a minimum of 4 characters, they can only be letters and spaces"
                }
                if (!valores.email) {
                    errores.email = "Enter email"
                } else if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/.test(valores.email)) {
                    errores.email = "Enter a valid email"
                }
                if (!valores.message) {
                    errores.message = "Enter Message"
                } else if (valores.message.length < 5) {
                    errores.message = "Must be at least 5 characters"
                }

                return errores;
            }}
        >
            {({ errors }) => (

                <Form className={style.Container}>
                    <div className={style.Container__Div}>
                        <Field className={style.Container__Div_Input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <ErrorMessage name='name' component={() => (<div className={style.Container__Div_Error}><p>{errors.name}</p></div>)} />
                    </div>
                    <div className={style.Container__Div}>
                        <Field className={style.Container__Div_Input}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage name='email' component={() => (<div className={style.Container__Div_Error}><p>{errors.email}</p></div>)} />
                    </div>
                    <div className={style.Container__Div}>
                        <Field className={`${style.Container__Div_Input} ${style.Container__Div_Input_textarea}`}
                            as="textarea"
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Message"
                        />
                        <ErrorMessage name='message' component={() => (<div className={style.Container__Div_Error}><p>{errors.message}</p></div>)} />
                    </div>
                    <button type='submit' className={style.Container__Button}>Send</button>
                    {confirm ? <div className={style.Container__Div_Sucess}><p>{confirm.message}</p></div> : null}
                </Form>
            )}
        </Formik>
    )
}
