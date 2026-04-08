"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AbstractController {
    //Atributos de instancia
    _router;
    _prefix;
    //Getters
    get router() {
        return this._router;
    }
    get prefix() {
        return this._prefix;
    }
    //Constructor
    constructor(_prefix) {
        this._prefix = _prefix;
        this._router = (0, express_1.Router)();
        this.initRoutes();
    }
}
exports.default = AbstractController;
//# sourceMappingURL=AbstractController.js.map