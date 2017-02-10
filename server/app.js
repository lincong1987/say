/**
 * Created by jhh on 2017/1/11.
 */
const express = require('express');
const config = require ('../config/index');
const bodyParser = require('body-parser')
const connect = require('connect');
const AV = require('./libs/lean')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(connect(AV.Cloud.CookieSession({ secret: 'say', maxAge: 3600000, fetchUser: true })))

const routes = require('./routes')(app)

module.exports = app.listen('8081', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening 8081....')
  // console.log('Listening at http://localhost:' + port + '\n')
})
