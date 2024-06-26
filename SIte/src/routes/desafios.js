var express = require("express");
var router = express.Router();

var desafiosController = require("../controllers/desafiosController");

router.get("/ranking", function (req, res) {
    desafiosController.verRanking(req, res);
})

router.put("/atualizar", function (req, res) {
    desafiosController.atualizar(req, res);
})

router.get("/verDadosUsuario/:linguagem/:idUsuario", function (req, res) {
    desafiosController.verDadosUsuario(req, res);
})

router.post("/cadastrar", function (req, res) {
    desafiosController.cadastrar(req, res);
})

router.post("/sql", function (req, res) {
    desafiosController.desafioSql(req, res);
})

module.exports = router;