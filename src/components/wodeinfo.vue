<template>
  <div class="block">
    <div class="title">
      <div class="wode">
        <p><span @click="way()"><</span><span>我的</span></p>
      </div>
      <ul class="lisy-unstyled list-inline ullist ">
        <li class="pull-left"><img class=" " src="/static/img/mpic1.jpg"></li>
        <li class="pull-left lilist">
          <p>昵称    Auroraan</p>
          <p>电话号码     188****8916</p>
        </li>
      </ul>
    </div>
    <div class="banner1">
      <ul class="lisy-unstyled list-inline banner1ul">
        <li>
          <p style="color: #00b3ee">200.00元</p>
          <p>钱包</p>
        </li>
        <li>
          <p>6个</p>
          <p>红包</p>
        </li>
        <li>
          <p style="color: green">999个</p>
          <p>金币</p>
        </li>
      </ul>
    </div>
    <div class=" banner3">
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/dingdankuaidi@3x.png"></div>
        <div class="col-xs-8"><span>订单快递</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/wodedingdan@3x.png"></div>
        <div class="col-xs-8"><span>我的订单</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/woyaobudan@3x.png"></div>
        <div class="col-xs-8"><span>我要补单</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/wodeshoucang@3x.png"></div>
        <div class="col-xs-8"><span>我的收藏</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/liulanzuji@3x.png"></div>
        <div class="col-xs-8"><span>浏览足迹</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/shouhouguanli@3x.png"></div>
        <div class="col-xs-8"><span>售后管理</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
      <div class="row banner3_row">
        <div class="col-xs-2"><img class="img-responsive center-block banner_img1" src="/static/img/shouhuodizhi@3x.png"></div>
        <div class="col-xs-8"><span>收货地址</span></div>
        <div class="col-xs-2"><img class="img-responsive center-block banner_img2" src="/static/img/youjiantou-@3x.png"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:"wode",
    data(){
    return{
    }
  },
  methods:{
    way:function(){
      window.history.go(-1);
    }
  }
  }
</script>
<style scoped>
*{
  padding: 0;
}
  .block{
    width: 320px;
    height:auto;
  }
.title{
  height: 150px;
  background-color: #00A3FF;
}
.wode{
  background-color: #00A3FF;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
}
.wode>p{
  color: white;
  padding-top: 20px;
  font-size: large;
}
.wode>p>span:nth-child(1){
  margin-left: 20px;
}
.wode>p>span:nth-child(2){
  margin-left: 100px;
}
.ullist>li>img{
  margin-top: 55px;
  margin-left: 10px;
  width: 80px;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 80px;
}
.lilist{
  margin-top: 30px;
}
.ullist>li>p{
  margin-top: 20px;
  color: white;
}
.ullist>li>p:nth-child(1){
  margin-top: 30px;
}
.banner1ul{
  border-bottom: 1px solid gainsboro;
}
.banner1ul>li{
  width: 30%;
  text-align: center;
}
.banner1ul>li>p:nth-child(1){
  color: red;
  margin-top: 10px;
  font-size: large;
}
.banner1ul>li:nth-child(2){
  border-left:1px solid gainsboro;
  border-right:1px solid gainsboro;
}
  .banner3{
    height: 500px;
    line-height: 30px;
    padding: 10px 20px;
    width: 100%;
    margin-top: 10px;
    background-color: white;
  }
  .banner3_row{
    margin-bottom: 20px;
  }
  .banner3_row>div:nth-child(2){
    border-bottom: 1px solid gainsboro;
  }
  .banner_img1{
    max-height: 30px;
  }
  .banner_img2{
    max-height: 20px;
  }
</style>
