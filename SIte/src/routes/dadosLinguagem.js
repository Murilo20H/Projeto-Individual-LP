var express = require("express");
var router = express.Router();

var dadosLinguagemController = require("../controllers/dadosLinguagemController");

router.get("/ultimos/:idUsuario/:linguagem", function (req, res) {
    dadosLinguagemController.buscarUltimosDados(req, res);
});

router.get("/usuario/:idUsuario/:linguagem", function (req, res) {
    dadosLinguagemController.buscarDadosDoUsuario(req, res);
})

router.get("/media/:linguagem", function (req, res) {
    dadosLinguagemController.buscarMediaDados(req, res);
})

router.post("/criarNotas/:idUsuario/:notaAprecia/:notaDificuldade/:linguagem", function (req, res) {
    dadosLinguagemController.darNotas(req, res);
})

router.delete("/apagarNotas/:idUsuario", function (req, res) {
    dadosLinguagemController.apagarNotas(req, res);
})

module.exports = router;