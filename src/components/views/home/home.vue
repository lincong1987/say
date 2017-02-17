<template>
  <div class="home">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="hot">HOT</mt-tab-item>
      <mt-tab-item id="new">NEW</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="hot">
        <div class="content" ref="contentWrapper">
          <ul>
            <li v-for = "video in hotVideos" class="item">
              <div class="user">
                <img :src="video.user.avatar" class="avatar">
                <span class="username">{{video.user.username}}</span>
              </div>

              <div class="word">
                <span class="word-name">{{video.word.wordname}}</span>
                <span class="video-num">{{video.word.videosCount}}</span>
              </div>

              <div class="video">
                <video :src="video.url" ></video>
                <div class="thumb">
                  <div class="like">{{video.likeCount}}</div>
                  <div class="dislike">{{video.dislikeCount}}</div>
                </div>
                <div class="views">{{video.views}}</div>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="new">
        <div class="content" ref="contentWrapper1">
          <ul>
            <li v-for = "video in newVideos" class="item">

              <div class="user">
                <img :src="video.user.avatar" class="avatar">
                <span class="username">{{video.user.username}}</span>
              </div>

              <div class="word">
                <span class="word-name">{{video.word.wordname}}</span>
                <span class="video-num">{{video.word.videosCount}}</span>
              </div>

              <div class="video" >
                <video :src="video.url"></video>
                <div class="thumb">
                  <div class="like" @click="like">{{video.likeCount}}</div>
                  <div class="dislike">{{video.dislikeCount}}</div>
                </div>
                <div class="views">{{video.views}}</div>
              </div>

            </li>
          </ul>
        </div>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll";

  export default{
      data() {
        return {
          selected: '1',
          hotVideos:[],
          newVideos:[],
        };
      },
      methods:{
        like(){
          console.log(1)
          // this.video.likeCount ++;
        }
      },
      created(){
        this.$http.get('http://localhost:9096/api/videos/new').then((response)=>{
          response = response.body;
          this.hotVideos = response;
        });
        this.$http.get('http://localhost:9096/api/videos/new').then((response)=>{
          response = response.body;
          this.newVideos = response;
        });

      },
      mounted(){
        //更新DOM
        this.$nextTick(()=>{
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.contentWrapper,{
              click:true
            })
          }else{
            this.scroll.refresh();
          };
          if(!this.scroll1){
            this.scroll1 = new BScroll(this.$refs.contentWrapper1,{
              click:true
            })
          }else{
            this.scroll1.refresh();
          }
        })
      }


    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .circle
    width: 30px
    height 30px
    border-radius 50%
    background #000
    opacity 0.5
    position absolute
    color: #fff
    text-align center
  .home
    .content
      position fixed
      top: 86px
      bottom 50px
      width:100%
      overflow: hidden
      .item
        .user
          box-sizing border-box
          height: 50px
          padding 15px
          padding-top: 10px;
          .avatar
            vertical-align text-top
            margin-right 10px
            width: 35px
            height 35px
          .username
            font-size: 15px
            color: #E91E63
        .word
          box-sizing border-box
          height: 50px
          padding 15px
          background #E91E63
          overflow: hidden
          clear: both
          position relative
          .word-name
            color: #fff
            font-size 20px
          .video-num
            width: 45px
            height: 45px
            position absolute
            top: 3px
            right: 15px
            background-size 45px
            background url("https://image.flaticon.com/icons/svg/149/149101.svg") no-repeat
            text-align: center;
            line-height: 47px;
            color: #fff
        .video
          width:100%
          height 0
          padding-top  100%
          position relative
          background #FAFAFA
          video
            position absolute
            top 0
            left:0
          .thumb
            position absolute
            left: 15px
            top:50%
            .like
              @extend .circle
              top:0
              left:0
            .dislike
              @extend .circle
              top: 25px
              left:0
          .views
            position absolute
            top: 10px
            right: 15px
            color: #eaeaea


</style>
