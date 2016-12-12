<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="item">
        <router-link to="/a">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/b">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/c">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>

</template>

<script>
  import header from "./components/header/header.vue";
  import footer from "./components/footer/settlement.vue";
  export default {
    components:{
      "v-header": header,
      "v-footer": footer
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding:0;
    border:0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body,html{
    margin: 0;
  }
  .tab{
    display: flex;
    width:100%;
    height:40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .tab .item{
    flex:1;
    text-align: center;
    font-size: 14px;
  }
  .tab .item a{
    color:rgb(77,85,93);
    text-decoration: none;
    display:block;
  }
  .tab .item a.router-link-active{
    color:rgb(240,20,20)
  }
  .mask{
    position: absolute;
    width:100%;
    min-height:100%;
    left:0;top:0;
    background-color:rgba(7,17,27,0.8);
  }
</style>
