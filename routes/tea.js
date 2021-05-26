const express = require("express");
const router = express.Router();
const teaController = require("../controllers/tea");

// Post new tea
router.post("/tea", teaController.uploadImg, teaController.newTea);

// Get all tea
router.get("/tea", teaController.getAllTea);

// Delete all tea
router.delete("/tea", teaController.deleteAllTea);

// Get specific tea
router.get("/tea/:name", teaController.getTea);

// Post comment on tea
router.post("/tea/:name", teaController.teaComment);

// Delete specific tea
router.delete("/tea/:name", teaController.deleteTea);

module.exports = router;
