<template>
  <div class="home">
    <van-notice-bar mode="closeable"
                    left-icon="volume-o"
                    text="答案很长，我准备用一生的时间来回答，你准备好听了吗？"
    />

    <div class="img-center-pos">
      <img width="90%" src="@/assets/img/home/home_background.png" />
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { NoticeBar,Button } from 'vant';

  Vue.use(NoticeBar);
  Vue.use(Button);

  export default {
    name: 'Home',
    components: {

    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .home{
    padding-bottom: 49px;
  }

  .img-center-pos {
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 50px;
  }

</style>
