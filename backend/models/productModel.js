const Product = require('../schemas/productSchema')
// const Rating = require('../schemas/ratingSchema')

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { name, desc, package, imageURL, price } = req.body

    if (!name || !desc || !package || !imageURL || !price) {
      return res.status(400).json({
        message: 'You need to enter all fields'
      })
    }

    const product = await Product.create({name, desc, package, imageURL, price})
    res.status(201).json({
      message: 'Product created successfully',
      product
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when creating product'
    })
  }
}

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find()
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({
      message: 'Error when fetching all products'
    })
  }
}

//GET PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({
      message: 'Error when getting product by ID'
    })
  }
}

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!product) {
      return res.status(404).json({
        message: 'Could not update that product'
      })
    }

    res.status(200).json({
      message: 'Product updated successfully',
      product: product
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when updating product'
    })
  }
}

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: 'Could not delete that product'
      })
    }

    res.status(200).json({
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when deleting product'
    })
  }
}