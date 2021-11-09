const {Product, Cart} = require('../db');

const removeItem = async (req, res, next) => {
    const {id} = req.params   
    try{
        await Cart.destroy({where: {Cart_product: id}});
        var traigoTodos = await Cart.findAll({
            include: [
                {model: Product }
              ],
              order: [
                ['id', 'ASC']
            ]
        })
		res.json(traigoTodos);
    }
    catch(err){
        next(err);
    }
}
 
module.exports = removeItem;