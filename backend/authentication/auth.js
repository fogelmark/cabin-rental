const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY

exports.generateToken = (user) => {
  return jwt.sign({ _id: user._id, displayName: user.firstName }, secretKey, { expiresIn: '1d'})
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    req.userData = jwt.verify(token, secretKey)
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Please login'
    })
  }
}