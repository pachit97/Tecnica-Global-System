const { Product, Cart } = require("../db");

const sumaCantidad = async (req, res, next) => {
  const { id } = req.body;
  try {
    const busco = await Cart.findOne({ where: { Cart_product: id } });
    const guardo = busco.quantity + 1;
    await Cart.update({ quantity: guardo }, { where: { Cart_product: id } });
    var traigoTodos = await Cart.findAll({
      include: [{ model: Product }],
      order: [["id", "ASC"]],
    });
    res.json(traigoTodos);
  } catch (err) {
    next(err);
  }
};

module.exports = sumaCantidad;
