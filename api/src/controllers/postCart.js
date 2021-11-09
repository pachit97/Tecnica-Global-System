
const {Cart, Product} = require('../db');

const postCart = async (req, res, next) => {
    
    const {id} = req.body;
    console.log("IDDD", id)
    try {      
    if(id){
      const existe = await Cart.findOne({where:{Cart_product: id}})
        if(existe){
            const traigoCarrito = await Cart.findAll({
                include: [
                    { model: Product }
                  ],
                  order: [
                    ['id', 'ASC']
                ]
            })
           return res.json(traigoCarrito)
        }else{
          await Cart.create({
            Cart_product: id,
            include: [
             {model: Product}
           ]
        })
        const traigoCarrito2 = await Cart.findAll({
          include: [
              { model: Product }
            ],
            order: [
              ['id', 'ASC']
          ]
      })
     return res.json(traigoCarrito2)
      }
    }
    } catch (error) {
        next(error);     
    }
}
 
module.exports = postCart;