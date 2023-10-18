const Product = require('../schemas/productSchema')
const Rating = require('../schemas/ratingSchema')

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

exports.addRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    if (!rating || isNaN(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: 'Invalid rating value. Rating must be between 1 and 5.'
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    // Calculate the new mean rating
    const sumOfRatings = product.ratings.reduce((acc, rating) => acc + rating.sumOfRatings, 0);
    const totalCount = product.ratings.reduce((acc, rating) => acc + rating.totalCount, 0);

    // Calculate the new mean rating including the new rating being added
    const newMeanRating = Math.round((sumOfRatings + rating) / (totalCount + 1));

    // If ratings array is empty, add the first rating object
    if (product.ratings.length === 0) {
      product.ratings.push({
        sumOfRatings: rating,
        totalCount: 1,
        meanRating: newMeanRating
      });
    } else {
      // If ratings array has elements, update the latest rating object
      const latestRating = product.ratings[product.ratings.length - 1];
      latestRating.sumOfRatings += rating;
      latestRating.totalCount += 1;
      latestRating.meanRating = newMeanRating;
    }



    await product.save(); // Save the updated product

    res.status(200).json({
      message: 'Product rating updated successfully',
      product: product.ratings
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error when updating product rating'
    });
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