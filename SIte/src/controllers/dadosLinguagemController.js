var dadosLinguagemModel = require("../models/dadosLinguagemModel");

// SELECT
function buscarUltimosDados(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;
    var linguagem = req.params.linguagem;

    console.log(`Recuperando as ultimas ${limite_linhas} dados_linguagem`);

    dadosLinguagemModel.buscarUltimosDados(idUsuario, linguagem, limite_linhas).then(function (resultado) {
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


function buscarDadosDoUsuario(req, res) {

    var idUsuario = req.params.idUsuario;
    var linguagem = req.params.linguagem;

    console.log(`Recuperando medidas em tempo real`);

    dadosLinguagemModel.buscarDadosDoUsuario(idUsuario, linguagem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados do usuario.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMediaDados(req, res) {

    var linguagem = req.params.linguagem;

    console.log(`Recuperando medidas em tempo real`);

    dadosLinguagemModel.buscarMediaDados(linguagem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a média dos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





// INSERT E DELETE
function darNotas(req, res) {
    var id = req.body.idUsuario;
    var nota_aprecia = req.body.notaAprecia;
    var nota_dificuldade = req.body.notaDificuldade;
    var linguagem = req.body.linguagem;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (nota_aprecia == undefined) {
        res.status(400).send("Sua nota aprecia está undefined!");
    } else if (nota_dificuldade == undefined) {
        res.status(400).send("Sua nota dificuldade está undefined!");
    } else if (linguagem == undefined) {
        res.status(400).send("Linguagem está undefined!");
    } else {

        dadosLinguagemModel.darNotas(id, nota_aprecia, nota_dificuldade, linguagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar notas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagarNotas(req, res) {
    var id = req.body.idUsuario;

    dadosLinguagemModel.apagarNotas(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscarUltimosDados,
    buscarDadosDoUsuario,
    buscarMediaDados,
    darNotas,
    apagarNotas
}