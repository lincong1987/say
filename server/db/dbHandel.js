/**
 * Created by jhh on 2017/1/10.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objs = require('./objs.js');

for (var item in objs) {
  //define a schema
  var schema = new Schema(objs[item]);
  // 将schema 发布为 model
  mongoose.model(item,schema)

}

var _getModel = function(type) {
  // 该Model已经发布，则可以直接通过名字索引到
    return mongoose.model(type);
}

module.exports = {
    getModel: function(type) {
        return _getModel(type);
    }
}
