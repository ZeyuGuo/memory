<template>
  <div class="home">
    <van-notice-bar mode="closeable"
                    left-icon="like-o"
                    text="答案很长，我准备用一生的时间来回答，你准备好听了吗？"
    />
    <Encounter></Encounter>
    <div class="img-center-pos">
      <img src="@/assets/img/home/home_background.png" oncontextmenu="return false;" ondragstart="return false;" />
    </div>
  </div>

</template>

<script>
  import Encounter from "./childComponents/Encounter";

  import Vue from 'vue';
  import { NoticeBar,Button } from 'vant';

  Vue.use(NoticeBar);
  Vue.use(Button);

  export default {
    name: 'Home',
    components: {
      Encounter
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

  .img-center-pos img {
    width: 90%;
    height: 90%;
  }

</style>
