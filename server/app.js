/**
 * Created by jhh on 2017/1/11.
 */

const express = require('express');
const config = require ('../config/index');
const bodyParser = require('body-parser')
const connect = require('connect');
const AV = require('./libs/lean');
// const async = require('async');

const app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(connect(AV.Cloud.CookieSession({ secret: 'saysecret', maxAge: 3600000, fetchUser: true })))
// app.use(async());//不正确

const routes = require('./routes')(app)


module.exports = app.listen('9099', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening 9099....')
  // console.log('Listening at http://localhost:' + port + '\n')
})
