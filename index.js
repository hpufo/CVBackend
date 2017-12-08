const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const agencies = require('./routes/agencies');
const advertisers = require('./routes/advertisers');
const campaigns = require('./routes/campaigns');
//Set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/MediaMath');
mongoose.Promise = global.Promise;    //Overriting mongoose Promise with Node's

//Middlewares: code that runs inbetween the request and the response
app.use(bodyParser.json());   //Parse the body as json to the resquest object
app.use('/api',agencies);         //The routes from the route folder
app.use('/api',advertisers);
app.use('/api',campaigns);
app.use((err,req,res,next) => {   //Error handleing
  console.log(err);
  res.status(422)
  .send({error: err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Listening for requests');
});