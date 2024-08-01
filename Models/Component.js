const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  category: String,
  company: String,
  price: Number
});

module.exports = mongoose.model('Component', componentSchema);
