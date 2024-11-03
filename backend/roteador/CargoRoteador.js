const express = require("express");
const CargoMiddleware = require("../middleware/CargoMiddleware");
const CargoControle = require("../controle/CargoControle");

module.exports = class CargoRoteador {
    constructor() {
        this._router = express.Router();
        this._cargoMiddleware = new CargoMiddleware();
        this._controleCargo = new CargoControle();
    }

    criarRotasCargo = () => {

        this.router.post("/",
            this.cargoMiddleware.validar_nomeCargo,
            this.cargoMiddleware.validar_cargo_nao_existe,
            this.controleCargo.cargo_create_controle
        );

        this.router.get("/",
            this.controleCargo.cargo_realAll_controle
        );

        this.router.get("/:idCargo",
            this.controleCargo.cargo_realById_controle
        );


        this.router.put("/:idCargo",
            this.controleCargo.cargo_update_controle
        );

        this.router.delete("/:idCargo",
            this.controleCargo.cargo_delete_controle
        );

        return this.router;

    }

    get controleCargo() {
        return this._controleCargo;
    }

    set controleCargo(_controleCargo) {
        return this._controleCargo = _controleCargo;
    }

    get cargoMiddleware() {
        return this._cargoMiddleware;
    }

    set cargoMiddleware(_cargoMiddleware) {
        return this._cargoMiddleware = _cargoMiddleware;
    }

    get router() {
        return this._router;
    }

    set router(rounter) {
        return this._router = rounter;
    }

}