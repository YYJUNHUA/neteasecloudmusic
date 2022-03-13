<template>
  <div class="container">
    <div class="container-carousel">
      <DiscoverCarousel />
    </div>
    <div class="container-module">
      <div class="module-left">
        <div class="left-wrap">
          <DiscoverRecommend />
          <DiscoverNewDisc />
          <DiscoverSongList />
        </div>
      </div>
      <div class="module-right">
        <div class="right-wrap">
          <DiscoverLogin />
          <DiscoverInSinger />
          <DiscoverHotAnchor />
        </div>
      </div>
    </div>
    <a class="back-top sprite" id="backTop" title="回到顶部" href="#"
      >回到顶部</a
    >
  </div>
</template>

<script>
import DiscoverCarousel from "./DiscoverCarousel";
import DiscoverRecommend from "./DiscoverRecommend";
import DiscoverNewDisc from "./DiscoverNewDisc";
import DiscoverSongList from "./DiscoverSongList";
import DiscoverLogin from "./DiscoverLogin";
import DiscoverInSinger from "./DiscoverInSinger";
import DiscoverHotAnchor from "./DiscoverHotAnchor";

export default {
  name: "Discover",
  components: {
    DiscoverCarousel,
    DiscoverRecommend,
    DiscoverNewDisc,
    DiscoverSongList,
    DiscoverLogin,
    DiscoverInSinger,
    DiscoverHotAnchor,
  },
  mounted() {
    // 监听滚动条
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      let backTop = document.querySelector("#backTop");
      if (scrollTop > 0) backTop.style.display = "block";
      else backTop.style.display = null
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  clear: both;
  // 轮播图位置
  .container-carousel {
    background-image: url(~@/views/Discover/DiscoverCarousel/images/testbg.jpg);
    background-size: 6000px;
    background-position: center center;
  }
  // 模块区域位置
  .container-module {
    width: 980px;
    min-height: 700px;
    _height: 700px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url("./images/wrap1.png") repeat-y 100% 100%;
    // 左边部分模块
    .module-left {
      display: inline-block;
      width: 730px;
      padding: 20px 20px 40px;
      box-sizing: border-box;
    }

    .module-right {
      position: relative;
      float: right;
      width: 250px;
      zoom: 1;
    }
  }

  // 回到顶部按钮
  .back-top {
    z-index: 1000;
    display: none;
    position: fixed;
    text-indent: -9999px;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background-position: -265px -47px;
  }
}
</style>
