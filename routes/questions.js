const Joi = require('joi');
const express = require('express');
const router = express.Router();
const request = require('request');

// list of question categories
router.get('/categories', (req, res, next) => {
  request({
    uri: 'https://opentdb.com/api_category.php'
  }).pipe(res);
});

// all questions in the DB - total, pending, verified, rejected
router.get('/count', (req, res, next) => {
  request({
    uri: 'https://opentdb.com/api_count_global.php'
  }).pipe(res);
});

module.exports = router;
