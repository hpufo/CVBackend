const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create campaign schema and model
const CampaignSchema = new Schema({
  _id: {
    type: String,
    required: [true, "_id feild is required"]
  },
  advertiser_id:{
    type: String,
    required: [true, "advertiser_id feild is required"]
  },
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  status: {
    tpye: Boolean,
    required: [true, "status field is required"]
  },
  budget: {
    type: Number,
    required: [true,"budget field is required"]
  },
  start_date: {
    type: String,
    required: [true,"start_date field is required"]
  },
  end_date: {
    type: String,
    required: [true,"end_date field is required"]
  }
});

const Campaign = mongoose.model('campaign', CampaignSchema);

module.exports = Campaign;