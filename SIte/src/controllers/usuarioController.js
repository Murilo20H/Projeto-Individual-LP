var usuarioModel = require("../models/usuarioModel");

function pegarDados(req, res) {
    var id = req.params.idUsuario;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        usuarioModel.pegarDados(id)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
                    var usuario = resultadoAutenticar[0];

                    res.json({
                        id: usuario.id,
                        nome: usuario.nome,
                        sobrenome: usuario.sobrenome,
                        email: usuario.email,
                        senha: usuario.senha
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao pegar os dados do usuario! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function atualizarCampo(req, res) {
    var id = req.params.idUsuario;
    var campo = req.body.campo;
    var novo = req.body.novo;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (campo == undefined) {
        res.status(400).send("Seu campo está undefined!");
    } else if (novo == undefined) {
        res.status(400).send("Seu novo está undefined!");
    } else {
        usuarioModel.atualizarCampo(id, campo, novo).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao atualizar os dados! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        var usuario = resultadoAutenticar[0];

                        res.json({
                            id: usuario.id,
                            email: usuario.email,
                            nome: usuario.nome,
                            senha: usuario.senha
                        });


                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(nome, sobrenome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    atualizarCampo,
    pegarDados,
    autenticar,
    cadastrar
}