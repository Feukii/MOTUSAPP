const express = require('express')
const app = express()
const port = process.env.PORT || 4000
var fs = require('fs');


/** Decode Form URL Encoded data */
app.use(express.urlencoded());

 app.use(express.static('www'));


var ok =0;
var users= require('./model/users.json')
console.log(users)


 //signup
 
 app.post('/signup', (req, res)=> { 
    console.log("a")
    console.log(req.body)
    for(var i=0; i<users.length; i++) {
      if(req.body.username==users[i]["username"]) {
        ok=ok+1;
      }
    }

    if(ok==0) 
      {
          console.log("b")
          console.log(req.body)
      


          var data = fs.readFileSync("./model/users.json");
          var myObject = JSON.parse(data);
            
          myObject.push(req.body);
          var newData2 = JSON.stringify(myObject);
          fs.writeFile("./model/users.json", newData2, (err) => {
      
            if (err) throw err;
            console.log("New data added");
          });



        console.log("c")
        console.log(users)
          //fs.writeFileSync('./model/users.json', donnees)
        token = req.body.username;
        res.redirect('http://localhost:3000/callback?token='+token)

     }else
     {

      res.redirect('/signup.html')

    }


  
})






//login
var oklogin=0
 app.post('/login', (req, res)=> { 

  console.log("a")
  console.log(req.body)
  console.log(users.length)
  for(var i=0; i<users.length; i++) {
   
    if(req.body.username==users[i]["username"] && req.body.password==users[i]["password"]) 
    {
     oklogin=oklogin+1
      
  
    }

  }


  if(oklogin==0) {
    res.redirect('/login.html')

  }else {
    token = req.body.username;
      res.redirect('http://localhost:3000/callback?token='+token)

  }
  
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

