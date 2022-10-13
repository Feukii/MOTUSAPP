const express = require('express')
const app = express()
const port = process.env.PORT || 4000
var fs = require('fs');


/** Decode Form URL Encoded data */
app.use(express.urlencoded());



const users= require('./model/users.json')


 console.log(users)

 app.use(express.static('www'));
//login

 app.post('/login', (req, res)=> { 
  console.log("a")
  console.log(req.body)
  for(var i=0; i<users.length; i++) {

  
    if(req.body.username==users[i]["name"] && req.body.password==users[i]["password"]) {
      token = req.body.username;
      res.redirect('http://localhost:3000/callback?token='+token)
  
    }else{
      res.redirect('/login.html')
    }

  }
  
})


 //signup
 
 app.post('/signup', (req, res)=> { 
  console.log("a")
  console.log(req.body)
  for(var i=0; i<users.length; i++) {

  
    if(req.body.username=!users[i]["name"]) {
      token = req.body.username;
      res.redirect('http://localhost:3000/callback?token='+token)
  
    }else{
      res.redirect('/signup.html')
    }

  }
  
})

/*
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')


app.use(express.static('www'));
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
//importing modules
const {Sequelize, DataTypes} = require('sequelize')


 // app.use(express.static('www')); 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:4000',
  clientID: 'IqcPW3fAUG9H6n81UbArX9PyNaIRNbYC',
  issuerBaseURL: 'https://dev-nzstkv7c.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? res.redirect('http://localhost:3000') : res.redirect('login.html'));
});
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

*/




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

