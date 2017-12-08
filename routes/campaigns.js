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
router.post('/campaigns/:_id', function(req,res,next){
  let startDate = formatDate(req.body.start_date);
  let endDate = formatDate(req.body.end_date);
  req.body.start_date = startDate;
  req.body.end_date = endDate;

  Campaign.findOneAndUpdate({_id: req.params._id}, req.body)
  .then((campaign) => {
    res.send(campaign)
  })
  .catch(next);
});

function formatDate(_date){
  let date = new Date(_date).toISOString();
  date = date.substring(0,date.indexOf("T"))+timezone;  //Replacing the timezone of the date
  return date;
}

module.exports = router;