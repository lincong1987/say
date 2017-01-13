<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from 'components/home/home';
import login from 'components/login/login';
import register from 'components/register/register';
  export default{
    data(){
      return {
        isLogin:false,
        isReg:false
      }
    },
    components: {
      home,
      login,
      register
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

