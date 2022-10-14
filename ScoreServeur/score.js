const express = require('express')
const app = express()
const port = 5000
var fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var scores= require('./model/score.json')
console.log(scores)
var present =0
app.get('/getScore', (req,res)=>{
 // console.log(req.body)
})
app.get('/setScore', (req,res)=>{

    //console.log(req.query.score)
    console.log(req.query)
     //update the score of a user present in the database
    
    for (i=0; i <scores.length;i++) {
        if(scores[i]["username"]== req.query.username) 
        {
            scores[i]["score"]=req.query.score
            present=present + 1
            console.log("b"+present)
        }
    }
    
    //add a new user and score in the database
    /*
    var data = fs.readFileSync("./model/score.json");
    var myObject = JSON.parse(data);
      
    myObject.push(req.query);
    var newData2 = JSON.stringify(myObject);
    */
    if(present == 0) {
        console.log("a")
       
        scores.push(req.query);
    
        
    }       
    
    
    // console.log(scores)

    //write file
    // fs.writeFileSync('./model/score.json', JSON.stringify(scores));
    fs.writeFile("./model/score.json", JSON.stringify(scores), (err) => {
          
        if (err) throw err;
        console.log("New data added");
    });


   
  
})

app.listen(port, () => {
  console.log(`le serveur score tourne sur le port ${port}`)
})
