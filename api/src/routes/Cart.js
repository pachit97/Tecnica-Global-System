const { Router } = require("express");
const express = require("express");
const router = Router();

const postCart = require("../controllers/postCart");
const getAllCart = require("../controllers/getAllCart");
const restaCantidad = require("../controllers/restaCantidad");
const sumaCantidad = require("../controllers/sumaCantidad");
const removeItem = require("../controllers/removeItem");

router.get("/", getAllCart);
router.get("/delete/:id", removeItem);
router.post("/", postCart);
router.put("/resta", restaCantidad);
router.put("/suma", sumaCantidad);

module.exports = router;
