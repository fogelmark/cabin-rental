const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 7979

app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to DB'))
  .catch(err => console.log(err.message))