import Vue from 'vue'
import Router from 'vue-router'
import xianshi from '@/components/xianshi'
import shouye from '@/components/shouyeinfo'
import faxian from '@/components/faxianinfo'
//当前页面是：faceinfo页面--food页面--fooddetailed页面
import face from '@/components/faceinfo'
import detailed from '@/components/fooddetailed'
import dingdan from '@/components/dingdaninfo'
import wode from '@/components/wodeinfo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'xianshi',
      component:xianshi
    },
    {
      path: '/sy',
      name: 'shouye',
      component:shouye
    },
    {
      path: '/face',
      name: 'face',
      component:face
    },
    {
      path: '/fx',
      name: 'faxian',
      component:faxian
    },
    {
      path: '/dd',
      name: 'dan',//名字可以不同 dingdaninfo.vue里面的名字是 name:"ding",
      component:dingdan
    },
    {
      path: '/my',
      name: 'wode',
      component:wode
    },
    {
      path:"/details/:parindex/:childindex",   //传参 path:"/details/:parindex/:childindex",
      name: 'details',
      component:detailed
    }
  ]
})
