import Server from "./provider/Server";
import { PORT, NODE_ENV } from './config';
import express from 'express';
import cors from 'cors';

import ProyectoController from "./controllers/ProyectoController";
import AlumnoController from "./controllers/AlumnoController";



const server: Server = new Server({
    port: PORT,
    env: NODE_ENV,
    middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors()
    ],
    controllers: [
        ProyectoController.instance,
        AlumnoController.instance
    ]
});
server.init();