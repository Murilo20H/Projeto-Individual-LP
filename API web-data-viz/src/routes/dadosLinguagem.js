var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/dadosLinguagemController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimosUsuarios(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasDoUsuario(req, res);
})

module.exports = router;