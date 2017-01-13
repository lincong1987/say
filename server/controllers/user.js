/**
 * Created by jhh on 2017/1/10.
 */

var md5  = require('md5');
var dbHandel = require('../db/dbHandel.js');
module.exports = {
  login: function (req, res) {
    let obj = req.body;
    console.log(obj)
    let userModel = dbHandel.getModel('user');
    userModel.find({'email':obj.email}).exec(function (err, doc) {
      if (doc == ''){
        // let resData = {
        //     errno : 1,
        //     msg:'用户不存在！',
        //     data:{
        //         target:'usernmae'
        //     }
        // };
        res.json({
          errno : 1,
          msg:'用户不存在！',
          data:{
            target:'email'
          }
        })
        // res.send(resData);
      }else{
        // req.session.isLogin = 1;
        // req.session.username = obj.username;
        // if (obj.noneedPassword == 'true') {
        //     req.session.noneedPassword = 1;
        //     res.cookie('isLogin', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7) });
        // } else {
        //     req.session.noneedPassword = 0;
        //     res.cookie('isLogin', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 2) });
        // }

        if (doc[0].password == md5(obj.password)){
          res.json({
            errno:0,
            msg:'登陆成功',
            data:obj
          });
        }else{
          res.json({
            errno:1,
            msg:'密码错误！',
            data:{
              target:'password'
            }
          })

        }

      }
    })

  },
  register:function (req, res) {
    let obj = req.body;
    let userModel = dbHandel.getModel('user');
    // 查询需要依赖Model
    userModel.find({'email':obj.email}).exec(function (err, doc) {
      if (doc !=''){
        res.json({
          errno:1,
          msg:'用户已存在！',
          data:{
            target:'email'
          }
        })
      }else{
        //新增，如果是Model，用create；如果是Entity，用save
        userModel.create({
          nickname:obj.nickname,
          email:obj.email,
          password:md5(obj.password)
        },function (err, doc) {
          if (err){
            res.json({
              errno:1,
              msg:err,
              data:''
            });

          }else {
            res.json({
              errno:0,
              msg:"注册成功！",
              data:obj
            });
          }
        })
      }
    })
  },
  // logout:function (req, res) {
  //   // req.session.isLogin = 0;
  //   // req.session.username = null;
  //   // res.cookie('isLogin', 0, { expires: 0});
  //
  //   res.json({
  //     errno: 0,
  //     msg: '注销成功！',
  //     data: ''
  //   })
  // }
}


