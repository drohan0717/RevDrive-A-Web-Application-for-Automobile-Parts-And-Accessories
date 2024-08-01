const mongoose = require('mongoose');

const userPurchaseSchema = new mongoose.Schema({
  components: String,
  balanceAmount: Number
});

module.exports = mongoose.model('Purchase', userPurchaseSchema);
