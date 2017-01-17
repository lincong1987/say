<template>
  <div class="login">
    <imageheader></imageHeader>
    <div class="content">
      <input placeholder="email" v-model="email">
      <input placeholder="password" v-model="password">
      <input type="button" value="login" @click="login">
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import imageheader from "components/image-header/imageheader";

  const ERR_OK = 0;

  export default{
    data :function () {
      return {
        email:'',
        password:''
      }
    },

    methods:{
       login() {
          this.$http.post('/api/user/login' ,{
            email:this.email,
            password:this.password
          }).then((response) => {
            response = response.body;
            if (response.errno === ERR_OK){
              console.log(response)
              this.$router.push({ name: 'main' });
            }
          });
      }

  },
    components:{
      imageheader
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    position fixed
    top:0
    left:0
    bottom:0
    width:100%
    background #fff
    .header
      position: absolute
      top:0
      left:0
      width:100%
    .content
      width: 200px
      margin:0 auto
      text-align center
      input
        margin-top 45px
        width: 100%
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
