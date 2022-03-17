<template>
  <div class="recommend">
    <HeaderNav :isRecommend="true" title="热门推荐" />
    <ul class="container">
      <li v-for="play in personalizedLists" :key="play.id">
        <div class="container-player">
          <img :src="`${play.picUrl}?param=140y140`" alt="" />
          <a class="player-cover" :title="play.name" href="/#"></a>
          <div class="player-bottom">
            <a class="bottom-play icon-all" title="播放" href="/#"></a>
            <span class="bottom-icon-headset icon-all"></span>
            <span class="bottom-amount">{{ parseInt(play.playCount / 10000) }}万</span>
          </div>
        </div>
        <p class="container-desc">
          <a class="desc-title" :title="play.description" href="/#">
            {{ play.name }}
          </a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiscoverRecommend",
  props: ["personalizedLists"],
};
</script>

<style lang="scss" scoped>
.discover-icon-coverall {
  background: url(~@/views/Discover/Discover/images/coverall.png) no-repeat;
}
.recommend {
  .container {
    margin: 20px 0 0 -42px;
    li {
      $width: 140px;
      float: left;
      display: block;
      width: $width;
      height: 204px;
      line-height: 1.4;
      padding-left: 42px;
      padding-bottom: 30px;
      overflow: hidden;
      .container-player {
        position: relative;
        display: block;
        width: $width;
        height: 140px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .player-cover {
          @extend .discover-icon-coverall;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: 0 0;
        }
        // 图片下面的播放区域
        .player-bottom {
          @extend .discover-icon-coverall;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          background-position: 0 -537px;
          color: #ccc;
          // 播放按钮图标
          .bottom-play {
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
          }
          // 播放耳机图标
          .bottom-icon-headset {
            float: left;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
          }
          // 播放量文字
          .bottom-amount {
            float: left;
            margin: 7px 0 0 0;
          }
        }
      }
      // 图片下面的文字介绍
      .container-desc {
        width: 100%;
        margin: 8px 0 3px;
        font-size: 14px;
        overflow: hidden;
        .desc-title {
          display: inline-block;
          max-width: 100%;
          _width: 100%;
          vertical-align: middle;
          color: #000;
          overflow: hidden;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
