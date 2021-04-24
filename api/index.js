//宣言
const { request } = require('express');
const express = require('express');
//const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//LINEからVercel
app.post('/', function (req, res) {
  console.log(req.body);
  const messageId = req.body['events'][0]['message']['id'];
  console.log(messageId);
  res.send('api: Hello World!');
});

//モジュール
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); //Vercell用

//LINEからVercell
const options = {
  url: `https://api.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
  method: 'get',
  headers:{
    'Authorization': 'Bearer' + 'DpMVi4S6+PpktL5GhoppoXn76ERRf+Alfbz+Tl5MNb8dGJWB7ifs4fAE/n1Qksbuy9E4cjq4D9f6gI2w9bOyZ+53H7aHBxMdrVG5yTlm9a5iRiK6O5mX1xNbo2tR00VFhnx92fTpo0q+rPGUMGDDbAdB04t89/1O/w1cDnyilFU=',
  },
  encoding: null
};

//バイナリデータに変換
request(options, function(error, response, body){
  const buffer = new Buffer.from(body);
  console.log(buffer);
});

//VercelからCustom Vision
const options = {
  uri: "https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image",
  headers: {
    "Content-Type": "application/octet-stream",
  },
  json: {
    "Prediction-Key": "45c6c20d2a9c4a6092deb74db83b8c9e"
  }
};

//POSTへ実行
request.post(options, function(error, response, body){ });

/*
//宣言
//const { request } = require('express');
const express = require('express');
const request = require('request');
//const express = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//サーバーの立ち上げ
app.post('/', function (req, res) {
  console.log(req.body);
  const messageId = req.body['events'][0]['message']['id'];
  console.log(messageId);  
  //console.log(req.body['events'][0]['message']['id']);
  //const data = req.body;
  //console.log("req.body",data);
  res.send('api: Hello World!');
});

//画像をバイナリデータで取得
request.get("https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image", {encoding: null},function(error, response, body) {
  const buffer = new Buffer.from(body);
  console.log(buffer);
});

//VercelからPOSTで利用
const options = {
  uri: "https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image",
  method: 'GET',
  headers: {
    "Content-Type": "application/octet-stream",
  },
  json: {
    "Prediction-Key": "45c6c20d2a9c4a6092deb74db83b8c9e"
  },
  encoding: null
};

request.post(options, function(error, response, body){ });

request(options, function(error, response, body) {
const buffer = new Buffer.from(body);
console.log(buffer);
});


//モジュール
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); //Vercell用
*/