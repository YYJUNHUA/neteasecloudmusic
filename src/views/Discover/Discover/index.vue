<template>
  <div class="container">
    <div class="container-carousel">
      <DiscoverCarousel :bannersLists="bannersLists" />
    </div>
    <div class="container-module">
      <div class="module-left">
        <div class="left-wrap">
          <DiscoverRecommend :personalizedLists="personalizedLists" />
          <DiscoverNewDisc :albumNewestLists="albumNewestLists" />
          <DiscoverSongList :concatTopAndDataLists="concatTopAndDataLists" />
        </div>
      </div>
      <div class="module-right">
        <div class="right-wrap">
          <DiscoverLogin />
          <DiscoverInSinger :artistLists="artistLists" />
          <DiscoverHotAnchor :djTopListPopularLists="djTopListPopularLists" />
        </div>
      </div>
    </div>
    <a class="back-top sprite" id="backTop" title="回到顶部" href="#">回到顶部</a>
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
import { mapState } from "vuex";
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "Discover",
  data() {
    return {};
  },
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

    // 获取首页轮播图数据
    this.getBannersDatas();
    // 获取推荐歌单(首页热门推荐)列表
    this.getPersonalizedDatas();
    // 获取首页热门歌手数据
    this.getTopArtistsDatas();
    // 获取首页新碟上架数据
    this.getAlbumNewestDatas();
    // 获取所有榜单数据、首页飙升榜、新歌榜、原创榜数据
    this.getDiscoverTopLists();
    // 获取首页热门主播数据
    this.getDjTopListPopularDatas();
  },
  computed: {
    ...mapState({
      // 首页轮播图数据
      bannersLists: state => state.discover.bannersLists,
      // 首页推荐歌单(首页热门推荐)列表
      personalizedLists: state => state.discover.personalizedLists,
      // 首页新碟上架数据
      albumNewestLists: state => state.discover.albumNewestLists,
      // 获取所有榜单数据
      topLists: state => state.discover.topLists,
      // 获取首页飙升榜单数据
      soaringLists: state => state.discover.soaringLists,
      // 获取首页新歌榜单数据
      newSongLists: state => state.discover.newSongLists,
      // 获取首页原创榜单数据
      originalLists: state => state.discover.originalLists,
      // 获取首页热门歌手数据
      topArtistsLists: state => state.discover.topArtistsLists,
      // 获取首页指定的歌手详情数据
      artistLists: state => state.discover.artistLists,
      // 获取首页热门主播的数据
      djTopListPopularLists: state => state.discover.djTopListPopularLists,
    }),
    // 获取前三个榜单
    discoverTopLists() {
      return this.topLists.filter((item, index) => {
        return index < 3;
      });
    },
    // 整合前三榜单及数据
    concatTopAndDataLists() {
      let originArr = cloneDeep(this.discoverTopLists);
      originArr.forEach((item, index) => {
        if (index == 0) {
          item.songLists = cloneDeep(this.soaringLists);
        } else if (index == 1) {
          item.songLists = cloneDeep(this.newSongLists);
        } else {
          item.songLists = cloneDeep(this.originalLists);
        }
      });
      return originArr;
    },
    // 获取热门歌手的 id
    getArtistId() {
      let arr = [];
      this.topArtistsLists.forEach(item => {
        arr.push(item.id);
      });
      return arr;
    },
  },
  watch: {
    // 监测热门歌手 id 是否生成，根据 id 获取指定的歌手详情数据
    getArtistId: {
      handler() {
        const { getArtistId } = this;
        this.getArtistById(getArtistId);
      },
    },
  },
  methods: {
    // 监听滚动条的回调函数(回到顶部)
    handleScroll() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let backTop = document.querySelector("#backTop");
      if (scrollTop > 0) backTop.style.display = "block";
      else backTop.style.display = null;
    },
    // 派发 action 获取轮播数据
    getBannersDatas() {
      this.$store.dispatch("getBannersLists");
    },
    // 派发 action 获取推荐歌单(首页热门推荐)列表
    getPersonalizedDatas() {
      this.$store.dispatch("getPersonalizedLists", 8);
    },
    // 派发 action 获取首页新碟上架数据
    getAlbumNewestDatas() {
      this.$store.dispatch("getAlbumNewestLists");
    },
    // 派发 action 获取首页飙升榜、新歌榜、原创榜数据
    getDiscoverTopLists() {
      // 获取所有榜单数据
      this.$store.dispatch("getTopLists");
      // 飙升榜
      this.$store.dispatch("getSoaringLists", { id: 19723756, limit: 10 });
      // 新歌榜
      this.$store.dispatch("getNewSongLists", { id: 3779629, limit: 10 });
      // 原创榜
      this.$store.dispatch("getOriginalLists", { id: 2884035, limit: 10 });
    },
    // 派发 action 获取首页热门歌手数据
    getTopArtistsDatas() {
      this.$store.dispatch("getTopArtistsLists", { limit: 5, offset: "" });
    },
    // 派发 action 根据 id 获取指定的歌手详情数据
    getArtistById(id) {
      this.$store.dispatch("getArtistDetailLists", id);
    },
    // 派发 action 获取首页热门主播数据
    getDjTopListPopularDatas() {
      this.$store.dispatch("getDjTopListPopularLists", 5);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  clear: both;
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
