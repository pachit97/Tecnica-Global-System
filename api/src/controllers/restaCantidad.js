const { Product, Cart } = require("../db");

const restaCantidad = async (req, res, next) => {
  const { id } = req.body;
  var cantidad = -1;
  try {
    const busco = await Cart.findOne({ where: { Cart_product: id } });
    const guardo = busco.quantity - 1;
    console.log("BUSCOOO", busco);
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

module.exports = restaCantidad;
