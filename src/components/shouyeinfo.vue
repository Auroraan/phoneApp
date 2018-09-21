<template>
  <div class="block container ">
      <div class="sou_suo">
      <p class="p_text"><i class="iconfont" :v-html="dingwei"></i>西安邮电大学长安校区</p>
      <a class="a_sou">
        <span class="small a_span"><i></i>搜索饿了么商家、商品名称</span>
      </a>
    </div>
      <div class="banner1">
        <div class="row banner_row">
          <div class="col-xs-2 "><img class="img-center img-responsive bannerimg" src="/static/img/1.png">
            <p class="small shang_p">美食</p>
          </div>
          <div class="col-xs-3"><img  class="img-center img-responsive bannerimg" src="/static/img/2.png">
            <p class="small">商超便利</p>
          </div>
          <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="/static/img/3.png">
            <p class="small shang_p" >夜宵</p>
          </div>
          <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="/static/img/4.png">
            <p class="small shang_p">水果</p>
          </div>
          <div class="col-xs-3"><img  class="img-center img-responsive bannerimg" src="/static/img/5.png">
            <p class="small">医药健康</p>
          </div>
        </div>
        <div class="row banner_row">
          <div class="col-xs-2 "><img class="img-center img-responsive bannerimg" src="/static/img/6.png">
            <p class="small shang_p">美食</p>
          </div>
          <div class="col-xs-3"><img  class="img-center img-responsive bannerimg" src="/static/img/7.png">
            <p class="small">商超便利</p>
          </div>
          <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="/static/img/8.png">
            <p class="small shang_p" >夜宵</p>
          </div>
          <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="/static/img/9.png">
            <p class="small shang_p">水果</p>
          </div>
          <div class="col-xs-3"><img  class="img-center img-responsive bannerimg" src="/static/img/10.png">
            <p class="small">医药健康</p>
          </div>
        </div>
      </div>
      <div class="banner2">
        <div class="row banner2_row">
          <div class="col-xs-6 row_p">
            <p>品质套餐</p>
            <p>搭配齐全吃的好</p>
            <p>立即抢购></p>
            <img class="img-responsive" src="/static/img/11.png">
          </div>
          <div class="col-xs-6 row_p">
            <p class="banner2_p">限量抢购</p>
            <p>超值美味9.9元起</p>
            <p><span class="banner2_span">315人</span><b class="banner2_b">正在抢></b></p>
            <img class="img-responsive" src="/static/img/22.png">
          </div>
        </div>
      </div>
      <div class="cartlist">
        <p>商家推荐</p>
        <ul class="lisy-unstyled list-inline ullist">
          <li>综合排序<i class="iconfont icon1" :v-html="iconImg"></i></li>
          <li>距离最近</li>
          <li>品质联盟</li>
          <li>筛选<i class="iconfont" :v-html="shaiXuan"></i></li>
        </ul>
      </div>
      <div class="banner3">
        <div class="row banner3_row">
          <div class="col-xs-4 banner3_img">
           <!-- 当前页面是：shouyeinfo页面--faceinfo页面--food页面--fooddetailed页面
            index.js中导入--import face from '@/components/faceinfo'
            index.js里面设置{
                            path: '/face',
                            name: 'face',
                            component:face
                             },-->
            <router-link :to="{name:'face'}">
              <img class="img-center img-responsive " src="/static/img/1.jpg">
            </router-link>
          </div>
          <div class="col-xs-8 banner3_text">
            <p><b>粥品香坊（回龙观）</b></p>
            <p>4.7<span>月售:450</span><span class="span_c">蜂鸟专送</span></p>
            <p><span>￥7起送|</span>夜间配送费￥6.35</p>
            <p>皮蛋瘦肉粥</p>
          </div>
        </div>
      </div>
      <div class="banner3">
      <div class="row banner3_row">
        <div class="col-xs-4 banner3_img">
          <!-- 当前页面是：shouyeinfo页面--faceinfo页面--food页面--fooddetailed页面
           index.js中导入--import face from '@/components/faceinfo'
           index.js里面设置{
                           path: '/face',
                           name: 'face',
                           component:face
                            },-->
          <router-link :to="{name:'face'}">
            <img class="img-center img-responsive " src="/static/img/1.jpg">
          </router-link>
        </div>
        <div class="col-xs-8 banner3_text">
          <p><b>粥品香坊（回龙观）</b></p>
          <p>4.7<span>月售:450</span><span class="span_c">蜂鸟专送</span></p>
          <p><span>￥7起送|</span>夜间配送费￥6.35</p>
          <p>皮蛋瘦肉粥</p>
        </div>
      </div>
    </div>
      <div class="banner3">
      <div class="row banner3_row">
        <div class="col-xs-4 banner3_img">
          <!-- 当前页面是：shouyeinfo页面--faceinfo页面--food页面--fooddetailed页面
           index.js中导入--import face from '@/components/faceinfo'
           index.js里面设置{
                           path: '/face',
                           name: 'face',
                           component:face
                            },-->
          <router-link :to="{name:'face'}">
            <img class="img-center img-responsive " src="/static/img/1.jpg">
          </router-link>
        </div>
        <div class="col-xs-8 banner3_text">
          <p><b>粥品香坊（回龙观）</b></p>
          <p>4.7<span>月售:450</span><span class="span_c">蜂鸟专送</span></p>
          <p><span>￥7起送|</span>夜间配送费￥6.35</p>
          <p>皮蛋瘦肉粥</p>
        </div>
      </div>
    </div>
      <div class="banner3">
      <div class="row banner3_row">
        <div class="col-xs-4 banner3_img">
          <!-- 当前页面是：shouyeinfo页面--faceinfo页面--food页面--fooddetailed页面
           index.js中导入--import face from '@/components/faceinfo'
           index.js里面设置{
                           path: '/face',
                           name: 'face',
                           component:face
                            },-->
          <router-link :to="{name:'face'}">
            <img class="img-center img-responsive " src="/static/img/1.jpg">
          </router-link>
        </div>
        <div class="col-xs-8 banner3_text">
          <p><b>粥品香坊（回龙观）</b></p>
          <p>4.7<span>月售:450</span><span class="span_c">蜂鸟专送</span></p>
          <p><span>￥7起送|</span>夜间配送费￥6.35</p>
          <p>皮蛋瘦肉粥</p>
        </div>
      </div>
    </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  export default {
    name:"shouye",
    data(){
    return{
       datainfo:"",
       dingwei:"&#xf041;",
       isshow:false,
       iconImg:"&#xf078;",
       shaiXuan:"&#xf0b0;"
    }
  },
  created:function(){
    this.$http.get("../static/data.json").then(function(res){
      this.datainfo=res;
      console.log(this.datainfo)
    })
  }
  }
</script>
<style scoped>
 /* .icon1{
    display:inline-block;
    width:15px;
    height:15px;
  }*/
  @font-face {font-family: 'iconfont';
    src: url('../font/iconfont.eot'); /* IE9*/
    src: url('../font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../font/iconfont.svg#uxiconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  .block{
  }
.sou_suo{
  position: fixed;
  top: 0;
  z-index: 10;
  margin-left: -15px;
  width: 320px;
  height: 80px;
  background-color: dodgerblue;
}
  .p_text{
    padding-top: 10px;
    margin-left: 20px;
    color:white;
  }
  .a_sou{
    border: 1px solid transparent;
    border-radius: 15px;
    width: 300px;
    height: 30px;
    text-decoration: none;
    color: gainsboro;
    display: inline-block;
    margin-left: 10px;
    background-color: white;
  }
  .a_span{
    display: inline-block;
    margin-left: 50px;
    margin-top: 5px;
  }
  .banner1{
    margin-top: 100px;
  }
  .banner_row{
    margin-top: 10px;
  }
  .bannerimg{
    width: 50px;
    height: 45px;
  }
  .shang_p{
    width: 30px;
  }
  .banner2{
    margin-top: 20px;
  }
  .banner2_row>div{
    width: 145px;
    margin-left: 10px;
    padding-top: 10px;
    height: 120px;
    background-color: #F6F6F6;
  }
  .row_p>p{
    line-height: 13px;
  }
  .row_p>p:nth-child(1){
    font-size: large;
    font-weight: bold;
  }
  .row_p>p:nth-child(2){
    font-size: small;
    color:gray;
  }
  .row_p>p:nth-child(3){
    font-size: small;
    color:darkgoldenrod;
  }
  .row_p>img{
    margin-top: -20px;
    margin-left: 30px;
    width: 100px;
  }
  .banner2_p,.banner2_span{
    color: red;
  }
  .banner2_b{
    color: black;
  }
  .cartlist{
   margin-left: -15px;
    width: 320px;
    border-bottom: 1px solid gainsboro;
  }
  .cartlist>p{
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
  }
  .ullist>li{
    margin-left: 12px;
  }
  .banner3_row{
    margin-top: 10px;
  }
  .banner3_text b{
   font-size: large;
  }
  .banner3_text>p:nth-child(4){
    width: 100px;
    text-align: center;
   border: 1px solid gainsboro;
  }
  .banner3_text>p>span{
    margin:0px 9px;
  }
  .span_c{
    padding: 5px;
    background-color: #2bccff;
  }
  .ullist>li>a:nth-child(1){
    color:red !important;
  }
</style>
