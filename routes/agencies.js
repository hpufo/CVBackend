const express = require('express');
const router = express.Router();
const Agency = require('../models/agency');

router.get('/agencies', function(req,res,next){
  Agency.find({})
  .then((agencies) => {
    let response = {
      status: "ok",
      agencies: agencies
    };
    res.send(response);
  })
  .catch(next);
});

module.exports = router;