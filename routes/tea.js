const express = require("express");
const router = express.Router();
const teaController = require("../controllers/tea");

router.post("/tea", teaController.newTea);

module.exports = router;
