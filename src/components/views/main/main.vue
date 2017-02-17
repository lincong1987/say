<template>
  <div class="main">
    <mt-header title="Say" slot="left">
      <router-link to="/search" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="home" @click.native="goTo('/main/home')">
        <i slot="icon" class="icon">&#xe600;</i>
        home
      </mt-tab-item>
      <mt-tab-item id="explore" @click.native="goTo('/main/explore')">
        <i slot="icon" class="icon">&#xe600;</i>
        explore
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="goTo('/main/me')">
        <i slot="icon" class="icon">&#xe600;</i>
        me
      </mt-tab-item>
    </mt-tabbar>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

export default{

  methods:{
    goTo:function (path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/iconfont.styl"

  .main
    position fixed
    left:0
    top:0
    bottom:0
    width:100%
    background #fff
    .mint-header
      background-color #e91e63
    .mint-header-title,.mintui-search
      font-size 20px
/*    .tabs
      display flex
      position: absolute
      top: 40px
      width:100%
      height 80px
      line-height: 80px;
      background-color #e91e63
      text-align center
      .tab-item
        flex:1
        .icon
          font-size 28px
          font-style normal
          font-family iconfont
        li
          display: block
          font-size: 14px
          color: rgba(255,255,255,0.5)
          &.router-link-active
            border-bottom 1px solid yellow
            color: #fff*/
    .mint-tabbar
      z-index:999


</style>
