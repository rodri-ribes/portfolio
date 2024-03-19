import express from "express";
import { contact } from "../controllers/contact.controller";

const router = express.Router()


router.get('/', (_req, res) => {
    res.status(200).send("Hola, que buscas ?")
})

router.post('/contact', contact)


export default router

