const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
router.get('/', (req, res, next) => {
    res.json({api: 'test'});
});

module.exports = router;