<template>
  <div class="block">
   <div class="title">
     <div class="t_div"><p><span @click="way()"><</span><span>我的订单</span></p></div>
     <ul class="lisy-unstyled list-inline ullist">
       <li>
         <p><i><img class="img-responsive center-block img_i" src="/static/img/dingdanqueren@3x.png"></i></p>
         <p>待付款</p>
       </li>
       <li>
         <p><i><img class="img-responsive center-block img_i" src="/static/img/dabaozhong@3x.png"></i></p>
         <p>待使用</p>
       </li>
       <li>
         <p><i><img class="img-responsive center-block img_i" src="/static/img/dabaowancheng@3x.png"></i></p>
         <p>待评价</p>
       </li>
       <li>
         <p><i><img class="img-responsive center-block img_i" src="/static/img/fahuozhong@3x.png"></i></p>
         <p>退款/售后</p>
       </li>
       <li>
         <p><i><img class="img-responsive center-block img_i" src="/static/img/yifakuaidi@3x.png"></i></p>
         <p>全部订单</p>
       </li>
     </ul>
   </div>
    <div class="banner">
      <h3>历史订单</h3>
      <div class="bannerimg">
        <div><img class="img-responsive " src="/static/img/11.png"></div>
        <div class="ping_j">
          <p><b>粥品香坊（回龙观）</b><span class="small">订单已发送</span></p>
          <p class="small">香甜可口，滑而不腻，值得你拥有<span>￥20</span></p>
          <p><a class="btn btn-default">再来一单</a><a class="btn btn-danger">评价得9金币</a></p>
        </div>
      </div>
      <div class="bannerimg">
        <div><img class="img-responsive " src="/static/img/22.png"></div>
        <div class="ping_j">
          <p><b>粥品香坊（回龙观）</b><span class="small">订单已发送</span></p>
          <p class="small">香甜可口，滑而不腻，值得你拥有<span>￥20</span></p>
          <p><a class="btn btn-default">再来一单</a><a class="btn btn-danger">评价得9金币</a></p>
        </div>
      </div>
      <div class="bannerimg">
        <div><img class="img-responsive " src="/static/img/10.png"></div>
        <div class="ping_j">
          <p><b>粥品香坊（回龙观）</b><span class="small">订单已发送</span></p>
          <p class="small">香甜可口，滑而不腻，值得你拥有<span>￥20</span></p>
          <p><a class="btn btn-default">再来一单</a><a class="btn btn-danger">评价得9金币</a></p>
        </div>
      </div>
      <div class="search"><p class="small text-center">查看三个月前的外卖订单</p></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:"ding",
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
.block{
  width: 100%;
  height: 700px;
}
  .t_div{
    width: 100%;
    height: 55px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: dodgerblue;
  }
  .t_div>p{
    margin-top: 15px;
    font-size: large;
    color: white;
  }
.t_div>p>span:nth-child(1){
 margin-left: 20px;
}
.t_div>p>span:nth-child(2){
  margin-left: 100px;
}
  .ullist{
    border-bottom: 1px solid gainsboro;
    margin-top: 90px;
  }
.ullist>li{
  margin-left: 5px;
}
.ullist>li>p{
  font-size: small;
}
.bannerimg{
  height: 150px;
  background-color: #F9F9F9;
  border-bottom: 1px solid gainsboro;
}
.ping_j>p>span{
    color: red;
    float: right;
  }
.ping_j>p>a{
  margin-right: 10px;
}
  .bannerimg>div>img{
    margin-top: 30px;
    width: 100px;
  }
  .bannerimg>div{
    float: left;
  }
.bannerimg>div:nth-child(2){
 margin-top: 30px;
}
.img_i{
  width: 30px;
}
  .banner h3{
    padding: 10px 0;
    width: 100px;
   /* border: 1px solid transparent;
    border-radius: 10px;
    background-color: aliceblue;*/
    margin-left: 10px;
  }
  .search{
    color:gray;
    margin-top: 10px;
  }
</style>
