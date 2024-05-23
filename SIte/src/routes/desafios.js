var express = require("express");
var router = express.Router();

var desafiosController = require("../controllers/desafiosController");

router.get("/ranking", function (req, res) {
    desafiosController.verRanking(req, res);
})

router.get("/atualizar/:linguagem/:idUsuario", function (req, res) {
    desafiosController.atualizar(req, res);
})

router.get("/verDadosUsuario/:linguagem/:idUsuario", function (req, res) {
    desafiosController.verDadosUsuario(req, res);
})

router.get("/cadastrar/:idUsuario", function (req, res) {
    desafiosController.cadastrar(req, res);
})

module.exports = router;