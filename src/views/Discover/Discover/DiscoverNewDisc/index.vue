<template>
  <div class="new-disc">
    <HeaderNav :isRecommend="false" title="新碟上架" />
    <div class="disc-carousel">
      <div class="carousel-inner">
        <DiscoverNewDiscCarousel :discoverNewDisc="discoverNewDisc" />
      </div>
    </div>
  </div>
</template>

<script>
import DiscoverNewDiscCarousel from "./DiscoverNewDiscCarousel";

export default {
  name: "DiscoverNewDisc",
  props: ["albumNewestLists"],
  components: {
    DiscoverNewDiscCarousel,
  },
  computed: {
    // 获取首页新碟上架前10首
    discoverNewDisc() {
      return this.albumNewestLists.filter((item, index) => {
        return index < 10;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.new-disc {
  margin-top: 35px;
  clear: both;
  .disc-carousel {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .carousel-inner {
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;
    }
  }
}
</style>
