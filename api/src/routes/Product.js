const { Router } = require("express");
const express = require("express");
const router = Router();
const { Cart, Products } = require("../db");

const createProduct = require("../controllers/createProduct");
const getAllProducts = require("../controllers/getAllProducts");

router.get("/", getAllProducts);
router.post("/", createProduct);

module.exports = router;
