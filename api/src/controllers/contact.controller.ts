import { Response, Request } from "express"
import { sendEmail } from "./sendEmail";
import dotenv from 'dotenv';
dotenv.config();

export const contact = (req: Request, res: Response) => {
    
    let {name, email, message } = req.body;
    
    const EMAIL = process.env.EMAIL as string

    if(name && email && message){

        let mail = {
            from: "",
            to: EMAIL,
            subject: "CONTACTO DEL PORTFOLIO",
            text: "",
            html: 
            `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <style>
                    .container{
                        display: flex;
                        flex-direction: column;
                        list-style: none;
                        gap: 1rem;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                </style>
                <body>
                    <ul class="container">
                        <li class="container__card">
                            <b>Nombre: </b>
                            <p>${name}</p>
                        </li>
                        <li class="container__card">
                            <b>Email: </b>
                            <p>${email}</p>
                        </li>
                        <li class="container__card">
                            <b>Mensaje: </b>
                            <p>${message}</p>
                        </li>
                    </ul>
                </body>
                </html>
            `
        }
        sendEmail(mail, res)
    }

}