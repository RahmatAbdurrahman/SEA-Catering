const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAllMenus, createMenu, updateMenu, deleteMenu } = require('../controllers/menuController');

router.get('/', getAllMenus);
router.post('/', auth, createMenu);
router.put('/:id', auth, updateMenu);
router.delete('/:id', auth, deleteMenu);

module.exports = router;