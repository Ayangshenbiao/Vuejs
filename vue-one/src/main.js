import Vue from 'vue';
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import tab1_content from "./components/content/tab1_content.vue";
import tab2_content from "./components/content/tab2_content.vue";
import tab3_content from "./components/content/tab3_content.vue";

Vue.use(VueRouter);
Vue.use(VueResource);

const A = tab1_content;

const B = tab2_content;

const C = tab3_content;


const router = new VueRouter({
  routes: [
    {path: "/a" ,component: A},
    {path: "/b" ,component: B},
    {path: "/c" ,component: C}
  ]
})
/* eslint-disable no-new */

new Vue({
  el: "#app",
  template: "<App/>",
  components:{
    App
  },
  router
}).$mount("#app")
