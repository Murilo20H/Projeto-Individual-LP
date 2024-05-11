var express = require("express");
var router = express.Router();

var dadosLinguagemController = require("../controllers/dadosLinguagemController");

router.get("/ultimas/:idUsuario", function (req, res) {
    dadosLinguagemController.buscarUltimosUsuarios(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    dadosLinguagemController.buscarMedidasDoUsuario(req, res);
})

module.exports = router;