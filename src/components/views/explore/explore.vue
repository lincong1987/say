<template>
<div class="explore" ref="listWrapper">
  <ul>
    <li v-for="(word,index) in words" class="word" :class="classMap[index%classMap.length]">
      <div class="wordname">{{word.wordname}}</div>
      <div class="videosCount">
        <!--<i>&#xe696;</i>-->
        {{word.videosCount}}
      </div>
    </li>
  </ul>

</div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll";

  export default{
      data() {
        return {
          words:[],
        };
      },
      created(){
        this.classMap = ['bg1','bg2','bg3','bg4','bg5','bg6','bg7'];

        this.$http.get('http://localhost:9096/api/words').then((response)=>{
          response = response.body;
          this.words = response;
          this.$nextTick(()=>{
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.listWrapper,{
                click:true
              })
            }else{
              this.scroll.refresh();
            };
          })
        });
      },
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../../common/stylus/iconfont.styl"

  .explore
    position fixed
    top: 40px
    left:0
    bottom 0
    width 100%
    overflow hidden
  .word
    box-sizing border-box
    padding 0 16px 0 16px
    color: #fff
    font-size 20px
    &:first-child
      margin-top: 10px;
    margin-bottom 10px
    height 56px
    background greenyellow
    &.bg1
      background #63D930
    &.bg2
      background #4154B2
    &.bg3
      background #FC0E1C
    &.bg4
      background #498BC8
    &.bg5
      background #B6A922
    &.bg6
      background: #E62464
    &.bg7
      background: #149747
    .wordname
      line-height: 56px;
      float: left
    .videosCount
      line-height: 56px;
      float: right
</style>
