const express = require('express');
const router = express.Router();

router.get('/agencies', function(req,res){});
router.get('/advertisers', function(req,res){});
router.get('/campaigns', function(req,res){});
router.post('/campaigns', function(req,res){});

module.exports = router;