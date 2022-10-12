const express = require('express')
const app = express()
const path = require('path')
const sessionStorage = require('sessionstorage-for-nodejs');
var ls = require('local-storage');

const port = process.env.PORT || 3000
const port2 = 3001

app.use(express.static('www'));

var fs = require("fs")
text_francais = fs.readFileSync("data/liste_francais_utf8.txt", "utf8")
text = text_francais.toString().split('\r\n')



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     //to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       //to support JSON-encoded bodies
app.use(express.urlencoded()); 

var rand = ~~(Math.random()*text.length);
var rValue = text[rand];
console.log(rValue)


/*app.post('/test', function(req, res) {
  var mot = req.body.mot
  res.send(mot)
  console.log(mot)  
});
*/
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/mot' , function(req, res){
  //console.log(taille)
  res.send(rValue)
})

/*app.get('/', function(req, res) {
  res.render(__dirname + '/html/page.html')
})
*/

//app.engine('html', require('ejs').renderFile);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

