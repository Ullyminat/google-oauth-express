import express from 'express'
import { configDotenv } from 'dotenv'
import db_connect from './config/db_connect.mjs'
import cors from 'cors'
import router from './routes/index.mjs'
import {passport} from './config/passport.mjs'
import session from 'express-session';
import helmet from "helmet";

configDotenv();

db_connect(process.env.DB)
const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(router)
app.use(helmet())
app.use(cors({origin:'*'}))
app.listen(process.env.PORT)