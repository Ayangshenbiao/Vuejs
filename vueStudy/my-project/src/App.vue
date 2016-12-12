<template>
  <div id="app">
    <v-header></v-header>
    <tab></tab>
    <v-content></v-content>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import tab from './components/tab/tab.vue';
import content from './components/content/content.vue';

export default {
  components:{
    "v-header":header,
    "tab":tab,
    "v-content":content,
  }
}
</script>

<style>
  body{
    margin:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
}
</style>
