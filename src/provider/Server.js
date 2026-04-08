"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
class Server {
    //Atributos de instancia
    app;
    port;
    env;
    //Método constructor
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.env = appInit.env;
        this.initMiddlewares(appInit.middlewares);
        this.initControllers(appInit.controllers);
        this.connecDB();
    }
    initMiddlewares(middlewares) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }
    initControllers(controllers) {
        //   http://IP:PORT/ 
        this.app.get('/', (req, res) => {
            res.send('Server is working 🚀');
        });
        controllers.forEach(controller => {
            this.app.use(controller);
        });
    }
    async connecDB() {
        //TO DO
    }
    init() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map