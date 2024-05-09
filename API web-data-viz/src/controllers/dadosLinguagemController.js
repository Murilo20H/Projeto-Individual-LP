var dadosLinguagemModel = require("../models/dadosLinguagemModel");

function buscarUltimosDados(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} dados_linguagem`);

    dadosLinguagemModel.buscarUltimosDados(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarDadosDeUsuarios(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    dadosLinguagemModel.buscarDadosDeUsuarios(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosDados,
    buscarDadosDeUsuarios
}