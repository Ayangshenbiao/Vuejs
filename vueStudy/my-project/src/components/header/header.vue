<template>
  <div class="heade">
    <div class="notice"></div>
    <div class="bg"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style>
  .heade{
    height:134px;
    /*background-color: #aab800;*/
    text-align: center;
    color:#000;
    position: relative;
  }
  .notice{
    height:28px;
  }
  .bg{
    width:100%;
    height:100%;
    background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg") no-repeat;
    background-size: cover;
    position: absolute;
    top:0;
    left:0;
    filter: blur(5px);
    z-index: -1;
  }
</style>
