const express = require('express');
const { searchProducts } = require('../controllers/search.controller');

const router = express.Router();

router.get('/products/search', searchProducts);

module.exports = router;
