/**
 * Created by jhh on 2017/1/11.
 */
var express = require('express');
var config = require ('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var apiRoutes = express.Router();


app.use('/api', apiRoutes);

app.use(express.static('./dist'));




/*db*/
var MongoClient = require('mongodb').MongoClient;


// Connection URL
var url = 'mongodb://localhost:27017/say';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});



module.exports = app.listen('8081', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(1)
  // console.log('Listening at http://localhost:' + port + '\n')
})
