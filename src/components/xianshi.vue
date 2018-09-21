<template>
  <div class="container block">
    <div class="sou_suo">
      <p class="p_text"><i class="iconfont" v-html="dingwei"></i>正在定位...</p>
      <a class="a_sou">
        <span class="small a_span"><i class="iconfont" v-html="sousuo"></i>请输入你的位置...</span>
      </a>
    </div>
    <div class="banner1 banner1_top">
      <div class="row banner_row">
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small shang_p" ></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small shang_p"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
      </div>
    </div>
    <div class="banner1">
      <div class="row banner_row">
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small shang_p" ></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small shang_p"></p>
        </div>
        <div class="col-xs-2"><img  class="img-center img-responsive bannerimg" src="">
          <p class="small"></p>
        </div>
      </div>
    </div>
    <div class="banner2">
      <div class="row banner2_row">
        <div class="col-xs-6 row_p">
          <p></p>
          <p></p>
          <p></p>
          <img class="img-responsive" src="">
        </div>
        <div class="col-xs-6 row_p">
          <p class="banner2_p"></p>
          <p></p>
          <p><span class="banner2_span"></span><b class="banner2_b"></b></p>
          <img class="img-responsive" src="">
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:"xianshi",
    data(){
    return {
        dingwei:"&#xf041;",
        sousuo:"&#xf002;"
    }
  },
  methods:{
    changevalue:function(){
      this.isshow=true
    }
  }

  }
</script>
<style scoped>
  .sou_suo{
    margin-left: -15px;
    width: 320px;
    height: 100px;
    background-color: dodgerblue;
  }
  .p_text{
    padding-top: 30px;
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
  .banner1_top{
   margin-top: 30px;
  }
  .a_span{
    display: inline-block;
    margin-left: 50px;
    margin-top: 5px;
  }
  .banner_row{
    margin-top: 10px;
  }
  .bannerimg{
    width: 50px;
    height: 45px;
  }
  .banner_row>div{
    margin-right: 5px;
  }
  .banner_row>div>p{
    margin-top: 5px;
    height: 20px;
    width: 50px;
    border: 1px solid rgba(220, 220, 220, 0.32);
  }
  .banner2{
    margin-top: 20px;
  }
  .banner2_row>div{
    width: 145px;
    margin-left: 10px;
    padding-top: 10px;
    height: 120px;
    border: 1px solid rgba(220, 220, 220, 0.32);
  }
  .row_p>img{
    margin-top: -20px;
    margin-left: 30px;
    width: 100px;
  }
</style>
