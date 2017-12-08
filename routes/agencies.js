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
router.post('/agencies', function(req,res,next){
  Agency.create(req.body)   //Creates a new instance of the agency and saves it
  .then((agency) => {
    res.send(agency);
  })
  .catch(next);
});
module.exports = router;