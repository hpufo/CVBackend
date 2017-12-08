const express = require('express');
const router = express.Router();
const Advertiser = require('../models/advertiser');

router.get('/advertisers', function(req,res,next){
  let response = {
    status: "ok",
    advertisers: null
  };
  //Checks to see is there are query params
  if(req.query._id){
    Advertiser.findOne({_id: req.query._id})
    .then((advertisers) => {
      response.advertisers = advertisers
      res.send(response);
    })
    .catch(next);
  }
  else if(req.query.agency_id){
    Advertiser.find({agency_id: req.query.agency_id})
    .then((advertisers) => {
      response.advertisers = advertisers
      res.send(response);
    })
    .catch(next);
  }
  else{
    Advertiser.find({})
    .then((advertisers) => {
      response.advertisers = advertisers
      res.send(response);
    })
    .catch(next);
  }
});

module.exports = router;