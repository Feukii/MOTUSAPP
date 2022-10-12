const express = require('express')
const app = express()
const port = process.env.PORT || 4000
/*
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

*/
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
//importing modules
const {Sequelize, DataTypes} = require('sequelize')


 // app.use(express.static('www')); 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'IqcPW3fAUG9H6n81UbArX9PyNaIRNbYC',
  issuerBaseURL: 'https://dev-nzstkv7c.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : res.redirect('http://localhost:3000'));
});
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

