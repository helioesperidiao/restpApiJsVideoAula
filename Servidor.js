const express = require("express");
const CargoRoteador = require("./backend/roteador/CargoRoteador");
const FuncionarioRoteador = require("./backend/roteador/FuncionarioRoteador");

module.exports = class Servidor {
    constructor() {
        this._porta = 8080;
        this._app = express();

        this._app.use(express.json());
        this._app.use(express.static('frontend'));

        this._cargoRoteador = new CargoRoteador();
        this._funcionarioRoteador = new FuncionarioRoteador();

        this.configurarRotas();

    }

    configurarRotas = () => {
        this._app.use("/cargos", this._cargoRoteador.criarRotasCargo());
        this._app.use("/funcionarios",this._funcionarioRoteador.criarRotasFuncionario());
    }

    iniciar = () => {
        this._app.listen(this._porta, () => {
            console.log("Api Rodando em http://localhost:" + this._porta + "/");
        })
    }


}