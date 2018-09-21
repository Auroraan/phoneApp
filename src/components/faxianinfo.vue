<template>
  <div class="container block">
    <div class="fa_x">
      <p><span @click="way()"><</span><span>发现</span></p>
    </div>
    <div class="fx_img">
      <img class="" src="/static/img/faxian.gif">
    </div>
    <div class="fx_food">
       <div class="row">
         <div class="col-xs-6 row_left">
           <p>金币商城</p>
           <p>0元好物在这里</p>
           <img class="" src="/static/img/left.png">
         </div>
         <div class="col-xs-6 row_right">
           <div class="row_rightd">
             <p>推荐有奖</p>
             <p>5元现金拿不停</p>
             <img class="" src="/static/img/righttop.png">
           </div>
           <div class="row_rightd">
             <p class="row_rightdp">周边优惠</p>
             <p >领取口碑好卷</p>
             <img class="" src="/static/img/rightbottom.png">
           </div>
         </div>
       </div>
     </div>
    <div class="xian_shi">
      <div class="text-center"><h2><b>限时好礼</b></h2>
        <p>金币换豪礼</p></div>
      <div>
        <div class="row xian_s_row">
          <div class="col-xs-4 s_row_div">
            <p>限时优惠</p>
            <img class=" center-block" src="/static/img/left11.png">
            <p>饿了么红包</p>
            <p><span>90金币</span><span>￥3</span></p>
          </div>
          <div class="col-xs-4 s_row_div">
            <p>特价换购</p>
            <img class=" center-block" src="/static/img/middle22.png">
            <p>扫地机器人</p>
            <p><span>9金币</span><span>￥5</span></p>
          </div>
          <div class="col-xs-4 s_row_div">
            <p>特价换购</p>
            <img class=" center-block" src="/static/img/right33.png">
            <p>机械键盘</p>
            <p><span>9金币</span><span>￥129</span></p>
          </div>
        </div>
        <div class="more"><p>查看更多></p></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:"faxian",
    data(){
    return{
    }
  },
  methods:{
    way:function(){
      window.history.go(-1);//返回当前页的上一页，是个新页面
     /* window.history.back(-1);//返回当前页的上一页，但是表单里的数据还在
      window.location.reload();//刷新
      window.history.go(-1);//后退
      window.history.go(1);//前进
      window.history.forward();//前进
      window.history.back();//后退加刷新*/
    }
  }
  }
</script>
<style scoped>
  body{
    background-color:gainsboro ;
  }
.block{
  margin-left: -15px;
  width: 320px;
  height: 750px;
}
  .fa_x{
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 10;
    height: 55px;
    background-color: #008BFF;
  }
.fa_x>p{
   padding-top: 20px;
   color: white;
   font-size: large;
 }
  .fa_x>p>span:nth-child(1){
    margin-left: 20px;
  }
  .fa_x>p>span:nth-child(2){
    margin-left: 100px;
  }
  .fx_img{
    width: 100%;
    margin-top: 55px;
  }
.fx_img>img{
  width: 320px;
}
  .fx_food{
    margin-top: 2px;
    width: 100%;
  }
  .row_left{
    padding: 0;
    border-right: 1px solid gainsboro;
  }
  .row_left>p:nth-child(1){
    margin-left: 20px;
    margin-top: 20px;
    font-size: x-large;
    color: #FFB77C;
  }
.row_left>p:nth-child(2){
  margin-left: 20px;
  font-size: 12px;
  color: gray;
}
  .row_left>img{
    width: 70px;
    margin-left: 70px;
  }
  .row_right{
    padding: 0;
  }
  .row_rightd>p:nth-child(1){
    margin-left: 10px;
    margin-top: 20px;
    font-size: x-large;
    color: #3DB7E6;
  }
.row_rightd>p:nth-child(2){
  margin-left: 15px;
  font-size: 12px;
  color: gray;
}
  .row_rightd>img{
    margin-top: -70px;
    float: right;
    margin-right: -10px;
    width: 50px;
  }
  .row_rightdp{
    color:red !important;
  }
  .text-center{
    margin-top: 10px;
    padding: 3px 0;
    margin-left: -15px;
    margin-right: -15px;
    background-color: rgba(255, 192, 203, 0.09);
  }
  .xian_shi{
    height: 400px;
    margin-right: -15px;/*//用到container的不好之处*/
    margin-left: 15px;
  }
  .xian_s_row>div{
    margin-top: 10px;
  }
  .xian_s_row>div>p{
    margin-top: 10px;
    line-height: 10px;
  }
  .s_row_div>p:nth-child(1){
    background-color: #413D3C;
    margin-top: 10px;
    padding: 5px 0;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    color: white;
  }
  .s_row_div>p:nth-child(3){
    color: gray;
  }
  .s_row_div>img{
    margin-top: -10px;
    width: 90px;
  }
  .s_row_div>p:nth-child(4)>span:nth-child(1){
    color: red;
  }
  .more{
    font-size: 14px;
    text-align: center;
    color: gray;
    margin-top: 30px;
  }
</style>
