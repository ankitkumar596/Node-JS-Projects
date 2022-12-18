const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    uppercase: true,
    minLength: 3
  },
  lastname: {
    type: String,
    uppercase: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema);