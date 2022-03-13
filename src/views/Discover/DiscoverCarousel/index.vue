<template>
  <div class="my-carousel-wrap">
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(attr, index) in test" :key="index">
          <div class="my-carousel-img">
            <a href="/#">
              <img src="./images/test.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div
        class="swiper-pagination"
        @click="clickPagination"
        ref="pagination"
      ></div>
    </div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev my-button-prev"></div>
    <div class="swiper-button-next my-button-next"></div>
    <!-- 下载客户端 -->
    <div class="download">
      <a class="download-btn" href="/#">下载客户端</a>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      <span class="download-shadow"></span>
      <span class="download-shadow-right"></span>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "DiscoverCarousel",
  data() {
    return {
      test: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
      },
      mySwiper: {},
    };
  },
  mounted() {
    // 初始化 swiper
    this._initSwiper();
  },
  destroy() {
    this.mySwiper.destroy();
  },
  methods: {
    // 初始化 swiper
    _initSwiper() {
      this.mySwiper = new Swiper(this.$refs.mySwiper, {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, // 自动轮播
        effect: "fade", // 切换效果
        fadeEffect: {
          crossFade: true, // 开启淡出
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "custom",
          autoplayDisableOnInteraction: false,
          renderCustom: function (swiper, current, total) {
            var paginationHtml = "";
            for (var i = 0; i < total; i++) {
              // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
              paginationHtml +=
                i === current - 1
                  ? '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
                  : '<span class="swiper-pagination-customs"></span>';
            }
            return paginationHtml;
          },
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    // 点击分页器换页的回调
    clickPagination(event) {
      // 获取点击的 span 节点
      let span = event.target;
      // 获取 swiper 的所有分页器节点
      let lists = Array.from(this.$refs.pagination.childNodes);
      // 查找点击的节点所在的索引位置
      let index = lists.indexOf(span) != -1 ? lists.indexOf(span) : null;
      if (index != null) this.mySwiper.slideToLoop(index, 300, false);
      else return;
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
</style>
