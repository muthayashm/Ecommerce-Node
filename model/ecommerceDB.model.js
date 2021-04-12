const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  Name: { type: String, required: true },
  Price: {  type:Number, required: true },
  Description: { type: String, required: true  }

}, {
  timestamps: true
})

module.exports = mongoose.model('product', Product);