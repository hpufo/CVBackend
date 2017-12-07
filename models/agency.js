const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create agency schema and model
const AngencySchema = new Schema({
  _id: {
    type: String,
    required: [true, "_id feild is required"]
  },
  name: {
    type: String,
    required: [true, 'Name field is required']
  }
});

const Agency = mongoose.model('agency', AngencySchema);

module.exports = Agency;