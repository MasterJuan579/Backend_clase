import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

export default class AlumnoController extends AbstractController {
    // Singleton
    private static _instance: AlumnoController;
    public static get instance(): AlumnoController {
        return this._instance ||
            (this._instance = new this("Alumno"));
    }

    protected initRoutes(): void {
        this.router.get('/listarAlumnos',
            this.getListarAlumnos.bind(this));
        this.router.post('/crearAlumno',
            this.postCrearAlumno.bind(this));
    }

    private async getListarAlumnos(req: Request, res: Response): Promise<void> {
        try {
            const alumnos = await db.Alumno.findAll();
            res.status(200).json(alumnos);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearAlumno(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await db.Alumno.create(req.body);
            res.status(200).json({ message: "Registro de alumno exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}