const { Router } = require('express');
const express = require('express');
const router = Router();


const postCart = require('../controllers/postCart');
const getAllCart = require("../controllers/getAllCart")

router.get("/", getAllCart)
router.post("/", postCart)


module.exports = router;