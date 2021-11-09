const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Cart = require('./Cart.js')
const Product = require('./Product.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/cart', Cart)
router.use('/product', Product)

module.exports = router;