import { reqGetBannersList } from "@/api";

const state = {};
const mutations = {};
const actions = {
  // 获取轮播数据
  async getBannersData({ commit }) {
    let result = await this.reqGetBannersList();
    console.log(result);
  },
};

export default {
  state,
  mutations,
  actions,
};
