const express = require('express');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
