import express from 'express'
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));