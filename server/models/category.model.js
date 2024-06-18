const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
},{timestamps: true});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
