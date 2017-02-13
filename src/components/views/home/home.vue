<template>
  <div class="home">
    <ul class="navs">
      <li class="nav-item">
         FOLLOW
      </li>
      <li  class="nav-item">
        HOT
      </li>
      <li  class="nav-item">
        NEW
      </li>
    </ul>
    <div class="content">
      <ul>
        <li v-for = "worditem in words" class="item">
          <div class="user">
            <img :src="worditem.avatar" class="avatar">
            <span class="username">{{worditem.username}}</span>
          </div>
          <div class="wrd">
            <span class="wrd-name">{{worditem.wrdName}}</span>
            <span class="video-num">{{worditem.videoNum}}</span>
          </div>
          <div class="video">
            <div class="content">

            </div>
            <div class="thumb">
              <div class="like">{{worditem.like}}</div>
              <div class="like">{{worditem.dislike}}</div>
            </div>
            <div class="info">
              <span class="favorite">{{worditem.favoCount}}</span>
              <span class="comments">{{worditem.commentCount}}</span>
              <span class="share">{{worditem.shareCount}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{

    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
  position absolute
  top: 120px
  width:100%
  .navs
    display: flex
    width:80%
    height 50px
    line-height: 50px;
    margin: 10px auto
    background #fff
    box-shadow 2px 2px 5px rgba(0,0,0,0.35)
    .nav-item
      flex: 1
      text-align center
      color: #E91E63

</style>
