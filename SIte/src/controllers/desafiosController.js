var desafiosModel = require("../models/desafiosModel");

function verRanking(req, res) {
    var limite_ranking = 10;

    console.log(`Recuperando as ultimas ${limite_ranking} pontuacoes do ranking`);

    desafiosModel.verRanking(limite_ranking).then(function (resultado) {
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


function atualizar(req, res) {
    var linguagem = req.body.linguagem;
    var id = req.body.idUsuario;
    
    if (!linguagem) {
        console.error("Parâmetro 'linguagem' não foi fornecido.");
        res.status(400).send("Parâmetro 'linguagem' não foi fornecido.");
        return;
    }

    console.log(`Recuperando medidas em tempo real`);

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (linguagem == undefined) {
        res.status(400).send("A linguagem está undefined!");
    } else {
        
        
        desafiosModel.atualizar(linguagem, id).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao atualizar os dados do usuario.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

    
}


function verDadosUsuario(req, res) {
    var id = req.params.idUsuario;
    var linguagem = req.params.linguagem;

    console.log(`Verificando a tabela de desafios do usuario`);

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (linguagem == undefined) {
        res.status(400).send("A linguagem está undefined!");
    } else {
        
        
        desafiosModel.verDadosUsuario(linguagem, id).then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }

        ).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os dados do usuario.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}


function cadastrar(req, res) {
    var id = req.body.idUsuario;

    console.log(`Cadastrando tabela de desafios do usuario`);

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        
        
        desafiosModel.cadastrar(id).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar a tabela desafios! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}



// DESAFIO SQL
function desafioSql(req, res) {
    var comando = req.body.comando;

    console.log(`Rodando o comando do desafio de SQL`);

    if (comando == undefined) {
        res.status(400).send("Seu comando está undefined!");
    } else {
        
        
        desafiosModel.desafioSql(comando).then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao rodar o comando do desafio de SQL! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    verRanking,
    atualizar,
    verDadosUsuario,
    cadastrar,
    desafioSql
}