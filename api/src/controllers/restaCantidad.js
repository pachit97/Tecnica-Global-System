
const {Product} = require('../db');

const restaCantidad = async (req, res, next) => {
    
    const {id} = req.body;
    console.log("IDDD", id)
    try {      
        const [cart] = await Cart.Create()
       
    if(id){
     const traigo = await Product.findOne({where: id})
     await cart.addProduct(traigo)
     const carrito = await Cart.findAll({include: [
      {model: Product}
    ],})
     res.json(carrito)
    }
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;