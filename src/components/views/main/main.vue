<template>
  <div class="main">
    <mt-header fixed title="Say" slot="left">
      <router-link to="/search" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>
    <ul class="tabs">
        <router-link to="/main/home" class="tab-item" tag="li">
          <i class="icon home">&#xe600;</i>
        </router-link>
        <router-link to="/main/explore" class="tab-item" tag="li">
          <i class="icon explore">&#xe713;</i>
        </router-link>
        <router-link to="/main/notification" class="tab-item" tag="li">
          <i class="icon notification">&#xe709;</i>
        </router-link>
        <router-link to="/main/me" class="tab-item" tag="li">
          <i class="icon me">&#xe601;</i>
        </router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">

export default{
  components:{
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/iconfont.styl"

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
    .tabs
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
            color: #fff



</style>
