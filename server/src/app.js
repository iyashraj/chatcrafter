import express from 'express'
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json({limit: "16kb"}))    // for reading JSON
app.use(express.urlencoded({extended: true, limit: "16kb"}))    // for reading query data from URL
app.use(express.static("public"))   // for storing any images/document/etcs.
app.use(cookieParser()) // for read & write cookies
export { app };