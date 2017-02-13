<template>
  <div class="startup">
    <div class="header">
      <!--<img src="./header.png">-->
    </div>
    <div class="buttons">
      <router-link class="register" :class="{active:regActive}" to="/startup/register" >Register</router-link>
      <router-link class="login"  :class="{active:!regActive}"  to="/startup/login">Login</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
    export default{
      data(){
        return {
          regActive:true
        }
      },
      methods:{

      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.startup
  position fixed
  left:0
  top:0
  bottom:0
  width:100%
  background #fff
  .header
    width:100%
    height 70%

  .buttons
    position fixed
    left:0
    bottom 0
    width:100%
    height 140px
    color: #fff
    & > a
      display: block
      width: 100%
      height 50%
      background #fff
      color: #E91E63
      font-size 5em
      &.active
        background #E91E63
        color: #fff


</style>
