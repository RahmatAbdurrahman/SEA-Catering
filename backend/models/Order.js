const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
      quantity: Number
    }
  ],
  total: Number,
  status: { type: String, enum: ['pending', 'processing', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);