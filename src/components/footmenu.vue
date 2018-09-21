<template>
<div class="footer">
  <ul class="ullist">
    <li v-for="(item,index) in bottommenu" @click="colorShow(index)">
      <router-link :to="item.action" :class="{c_show:item.istrue}">
        <i class="iconfont" v-html="item.icon"></i><br>
        {{item.name}}
      </router-link>
    </li>
  </ul>
</div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:"foot",
    data(){
    return {
           bottommenu:[
             {name:"首页",action:"/sy",icon:"&#xf012b;",istrue:false},
             {name:"发现",action:"/fx",icon:"&#xf0139;",istrue:false},
             {name:"订单",action:"/dd",icon:"&#xf0178;",istrue:false},
             {name:"我的",action:"/my",icon:"&#xf012d;",istrue:false}
           ]
    }
  },
  methods:{
      colorShow:function(index){
        for(var i=0;i<this.bottommenu.length;i++){
          this.bottommenu[i].istrue=false;
        }
         this.bottommenu[index].istrue=true
       }
  }
  }
</script>
<style scoped>
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
  .footer{
    width: 320px;
    position: fixed;
    bottom:0;
    background-color: white;
    border: 1px solid transparent;
  }
  .ullist{
    margin: 0;
    padding: 0;
  }
  .ullist>li{
    margin-left: 40px;
    text-align: center;
    list-style: none;
    display: inline-block;
  }
  .ullist>li a{
    text-decoration: none;
    color:black;
  }
  .c_show{
    color:#0090FF !important;
  }
</style>
