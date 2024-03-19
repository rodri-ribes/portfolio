import express from 'express'
import routes from './src/routes/routes';
import morgan from 'morgan'

import cors from 'cors'
const app = express();

app.use(express.json())
app.use(morgan("dev"))
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};

app.use(cors(corsOptions))

app.use("/", routes)

const PORT = 3000

app.listen(PORT, () => console.log(`server running...`))