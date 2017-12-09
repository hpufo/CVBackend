const express = require('express');
const router = express.Router();
const Advertiser = require('../models/advertiser');

router.get('/advertisers', function(req,res,next){
  let response = {
    status: "ok",
    advertisers: null
  };
  let selector = {};
  //Checks to see is there are query params
  if(req.query._id){
    selector._id = req.query._id; 
  }
  if(req.query.agency_id){
    selector.agency_id = req.query.agency_id; 
  }
  //DB Call to get the results based on the selector
  Advertiser.find(selector)
  .then((advertisers) => {
    response.advertisers = advertisers
    res.send(response);
  })
  .catch(next);
});

module.exports = router;