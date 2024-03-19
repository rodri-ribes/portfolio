import nodeMailer from 'nodemailer'
import { Response } from "express"
import dotenv from 'dotenv';
dotenv.config();

interface Props {
    mail: {
        from: string
        to: string
        subject: string
        text: string
        html: string
    }
    res: Response
}


export function sendEmail(mail: Props['mail'], res: Props['res']) {

    const PASSWORD = process.env.PASSWORD as string
    const USER = process.env.USER as string
    const transport = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: USER,
            pass: PASSWORD
        },
        tls: {
            rejectUnauthorized: false
          }
    })

    transport.sendMail(mail, (err) => {
        if(err){
            res.status(400).send({
                message: "Se produjo un error. Por favor, inténtalo de nuevo más tarde.",
                status: false
            })
        }else{
            res.status(200).send({
                message: "Enviado.",
                status: true
            })
        }
    })
}