<template>
  <div id="app">
    <router-view/>
    <main-tab-bar v-if="$route.meta.isShowTabBar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  html,body,#app{
    height: 100%;
    background: linear-gradient(rgb(254,211,220), rgb(254,245,243));
  }
</style>
