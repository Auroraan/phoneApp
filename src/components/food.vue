<template>
<div>
<div class="food">
  <div class="left">
    <ul>
      <li v-for="(food,index) in foodinfo">
        {{food.name}}
      </li>
    </ul>
  </div>
  <div class="right">
    <ul>
      <li v-for="(foodlist,indexp) in foodinfo">
        <ul>
          <li v-for="(f,index) in foodlist.foods">
               <div class="li_left">
                 <router-link :to="{name:'details',params:{parindex:indexp,childindex:index}}">
                   <img class="liimg" :src="f.icon" alt=""/>
                 </router-link>
               </div>
               <div class="li_right">
                 <p class="name">{{f.name | suoname}}{{f.description | suoname}}</p>
                 <p class="price"><span class="p_color">￥{{f.price}}</span><span class="sell">月销{{f.sellCount}}</span></p>
                 <p class="jian_jia">
                   <span class="jian"  @click="btnjian(indexp,index)" v-show="alldata[indexp].content[index].btnshow">-</span>
                   <span class="num" v-show="alldata[indexp].content[index].btnshow">{{alldata[indexp].content[index].number}}</span>
                   <span class="jia" @click="btnjia(indexp,index)">+</span>
                 </p>
               </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
  <div class="datacart">
    <div class="cartleft">总计：{{allprice}}</div>
    <button class="cartright">结算</button>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
/*  import bScroll from "better-scroll";*/
  import datalistinfo from "@/components/datainfo/datalist"
  export default {
    name:"food",
    data(){
        return{
             foodinfo:[],
             alldata:"",
             allprice:0
         }
},
    filters:{
      suoname:function(value){
       if(value==undefined)return;
        if(value.length>4){
         return  value.substr(0,4);
        }
        return value;
        }
    },
  created:function(){
    this.$http.get("static/data.json").then(function(res){
      this.foodinfo=res.data.goods;
      //计算总数据
      for(var i=0;i<this.foodinfo.length;i++){
        datalistinfo.data.push({
          id:i,
          content:[]
        });
        for(var k=0;k<this.foodinfo[i].foods.length;k++){
          datalistinfo.data[i].content.push({
              name:this.foodinfo[i].foods[k].name,
              price:this.foodinfo[i].foods[k].price,
              icon:this.foodinfo[i].foods[k].icon,
              btnshow:false,
              number:0
          })
        }
      }
      this.alldata=datalistinfo.data
    });
  },
  methods:{
    btnjia:function(indexp,index){
      this.alldata[indexp].content[index].btnshow=true;
      this.alldata[indexp].content[index].number++;
      this.savecart(this.alldata[indexp].content[index]);
      this.totlepricedata();
    },
    //减事件突然失效？？？
    //字体大小影响减事件
      btnjian:function(indexp,index){
      this.alldata[indexp].content[index].number--;
      if(this.alldata[indexp].content[index].number<1){
        this.alldata[indexp].content[index].btnshow=false;
      }
      this.savecart(this.alldata[indexp].content[index]);
      this.totlepricedata();
    },
    savecart:function(obj){
      for(var i=0;i<datalistinfo.usercart.length;i++){
        if(datalistinfo.usercart[i].name==obj.name){
          datalistinfo.usercart[i].number=obj.number;
          if(datalistinfo.usercart[i].name<0){
            datalistinfo.usercart.splice(i,i+1);
          }
          return
        }
      }
      datalistinfo.usercart.push(obj);
    },
    totlepricedata:function(){
      datalistinfo.totleprice=0;
      for(var i=0;i<datalistinfo.usercart.length;i++){
        datalistinfo.totleprice+=datalistinfo.usercart[i].number*datalistinfo.usercart[i].price;
      }
      this.allprice=datalistinfo.totleprice;
    }
  }
  }
</script>
<style scoped>
.food{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
}
.left{
  height: 325px;
  /*overflow: hidden;*/
  line-height: 45px;
  font-size: 14px;
  color: black;
  flex: 3;
}
.left li{
  padding-left: 5px;
  border-bottom:1px solid gainsboro;
}
.right{
  height: 325px;
 /* overflow: hidden;*/
  flex: 5;
}
.right li{
  list-style: none;
}
.li_left{
  margin-top: 5px;
  float: left;
  width: 60px;
  height: 60px;
}
.liimg{
  max-width: 65px;
}
.li_right{
  margin-top: 5px;
  float: left;
  width: 120px;
  height: 60px;
}
  .li_right>p{
    margin-left: 10px;
    margin-top: -5px;
  }
.p_color{
  color:red;
}
  .sell{
    margin-left: 5px;
  }
  .jian_jia{
    float: right;
    margin-right: -15px;
  }
.jian_jia>span:nth-child(1),.jian_jia>span:nth-child(3){
  display: inline-block;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  background-color: pink;
  border: 1px solid gainsboro;
  border-radius: 15px;
}
.jian_jia>span:nth-child(2){
  display: inline-block;
  width: 25px;
  height: 15px;
  font-size: 12px;
  text-align: center;
  border: 1px solid gainsboro;
}
.datacart{
  padding: 5px 0;
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom:40px;
  z-index: 10;
  overflow: hidden;
  clear: both;
}
  .cartleft{
    font-size: x-large;
    color: red;
    float: left;
  }
  .cartright{
    background-color: lightpink;
    height: 35px;
    width: 100px;
    border: 1px solid transparent;
    border-radius: 15px;
    font-size: larger;
    margin-right: 10px;
    float: right;
  }
</style>
