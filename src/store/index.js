import Vue from "vue";
import Vuex from "vuex";
// 引入小仓库
import getters from "./getters";
import discover from "./modules/discover";
import playlist from "./modules/playlist";
import album from "./modules/album";
import toplist from "./modules/toplist";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    discover,
    playlist,
    album,
    toplist,
  },
  getters,
});
