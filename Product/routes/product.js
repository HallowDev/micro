const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const auth = require('../middleware/auth');

router.post('/', auth.verifyToken, productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
