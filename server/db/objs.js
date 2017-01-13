/**
 * Created by jhh on 2017/1/10.
 */

module.exports = {
    user:{
      ///xxx是一个字符串，定义了属性，yyy是一个Schema.Type，定义了属性类型
        email:{type:String,required:true},
        nickname:{type:String,required:true},
        password:{type:String,required:true}
    }
}
