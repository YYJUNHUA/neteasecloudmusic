import Vue from "vue";
import Vuex from "vuex";
// 引入小仓库
import getters from "./getters";
import discover from "./modules/discover";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    discover,
  },
  getters,
});
