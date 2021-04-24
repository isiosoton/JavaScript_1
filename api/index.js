//宣言
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//LINEからVercel
app.post('/', function (req, res) {
  const messageId = req.body['events'][0]['message']['id'];
  console.log(messageId);
  res.send('api: Hello World!');

  //LINEからVercell
  const options = {
    uri: 'https://api.line.me/v2/bot/message/${req.body.events[0].message.id}/content',
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
    
    //VercelからCustom Vision
    const options = {
      uri: "https://panama.cognitiveservices.azure.com/customvision/v3.0/Prediction/827c13e4-0a7e-406d-9748-9c92e3b6ac3d/classify/iterations/Iteration1/image",
      method: 'post',
      headers: {
        "Content-Type": "application/octet-stream",
        "Prediction-Key": "45c6c20d2a9c4a6092deb74db83b8c9e"
      },
      body: buffer
    };

    //POSTへ実行
    request.post(options, function(error, response, body){
      console.log(body);
    });
  });
});

//モジュール
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); //Vercell用