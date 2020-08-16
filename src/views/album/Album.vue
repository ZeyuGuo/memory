<template>
  <div class="album">
    <h2 style="text-align: center;font-family: 'Comic Sans MS'">Memorys</h2>
    <van-swipe class="swipe" :autoplay="3000" :height="getHeight">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image"  fit="cover" width="100%" oncontextmenu="return false;" />
      </van-swipe-item>
    </van-swipe>

    <div class="album-lists-container">
      <div class="list-header">
        <p>点滴回忆</p>
        <div class="foreach">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Lazyload } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { Image as VanImage } from 'vant';

  Vue.use(Swipe);
  Vue.use(VanImage);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);

  export default {
    name: "Album",
    data() {
      return {
        images: [
          'http://m.xiaoxiaozeyu.online/images/albums/testAlbum/001.jpg',
          'http://m.xiaoxiaozeyu.online/images/albums/testAlbum/002.jpg',
          'http://m.xiaoxiaozeyu.online/images/albums/testAlbum/003.jpg',
          'http://m.xiaoxiaozeyu.online/images/albums/testAlbum/004.jpg',
          'http://m.xiaoxiaozeyu.online/images/albums/testAlbum/005.jpg',
        ]
      }
    },
    computed: {
      getHeight() {
        let h = document.body.clientWidth;
        return h*9/16
      }
    }
  }
</script>

<style scoped>
  .album {
    padding-bottom: 49px;
  }

  .swipe {
    border-radius: 10px;
    margin: 5px;
  }

  .album-lists-container {
    border-radius: 10px;
    margin: 5px;
    background: rgba(255,255,255,0.4);

    height: 100px;
  }

  .list-header {
    border-bottom: 1px solid rgba(10,10,10,0.2);
  }

  .list-header p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    padding: 5px 8px;
  }
</style>
