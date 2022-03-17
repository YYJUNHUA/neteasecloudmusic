<template>
  <div class="big-carousel" ref="bigCarousel" :style="{ backgroundImage: bigImgObj }">
    <div class="my-carousel-wrap">
      <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping" v-for="(banner, index) in bannersLists" :key="index">
            <div class="my-carousel-img">
              <a href="/#">
                <img :src="`${banner.imageUrl}?imageView&quality=89`" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper-no-swiping" @click="clickPagination"></div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev my-button-prev" @click="slideNextOrPrev('prev')"></div>
      <div class="swiper-button-next my-button-next" @click="slideNextOrPrev('next')"></div>
      <!-- 下载客户端 -->
      <div class="download">
        <a class="download-btn" href="/#">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        <span class="download-shadow"></span>
        <span class="download-shadow-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import throttle from "lodash/throttle";

export default {
  name: "DiscoverCarousel",
  props: ["bannersLists"],
  data() {
    return {
      mySwiper: {},
      // 分页器效果中的定时器
      paginationTimer: null,
      // 大背景模糊图的索引
      currentBgIndex: 0,
    };
  },
  mounted() {
    // 改变背景大图
    this.changeBigImage();
  },
  destroy() {
    this.mySwiper.destroy();
  },
  watch: {
    bannersLists: {
      handler() {
        this.$nextTick(() => {
          this.initSwiper();
          this.$emit("changeImg", { index: 0 });
        });
      },
    },
  },
  computed: {
    // 获取轮播所有背景图
    bannersImgLists() {
      return this.bannersLists.map(item => {
        return `${item.imageUrl}?imageView&blur=40x20`;
      });
    },
    // 轮播大背景模糊图
    bigImgObj() {
      return `url(${this.bannersImgLists[this.currentBgIndex]})`;
    },
  },
  methods: {
    // 初始化 swiper
    initSwiper() {
      this.mySwiper = new Swiper(this.$refs.mySwiper, {
        speed: 2500,
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        effect: "fade", // 切换效果
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量
        fadeEffect: {
          crossFade: true, // 开启淡出
        },
        // 自动轮播
        autoplay: {
          delay: 3000,
          // 用户操作后不会重新启动自动轮播
          disableOnInteraction: false,
          // 等待过渡完毕
          waitForTransition: true,
        },
        on: {
          autoplay: () => {
            this.changePagination();
          },
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          type: "custom",

          renderCustom: (swiper, current, total) => {
            let paginationHtml = "";
            for (var i = 1; i <= total; i++) {
              // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
              paginationHtml +=
                i == current
                  ? `<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>`
                  : `<span class="swiper-pagination-customs"></span>`;
            }
            return paginationHtml;
          },
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        },
      });
      // 鼠标悬停 关掉自动轮播
      this.$refs.bigCarousel.onmouseover = () => {
        this.mySwiper.autoplay.stop();
      };
      // 鼠标离开 开启自动轮播
      this.$refs.bigCarousel.onmouseleave = () => {
        this.mySwiper.autoplay.start();
      };
    },
    // 点击分页器换页的回调
    clickPagination: throttle(function (event) {
      let currentIndex = null;
      // 获取点击的 span 节点
      let span = event.target;
      // 获取 swiper 的所有分页器节点
      let spanList = Array.from(this.mySwiper.pagination.el.childNodes);
      if (span.className.indexOf("swiper-pagination-customs-active") == -1) {
        // 查找点击的节点所在的索引位置
        let index = spanList.indexOf(span) != -1 ? spanList.indexOf(span) : null;
        if (index == null) return;
        else {
          this.mySwiper.slideToLoop(index, 300, false);
          currentIndex = this.mySwiper.realIndex;
          this.$emit("changeImg", { index: currentIndex });
        }
      }
    }, 50),
    // 自动轮播分页器改变轮播图
    changePagination() {
      // 获取 swiper 的所有分页器节点
      let spanList = Array.from(this.mySwiper.pagination.el.childNodes);
      spanList.forEach(item => {
        if (item.className.indexOf("swiper-pagination-customs-active") != -1) {
          item.style.backgroundPosition = "3px -343px";
          this.paginationTimer = setTimeout(() => {
            item.style.backgroundPosition = "-16px -343px";
            let currentIndex = this.mySwiper.realIndex;
            this.$emit("changeImg", { index: currentIndex });
          }, 1000);
          // 通过$once来监听定时器，在 beforeDestroy 钩子可以被清除。
          this.$once("hook:beforeDestroy", () => {
            clearTimeout(this.paginationTimer);
          });
        }
      });
    },
    // 点击前进后退按钮改变轮播图
    slideNextOrPrev: throttle(function (status) {
      let currentIndex = null;
      status == "next" ? this.mySwiper.slideNext(100, false) : this.mySwiper.slidePrev(100, false);
      currentIndex = this.mySwiper.realIndex;
      this.$emit("changeImg", { index: currentIndex });
    }, 50),
    // 改变背景大图的回调
    changeBigImage() {
      // 执行自定义事件
      this.$on("changeImg", ({ index }) => {
        // 修改索引
        this.currentBgIndex = index;
      });
    },
  },
};
</script>

<style lang="scss">
// 下载的阴影部分继承
.download-shadow {
  display: block;
  _display: none;
  position: absolute;
  top: 0;
  left: -20px;
  width: 20px;
  height: 285px;
  background-position: -1px 0;
}
// 按钮公共样式继承
.my-button-public {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
  background: url("./images/banner.png") 0 9999px no-repeat;
}
// 下载客户端部分的背景继承
.download-bgImg {
  background: url("./images/download.png") no-repeat 0 0;
}

// 清除默认样式
.swiper-button-next,
.swiper-button-prev {
  &:after {
    display: none;
  }
}
.big-carousel {
  width: 100%;
  height: 100%;
  background-size: 6000px;
  background-position: center center;
  .my-carousel-wrap {
    $swiper-width: 982px;
    $swiper-height: 285px;
    position: relative;
    width: $swiper-width;
    height: 285px;
    margin: 0px auto;

    .swiper-container {
      // 轮播容器
      // $swiper-width: 100%;
      width: $swiper-width;
      height: $swiper-height;
      .my-carousel-img {
        // 轮播图样式
        width: 100%;
        height: $swiper-height;
        overflow: hidden;
        img {
          display: block;
          width: 730px;
          height: $swiper-height;
          backface-visibility: hidden;
        }
      }
    }

    // 下载客户端
    .download {
      @extend .download-bgImg;
      position: absolute;
      top: 0;
      right: -1px;
      z-index: 20;
      width: 254px;
      height: 285px;
      .download-btn {
        @extend .download-bgImg;
        display: block;
        height: 56px;
        margin: 186px 0 0 19px;
        text-indent: -9999px;
        background-position: 0 9999px;
        &:hover {
          background-position: 0 -290px;
          text-decoration: none;
        }
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }

      .download-shadow-right {
        @extend .download-shadow;
        left: auto;
        right: -20px;
        background-position: -20px 0;
      }
    }

    .swiper-pagination-custom {
      // 自定义分页器容器
      position: absolute;
      top: 259px;
      left: 0px;
      width: 730px;
      height: 20px;
      text-align: center;
    }
    // 自定义分页器的样式
    .swiper-pagination-customs {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("./images/banner.png") 0 9999px no-repeat;
      background-position: 3px -343px;
      cursor: pointer;
      &:hover {
        background-position: -16px -343px;
      }
    }
    // 自定义分页器激活时
    .swiper-pagination-customs-active {
      background-position: -16px -343px;
    }

    .my-button-next {
      // 继承 .my-button-public
      @extend .my-button-public;
      right: -68px;
      background-position: 0 -508px;
      &:hover {
        background-position: 0 -578px;
      }
    }
    .my-button-prev {
      @extend .my-button-public;
      left: -68px;
      background-position: 0 -360px;
      &:hover {
        background-position: 0 -430px;
      }
    }
  }
}
</style>
