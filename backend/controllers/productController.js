const router = require('express').Router()

const productModel = require('../models/productModel')

router.get('/', productModel.getAllProducts)
router.get('/:id', productModel.getProductById)

router.post('/create', productModel.createProduct)

router.put('/:id/update', productModel.updateProduct)

router.delete('/:id/delete', productModel.deleteProduct)

module.exports = router