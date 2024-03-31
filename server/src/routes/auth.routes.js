import express from 'express';
import { loginUserHandler, registerUserHandler } from '../controllers/auth.controllers.js';

const Router = express.Router();
Router.post("/", registerUserHandler);
Router.post("/login", loginUserHandler);

export default Router;