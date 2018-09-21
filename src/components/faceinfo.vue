<template>
<div class="face_block">
  <div class="title">
    <div class="logo"><img :src="seller.avatar"></div>
    <div class="logotext">
      <p><b>{{seller.name}}</b><span class="span_des">{{seller.description}}</span></p>
      <p class="p_content">{{seller.bulletin |textsuo}}</p>
      <p class="p_score">{{seller.score}}</p>
    </div>
  </div>
  <div :class="{you_hui:true,isheight:addclass}">
       <div>
         <ul class="waylist">
         <li v-for="item in seller.supports">
           {{item.description}}
         </li>
       </ul>
       </div>
       <i class="i_list iconfont" @click="heightShow()">&#xf0170;</i>
  </div>
  <food></food>
  <!--当前页面是：faceinfo页面&#45;&#45;food页面&#45;&#45;fooddetailed页面-->
</div>
</template>
<script type="text/ecmascript-6">
  import food from "@/components/food"
  export default{
    name:"face",
    components:{
      food:food
    },
    data(){
    return{
         seller:[],
         addclass:false
    }
  },
  created:function(){
    this.$http.get("../static/data.json").then(function(res){
         this.seller=res.data.seller;
         /*console.log( this.seller)*/
    })
  },
  methods:{
    heightShow:function(){
      this.addclass=!this.addclass;
    }
  }
  }
</script>
<style scoped>
.title{
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: pink;
}
  .logo{
    flex:2
  }
.logo>img{
  margin: 10px;
  max-width: 80px;
  max-height: 80px;
}
  .logotext{
    margin-top: 5px;
    flex:5
  }
  .span_des{
    font-size: 14px;
    color:grey;
  }
  .p_score{
    color: red;
  }
  .you_hui{
    width: 100%;
    line-height: 25px;
    height: 30px;
    overflow: hidden;
    position: relative;
    border: 1px solid gainsboro;
    transition: all 0.2s linear;
  }
  .waylist{
   margin: 5px;
  }
  .i_list{
    position: absolute;
    right: 20px;
    font-size: 14px;
    top: 5px;
  }
  .isheight{
    height: 110px;
  }
</style>
