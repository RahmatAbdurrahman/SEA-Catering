const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  category: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Menu', MenuSchema);
