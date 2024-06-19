const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const auth = require('../middleware/auth');

router.post('/', auth.verifyToken, productController.createProduct);
router.get('/', auth.verifyToken, productController.getProducts);
router.get('/:id', auth.verifyToken, productController.getProduct);
router.put('/:id', auth.verifyToken, productController.updateProduct);
router.delete('/:id', auth.verifyToken, productController.deleteProduct);

module.exports = router;
