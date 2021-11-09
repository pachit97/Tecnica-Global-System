const { Product } = require('../db.js');

const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.findAll();
		res.json(allProducts);
	}
	catch (e) {
		next(e)
	}

}

module.exports = getAllProducts;