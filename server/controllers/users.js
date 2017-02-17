/**
 * Created by jhh on 2017/1/19.
 */
// var Host = require ('../models/User')
const AV = require('../libs/lean');

const  router = {
  get:{},
  post:{}
}
const defAvatar = new AV.File.withURL('defAvatar.svg', 'https://image.flaticon.com/icons/svg/145/145852.svg');
defAvatar.save();

router.post.signup = (req,res) => {
  let username = req.body.username;
  let password = req.body.password;

    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    user.set('avatar',defAvatar);

    user.save().then(
      user.signUp()
        .then(loginedUser => {
          // 保存当前用户到 Cookie
          //加上后，返回速度慢
          // res.saveCurrentUser(loginedUser);
          res.json({
            errno:0,
            loginedUser:loginedUser
          })
        },err=>{
          //202，用户已注册
          res.json({
            errno:1,
            err:err
          })
        })
    )
   };


router.post.login = (req,res) => {
  let username = req.body.username;
  let password = req.body.password;
  AV.User.logIn(username,password)
    .then(loginedUser => {
      // res.saveCurrentUser(loginedUser);
      res.json(AV.User.current())
    },err=>{
      // 211,用户名不存在
      // 210,密码错误
      res.json(err)
    })
}


module.exports = router;
