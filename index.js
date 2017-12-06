const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
//Set up express app
const app = express();

//Middlewares: code that runs inbetween the request and the response
app.use(bodyParser.json());   //Parse the body as json to the resquest object
app.use('/api',routes);       //The routes from the route folder

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Listening for requests');
});