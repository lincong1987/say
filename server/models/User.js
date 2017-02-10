/**
 * Created by jhh on 2017/1/19.
 */
var AV = require('../libs/lean')


// import { EventEmitter } from 'events'

class User extends EventEmitter{
  constructor(username = '',nickname='',password=null){
    super();
    this.username = username;
    this.nickname = nickname;
    if (password){
      const user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.set('nickname',nickname);
      //return
      // A promise that is fulfilled with the user when the signup completes.
      user.signUp()
        .then(loginedUser => {
          //暂时认为，this是指将被创建的对象
          this.object = loginedUser;
          //EventEmitter实例对象的emit方法，用来触发事件。
          this.emit(ready);
        })
        .catch(err => this.emit('error',err))
    }
  };
  plain(){
    return {
      username:this.username,
      nickname:this.nickname
    }
  };
  static login(username,password){
    return new Promise((resolve,reject) => {
      //return
      // A promise that is fulfilled with the user when the login completes.
      AV.User.logIn(username,password)
        //云上的loginedUser
        .then(loginedUser => {
          //因为登录时
          const user = new User(username,loginedUser.get('nickname'));
          user.object = loginedUser;
          resolve(user);
        })
        .catch(reject)
    })
  };
  static wrap(object){
    const username = object.get('username');
    const nickname = object.get('nickname');

    const user = new User(username.nickname);
    user.id = object.id;
    user.object = object;
    return user;
  }

}

module.export = User;
