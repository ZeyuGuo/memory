<template>
  <div class="encounter">
    <div class="outer">
      <div class="img-inner">
        <van-image
          round
          fit="cover"
          width="5rem"
          height="5rem"
          src="http://m.xiaoxiaozeyu.online/images/avatar/avatar_1.jpg"
        />
      </div>
      <div class="inner">
        <div>
          <p>我们相恋了 <span>{{loveTime}}</span> 天</p>
        </div>
        <div>
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
          <van-icon class="like-icon" name="like" color="#FF8799" />
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
          <van-icon name="http://m.xiaoxiaozeyu.online/images/icon/line.svg" oncontextmenu="return false;"/>
        </div>
      </div>
      <div class="img-inner">
        <van-image
          round
          fit="cover"
          width="5rem"
          height="5rem"
          src="http://m.xiaoxiaozeyu.online/images/avatar/avatar_2.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Image as VanImage } from 'vant';
  import { Icon } from 'vant';

  Vue.use(VanImage);
  Vue.use(Icon);

  export default {
    name: "Encounter",
    data() {
      return {
        encounterTime: new Date(2020,8,10)
      }
    },
    computed: {
      loveTime() {
        let today = new Date();
        let currentDay =new Date(today.getFullYear(),today.getMonth()+1, today.getDate())
        return (currentDay.getTime()-this.encounterTime.getTime())/(1000 * 60 * 60 * 24);
      }
    }
  }
</script>

<style scoped>
  .encounter{

  }

  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 15px;
    margin: 65px 0 0 0;
  }

  .img-inner {
    flex: 1;
  }

  .inner {
    display: flex;
    flex-direction: column;
    flex: 2;
  }

  .inner div p {
    margin: 10px 0;
    font-size: 22px;
    /*font-weight: bold;*/
    font-family: 'home';
  }
  .inner div p span {
    font-size: 18px;
    font-weight: lighter;
    font-family: 'Comic Sans MS';
  }

  .like-icon {
    margin: 0 8px;
  }
</style>
