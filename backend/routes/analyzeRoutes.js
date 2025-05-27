const express = require('express');
const router = express.Router();
const { analyzeTopic } = require('../controllers/analyzeController');

router.post('/analyze', analyzeTopic);

module.exports = router;
