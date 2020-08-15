<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/album">
      <img slot="item-icon" src="~assets/img/tabbar/album.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/album_active.svg" alt="">
      <div slot="item-text">相册</div>
    </tab-bar-item>
    <tab-bar-item path="/us">
      <img slot="item-icon" src="~assets/img/tabbar/us.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/us_active.svg" alt="">
      <div slot="item-text">我们</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
