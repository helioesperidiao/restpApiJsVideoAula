const Cargo = require("../modelo/Cargo");
const Funcionario = require("../modelo/Funcionario");

module.exports = class FuncionarioControle {

    funcionario_create_controle = async (request, response) => {
        console.log("FuncionarioControle.funcionario_create_controle()");

        const funcionario = new Funcionario();
        funcionario.nomeFuncionario = request.body.funcionario.nomeFuncionario;
        funcionario.email = request.body.funcionario.email;
        funcionario.senha = request.body.funcionario.senha;
        funcionario.recebeValeTransporte = request.body.funcionario.recebeValeTransporte;
        funcionario.cargo.idCargo = request.body.funcionario.idCargo;

        console.log("teste> " , funcionario.cargo.idCargo);

        const objResposta = {
            status: true,
            msg: "Cadastrado com sucesso",
        }
        const criou = await funcionario.create();
        if (criou === false) {
            objResposta.status = false;
            objResposta.msg = "Erro ao cadastrar";
            response.status(500).send(objResposta);

        } else {
            response.status(201).send(objResposta);
        }
    }


    funcionario_realAll_controle = async (request, response) => {
        console.log("FuncionarioControle.funcionario_realAll_controle()");
        const funcionario = new Funcionario();
        const objResposta = {
            status: true,
            msg: "Executado com sucesso",
            dados: await funcionario.readAll()
        }

        response.status(200).send(objResposta);
    }


    funcionario_realById_controle = async (request, response) => {
        console.log("FuncionarioControle.funcionario_realById_controle()");

        const funcionario = new Funcionario();

        funcionario.idFuncionario = request.params.idFuncionario;

        const objResposta = {
            status: true,
            msg: "Executado com sucesso",
            dados: await funcionario.readById()
        }

        response.status(200).send(objResposta);
    }


    funcionario_update_controle = async (request, response) => {
        console.log("FuncionarioControle.funcionario_update_controle()");

        const funcionario = new Funcionario();
        
        funcionario.idFuncionario = request.params.idFuncionario;

        funcionario.nomeFuncionario = request.body.funcionario.nomeFuncionario;
        funcionario.email = request.body.funcionario.email;
        funcionario.senha = request.body.funcionario.senha;
        funcionario.recebeValeTransporte = request.body.funcionario.recebeValeTransporte;
        funcionario.cargo.idCargo = request.body.funcionario.idCargo;
        console.log( funcionario.cargo.idCargo);



        const objResposta = {
            status: await funcionario.update(),
            msg: "Executado com sucesso",
        }

        response.status(200).send(objResposta);
    }



    funcionario_delete_controle = async (request, response) => {
        console.log("FuncionarioControle.funcionario_delete_controle()");

        const funcionario = new Funcionario();

        funcionario.idFuncionario = request.params.idFuncionario;

        const objResposta = {
            status: await funcionario.delete(),
            msg: "Executado com sucesso",
        }

        response.status(200).send(objResposta);
    }

}