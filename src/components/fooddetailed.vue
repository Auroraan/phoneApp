<template>
<div class="details">
<div class="details_img">
  <img :src="oneinfo.icon">
</div>
<div class="content">
  <p><b>{{oneinfo.name}}</b></p>
  <p>月售：{{oneinfo.sellCount}}</p>
  <p class="p_line"><span class="price">￥{{oneinfo.price}}</span><button class="btnadd">+购物车</button></p>
  <p>商品描述：</p>
  <p class="miaoshu">{{oneinfo.info}}</p>
  <p>外卖评价：</p>
</div>
<div class="ratings">
  <div v-for="rat in oneinfo.ratings">
    <img class="ratimg" :src="rat.avatar">
    <div class="ratdiv">
      <span class="name">{{rat.username}}</span>
      <p>{{rat.rateTime | showtime}}</p>
      <p>{{rat.text}}</p>
    </div>
  </div>
</div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name:"detail",
  data(){
    return{
      p_index:0,
      c_index:0,
      detailinfo:null,
      oneinfo:""
    }
  },
filters:{
  showtime:function(value){
    var timer=new Date(value).toLocaleString();
    return timer
  }
},
created:function(){
/*<router-link :to="{name:'details',params:{parindex:indexp,childindex:index}}">
    <img class="liimg" :src="f.icon" alt=""/>
  </router-link>*/
    this.p_index=this.$route.params.parindex;
    this.c_index=this.$route.params.childindex;
    this.$http.get("static/data.json").then(function(res){
    this.detailinfo=res.data.goods;
      this.oneinfo=this.detailinfo[this.p_index].foods[this.c_index];
      console.log(this.oneinfo)
  })
}

}
</script>
<style scoped>
  .details{
    height: 750px;
  }
.details_img{
  width: 100%;
  height: 200px;
  text-align: center;

}
.details_img>img{
  margin-top: 10px;
  width: 90%;
  height: 200px;
}
  .content{
    margin-top: 20px;
  }
.content>p{
  margin-left: 20px;
}
  .p_line{
    overflow: hidden;
  }
  .price{
    color: red;
    float: left;
  }
.btnadd{
  padding: 8px;
  margin-right: 15px;
  float: right;
  background-color: pink;
}
.ratimg{
  width: 100%;
  clear: both;
}
  .ratimg{
    float: left;
    display: inline-block;
    margin-top: 5px;
    margin-left: 20px;
    max-width: 80px;
  }
  .ratdiv{
    margin-top: 10px;
    margin-left: 20px;
    float: left;
  }
</style>
