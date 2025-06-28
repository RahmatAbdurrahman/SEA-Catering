const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getOrders, createOrder } = require('../controllers/orderController');

router.get('/', auth, getOrders);
router.post('/', auth, createOrder);

module.exports = router;