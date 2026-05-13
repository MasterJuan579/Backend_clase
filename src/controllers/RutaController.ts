import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { RutaModel } from "../modelsNOSQL/Ruta";

export default class RutaController extends AbstractController {
    //Singleton
    private static _instance: RutaController;
    public static get instance(): RutaController {
        return this._instance ||
            (this._instance = new this("Ruta"));
    }

    protected initRoutes(): void {
        this.router.get('/listarRutas',
            this.getListarRutas.bind(this));
        this.router.post('/crearRuta',
            this.postCrearRuta.bind(this));
    }

    private async getListarRutas(req: Request, res: Response): Promise<void> {
        try {
            const rutas = await RutaModel.find().sort({ createdAt: -1 });
            res.status(200).json(rutas);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearRuta(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await RutaModel.create(req.body);
            res.status(200).json({ message: "Registro de ruta exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
