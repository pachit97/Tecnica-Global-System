const { Product, Cart } = require("../db");

const createProduct = async (req, res, next) => {
  var myAmount = 1;

  const { name, price, image } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      image,
      amount: 1,
    });

    return res.json("Product has created correctly");
  } catch (err) {
    next(err);
  }
};

module.exports = createProduct;
