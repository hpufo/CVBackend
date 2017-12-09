const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const agencies = require('./routes/agencies');
const advertisers = require('./routes/advertisers');
const campaigns = require('./routes/campaigns');

const app = express();    //Set up express app
const connectionString = process.env.MONGODB_URI || "mongodb://user:pass@ds133746.mlab.com:33746/heroku_g2wqg3vk";
const appPort = process.env.PORT || 4000;

//connect to mongodb
mongoose.connect(connectionString, {useMongoClient: true});
mongoose.Promise = global.Promise;    //Overwriting mongoose Promise with Node's

//Middlewares: code that runs inbetween the request and the response
//Set the COR header to allow cross domain
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});
app.use(bodyParser.json());   //Parse the body as json to the resquest object
//The routes from the route folder
app.use('/api',agencies);
app.use('/api',advertisers);
app.use('/api',campaigns);
//Error handleing for the routes
app.use((err,req,res,next) => {
  console.log(err);
  res.status(422)
  .send({error: err.message});
});

//listen for requests
app.listen(appPort, function(){
  console.log('Listening for requests on: '+appPort);
});