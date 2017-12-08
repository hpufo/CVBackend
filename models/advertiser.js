const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create advertiser schema and model
const AdvertiserSchema = new Schema({
  _id: {
    type: String,
    required: [true, "_id feild is required"]
  },
  agency_id: {
    type: String,
    required: [true, "agency_id feild is required"]
  },
  name: {
    type: String,
    required: [true, 'Name field is required']
  }
},{versionKey: false});

const Advertiser = mongoose.model('advertiser', AdvertiserSchema);

module.exports = Advertiser;