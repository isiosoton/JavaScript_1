const request = require('request');
/*
const { request } = require('express');
const express = require('express');
const express = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
*/

/*
app.post('/', function (req, res) {
  console.log(req.body);
  const messageId = req.body['events'][0]['message']['id'];
  console.log(messageId);  
  //console.log(req.body['events'][0]['message']['id']);
  //const data = req.body;
  //console.log("req.body",data);
  res.send('api: Hello World!');
});
*/

request.get("https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image", {encoding: null},function(error, response, body) {
  var buffer = new Buffer.from(body);
  console.log(buffer);
});

const options = {
  uri: "https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image",
  //method: 'get',
  headers: {
    "Content-Type": "application/octet-stream",
  },
  json: {
    "Prediction-Key": "45c6c20d2a9c4a6092deb74db83b8c9e"
  }
  //encoding: null
};

request.post(options, function(error, response, body){});
/*
request(options, function(error, response, body) {
const buffer = new Buffer.from(body);
console.log(buffer);
});
*/

//(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); //Vercell用

//test

/* //課題0 
app.get('/', function (req, res) {
  res.send('Hello World!');
}); */

/* //課題1
app.get('/', function (req, res) {
    var post = { name:"新鶴",height: 139,weight: 31 };
    res.json(post);
    // res.json({ name:"新鶴",height: 139,weight: 31 });
    //参考1：https://tech.chakapoko.com/nodejs/express/res-json.html
}); */

//課題2
/*app.get('/api/get', function (req, res) {
  var post = { name:"新鶴",height: 139,weight: 31 };
  res.json(post);
  //実行:http://localhost:3000/api/get
});*/

//課題3
/*
app.post('/', function (req, res) {
  //console.log(req.body);
  const data = req.body;
  console.log("req.body",data);
  //res.send('api/post': Hello world);
  res.send('api: Hello World!');
  //実行1:curl -X POST -H "Content-Type: application/json" -d '{"Name":"sensuikan1973", "Age":"100"}' localhost:3000/api/post
  //実行2:http://localhost:3000/api/post
});*/

/*
app.get('/', function (req, res) {  
  var api = new XMLHttpRequest();
    api.open('GET', 'https://jsonplaceholder.typicode.com/users/1' ,true);  
    api.requestType = 'json';
    api.onload = function() {
        // レスポンスが返ってきたときの処理
        var data = this.response;
        console.log(data);
    }
    api.send();
    
    var request = new XMLHttpRequest();
 
    request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.response;
      console.log(data);
    };
    //res.send();
    //参考2: https://techacademy.jp/magazine/19615
});
*/
