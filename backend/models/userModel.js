const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth')

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
  
    if ( !firstName || !lastName || !email || !password ) {
      return res.status(400).json({
        message: 'You need to enter all fields'
      })
    }
  
    const result = await User.exists({ email })
  
    if (result) {
      return res.status(400).json({
        message: 'This email address is already taken'
      })
    }
  
    const salt = bcrypt.genSaltSync(10)
  
    bcrypt.hash(password, salt, (error, hash) => {

      if (error) {
        return res.status(500).json({
          message: 'Error when encrypting password'
        })
      }
    
      User.create({ firstName, lastName, email, passwordHash: hash})
      .then(user => {
        res.status(201).json({
          token: auth.generateToken(user)
        })
      })

      })
  } catch (error) {
    res.status(500).json({
      message: 'Error when registering user'
    })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'You need to enter all fields'
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        message: 'Incorrect credentials'
      })
    }

    bcrypt.compare(password, user.passwordHash, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'Error when decrypting password'
        })
      }

      if (!result) {
        return res.status(401).json({
          message: 'Incorrect credentials'
        })
      }

      const token = auth.generateToken(user)
      // const displayName = user.firstName
      res.status(200).json({ token })
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when logging in'
    })
  }
}