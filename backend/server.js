const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 7979;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log('Server is running on http://localhost:' + PORT);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });