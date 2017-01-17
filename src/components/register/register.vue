<template>
    <div class="register">
      <imageheader></imageHeader>
      <div class="content">
        <input placeholder="nickname" v-model="nickname">
        <input placeholder="email" v-model="email">
        <input placeholder="password" v-model="password">
        <input type="button" value="register" @click="register">
      </div>
      <router-view></router-view>

    </div>
</template>

<script type="text/ecmascript-6" >
    import imageheader from "components/image-header/imageheader";

    export default{
      data :function () {
        return {
          nickname:'',
          email:'',
          password:''
        }
      },
      methods:{
        register(){
          this.$http.post('/api/users',
            {
              nickname:this.nickname,
              email:this.email,
              password:this.password
            }).then((response)=>{
            console.log(response.body)
          })
        }
      },
      components:{
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
