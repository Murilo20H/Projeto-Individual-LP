var express = require("express");
var router = express.Router();

var dadosLinguagemController = require("../controllers/dadosLinguagemController");

router.get("/dados/ultimos/:idUsuario/:linguagem", function (req, res) {
    dadosLinguagemController.buscarUltimosDados(req, res);
});

router.get("/dados/usuario/:idUsuario/:linguagem", function (req, res) {
    dadosLinguagemController.buscarDadosDoUsuario(req, res);
})

router.get("/dados/media/:linguagem", function (req, res) {
    dadosLinguagemController.buscarMediaDados(req, res);
})

router.post("/dados/criarNotas/:idUsuario/:notaAprecia/:notaDificuldade/:linguagem", function (req, res) {
    dadosLinguagemController.darNotas(req, res);
})

router.delete("/dados/apagarNotas/:idUsuario", function (req, res) {
    dadosLinguagemController.apagarNotas(req, res);
})

module.exports = router;