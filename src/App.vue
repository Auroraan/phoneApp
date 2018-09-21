<template>
<div id="app">
  <router-view></router-view>
  <foot></foot>

  </div>
</template>

<script>
import foot from "@/components/footmenu";
export default {
  name: 'App',
  components:{
    foot:foot,
  }
}
</script>

<style>

</style>
