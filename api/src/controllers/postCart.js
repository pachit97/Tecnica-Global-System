const {Cart, Product} = require('../db');

const postCart = async (req, res, next) => {
    
    const {id} = req.body;
    console.log("IDDD", id)
    try {      
        const [cart, wasCreated] = await Cart.findOrCreate({
            where: { 
              id: 1
            }
          })
       
    if(id){
     const traigo = await Product.findOne({where: id})
     await cart.addProduct(traigo)
     const carrito = await Cart.findOne({where: {id:1},include: [
      {model: Product}
    ],})
     res.json(carrito)
    }
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;