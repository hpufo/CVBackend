const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign');

const timezone = "T00:00:00.000Z";  //The API I am copying all had it's timezones as this
let response = {
  status: "ok",
  campaigns: null
};

router.get('/campaigns', function(req,res,next){
  if(req.query.advertiser_id){
    console.log(req.query.advertiser_id)

    Campaign.find({advertiser_id: req.query.advertiser_id}) //Eqiv to SELECT * FROM Campaign WHERE advertiser_id=req.query.advertiser_id
    .then((campaigns) => {
      response.campaigns = campaigns;
      res.send(response);
    })
    .catch(next);
  }
});
router.get('/campaigns/:_id', function(req,res,next){
  Campaign.findOne({_id: req.params._id})
  .then((campaign) => {
    response.campaigns = campaign;
    res.send(response);
  })
  .catch(next);
});
router.post('/campaigns', function(req,res,next){
  
});

module.exports = router;

function formatDate(date){
  let date = new Date(date).toISOString();
  date = date.substring(0,date.indexOf("T"))+timezone;  //Replacing the timezone of the date
  return date;
}