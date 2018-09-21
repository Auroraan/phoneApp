// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueresource from "vue-resource"
import $ from 'jquery'
Vue.use(vueresource);
Vue.config.productionTip = false;
//注册过滤器
Vue.filter("textsuo",function(value){
if(value==undefined)return;
  if(value.length>30){
   return  value.substr(0,30)+"..."
  }
  return value;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
