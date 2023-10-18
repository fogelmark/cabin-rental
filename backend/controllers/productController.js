const router = require('express').Router()

const productModel = require('../models/productModel')

router.get('/', productModel.getAllProducts)
router.get('/:id', productModel.getProductById)

router.post('/', productModel.createProduct)

router.put('/:id', productModel.updateProduct)
router.put('/rating/:id', productModel.addRating)

router.delete('/:id', productModel.deleteProduct)

module.exports = router