const { Router } = require("express");
const router = Router();

const Cart = require("./Cart.js");
const Product = require("./Product.js");

router.use("/cart", Cart);
router.use("/product", Product);

module.exports = router;
