<template>
    <div class="register">
      <imageheader></imageHeader>
      <div class="content">
        <input placeholder="username" v-model="username">
        <!--<span>{{usernameTip}}</span>-->
        <input placeholder="password" v-model="password">
        <!--<span>{{passwordTip}}</span>-->
        <input type="button" value="register" @click="register">
      </div>
      <router-view></router-view>

    </div>
</template>

<script type="text/ecmascript-6" >
  import imageheader from "components/image-header/imageheader";

  export default{
    data: function () {
      return {
        username: '',
        password: '',
        // usernameTip:'',
        // passwordTip:''
      }
    },
    methods: {
      register(){
        this.$http.post('http://localhost:9096/api/users/signup',
          {
            username: this.username,
            password: this.password
          }).then((response) => {
            response = response.body;
            if (response.errno == '1') {
              console.log('注册失败！');
            } else {
              console.log('注册成功！')
              this.$router.push('/main');
            }
        })
      }
    },
    components: {
      imageheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.register
  position fixed
  top:0
  left:0
  bottom:0
  width:100%
  background #fff
  .content
    width: 200px
    margin:0 auto
    text-align center
    input
      margin-top 45px
      width: 100%
      padding-bottom: 2px
      border-bottom 1px solid #a7a7a7
      font-weight:200
      outline none
      &:focus
        border-bottom 1px solid #E91E63
      &[type=button]
        width: 80%
        height: 35px
        line-height: 35px
        background #E91E63
        color #fff
        box-shadow 1px 1px 1px #a7a7a7
        border-radius 2px


</style>
