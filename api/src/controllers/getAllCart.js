const { Cart, Product } = require("../db");

const getCart = async (req, res, next) => {
  try {
    const traigoCarrito = await Cart.findAll({
      include: [{ model: Product }],
      order: [["id", "ASC"]],
    });
    res.json(traigoCarrito);
  } catch (err) {
    next(err);
  }
};

module.exports = getCart;
