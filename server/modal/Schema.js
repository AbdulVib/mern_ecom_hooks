const mongoose = require('mongoose')
const shortid = require('shortid');

const schema =  mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  },
  count: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
})

const User = mongoose.model('ecom_one', schema)

module.exports = User