/*************************************************************************************
 * Description : This is a Node JS Backend Server exposing 2 microservices.
 *               1)/userdetails -> This GET API return static data for logged in User
 *               2)/login -> This POST api validates user and password
 * @author : Gauri Yadav
 *************************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //To parse the incoming JSON request
app.use(cors()) //Enabling Cross-Origin connectivity

//This service is returning static User data to frontend
app.get('/userdetails', (req, res) => {
  res.send({ 
      firstName : 'Gauri',
      lastName : 'Yadav',
      currentOrg : 'Standard Chartered',
      workExp : 3,
      paymentOptions : [{'id' : 1 , 'selected' : true , 'name' : 'Paytm'},{'id' : 2 ,'selected' : true , 'name' : 'Google Pay'},
      {'id' : 3 ,'selected' : false , 'name' : 'Netbanking'},{'id' : 4 ,'selected' : false , 'name' : 'UPI'}],
      designation : 'Lead Development Engineer',
      enableNotification : true
   });
});

//This service is used to validate user credentials and return appropriate staus and message
// Email address should be of domain @payme.com
// Password should be test@123 
app.post('/login', (req, res) => {
  if(req.body.email.indexOf('@payme.com') !== -1 && req.body.password === 'test@123'){
    res.send({
      msg : 'ValidUser'
      });
  }else{
    res.status(401).send({msg : 'Invalid User'})
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));