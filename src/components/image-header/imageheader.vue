<template>
 <div class="image-header">
   <router-link  to="/home">
     <i class="back"> &#xe602;</i>
   </router-link>
   <img src="./header.png">
   <div class="title">Say</div>
 </div>
</template>

<script type="text/ecmascript-6">
    export default{

    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @font-face {
    font-family: 'iconfont';  /* project id 220947 */
    src: url('//at.alicdn.com/t/font_694n2u8ynrn3ik9.eot');
    src: url('//at.alicdn.com/t/font_694n2u8ynrn3ik9.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_694n2u8ynrn3ik9.woff') format('woff'),
      url('//at.alicdn.com/t/font_694n2u8ynrn3ik9.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_694n2u8ynrn3ik9.svg#iconfont') format('svg');
  }

.image-header
  position relative
  width:100%
  height 300px
  .back
    position absolute
    top: 10px
    left: 10px
    font-family iconfont
    z-index:999
  .title
    position absolute
    top: 14px
    left:-36px
    color:RGBA(233, 30, 99, 0.6)
    font-size 16em
  img
    position absolute
    left:0
    top:0
    width:100%
    height 100%


</style>
