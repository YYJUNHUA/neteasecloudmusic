<template>
  <!-- Swiper -->
  <div class="my-swiper">
    <div class="swiper-container swiper-no-swiping" ref="mySwiperSub">
      <div class="swiper-wrapper">
        <div class="swiper-slide my-swiper-slide" v-for="album in discoverNewDisc" :key="album.id">
          <div class="slide-disc">
            <img :src="`${album.picUrl}?param=100y100`" alt="" />
            <a class="slide-msk" :title="album.name" href="/#"></a>
            <a class="slide-icon-play icon-all" title="播放" href="/#"></a>
          </div>
          <p class="slide-text">
            <a class="slide-name" :title="album.name" href="/#">{{ album.name }}</a>
          </p>
          <p class="slide-text">
            <a class="slide-author" :title="album.artist.name" href="/#">{{ album.artist.name }}</a>
          </p>
        </div>
      </div>
    </div>
    <!-- 左右按钮 -->
    <div class="swiper-button-next disc-button-next"></div>
    <div class="swiper-button-prev disc-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "DiscoverNewDiscCarousel",
  props: ["discoverNewDisc"],
  data() {
    return {
      // 轮播容器
      mySwiperSub: {},
    };
  },
  mounted() {},
  watch: {
    // 监听 discoverNewDisc 数据
    discoverNewDisc: {
      handler() {
        this.$nextTick(() => {
          // 初始化轮播容器
          this.initSwiper();
        });
      },
    },
  },
  destroy() {
    this.mySwiperSub.destroy();
  },
  methods: {
    // 初始化轮播容器
    initSwiper() {
      this.mySwiperSub = new Swiper(this.$refs.mySwiperSub, {
        speed: 800,
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 5, // 能够同时显示的数量
        slidesPerGroup: 5, // 一组显示的数量
        // spaceBetween: 15,
        observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observeParents: true, // 当Swiper的祖先元素变化时
        // observeSlideChildren: true, // 子slide更新时，swiper是否更新
        loopFillGroupWithBlank: false, // 为group填充空白slide
        // runCallbacksOnInit: false, // 初始化slide不是第一个 就会触发，可以关掉

        // 前进后退按钮
        navigation: {
          nextEl: ".disc-button-next",
          prevEl: ".disc-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-icon-index {
  background: url(~@/assets/images/index.png) no-repeat;
}
.swiper-icon-coverall {
  background: url(~@/views/Discover/Discover/images/coverall.png) no-repeat;
}
.my-button-public {
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
  margin-top: 0;
}

// 清除默认样式
.swiper-button-next,
.swiper-button-prev {
  &:after {
    display: none;
  }
}

.my-swiper {
  // swiper 容器
  .swiper-container {
    float: left;
    width: 645px;
    height: 180px;
    margin-top: 28px;
    overflow: hidden;

    .swiper-wrapper {
      // 匀速运动
      -webkit-transition-timing-function: linear; /*之前是ease-out*/
      -moz-transition-timing-function: linear;
      -ms-transition-timing-function: linear;
      -o-transition-timing-function: linear;
      transition-timing-function: linear;
      .my-swiper-slide {
        @extend .swiper-icon-index;
        float: left;
        display: inline;
        width: 118px !important;
        height: 150px;
        margin-left: 11px;
        margin-right: 0 !important;
        background-position: -260px 100px;
        .slide-disc {
          position: relative;
          display: block;
          width: 100px;
          height: 100px;
          margin-bottom: 7px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }

          // 图片的 a 标签 使得图片可点击
          .slide-msk {
            @extend .swiper-icon-coverall;
            position: absolute;
            top: 0;
            left: 0;
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
          }
          &:hover {
            display: inline-block;
            .slide-icon-play {
              display: inline-block;
            }
          }
          // 播放按钮
          .slide-icon-play {
            display: none;
            position: absolute;
            right: 10px;
            bottom: 5px;
            left: 72px;
            width: 22px;
            height: 22px;
            background-position: 0 -85px;
            &:hover {
              background-position: 0 -110px;
            }
          }
        }

        .slide-name {
          color: #000;
          &:hover {
            text-decoration: underline;
          }
        }
        .slide-author {
          color: #666;
          &:hover {
            text-decoration: underline;
          }
        }

        // 新碟上架文本区域
        .slide-text {
          width: 90%;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }
  // 自定义后退按钮
  .disc-button-prev {
    @extend .swiper-icon-index;
    @extend .my-button-public;
    left: 4px;
    background-position: -260px -75px;
  }
  // 自定义前进按钮
  .disc-button-next {
    @extend .swiper-icon-index;
    @extend .my-button-public;
    background-position: -300px -75px;
  }
}
</style>
