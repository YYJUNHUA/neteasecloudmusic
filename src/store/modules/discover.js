import { reqGetBannersList } from "@/api/discover";
import { reqTopPlayList, reqPlayListTrackAll } from "@/api/playlist";
import { reqAlbumNewest } from "@/api/album";
import { reqTopList } from "@/api/toplist";
import { reqTopArtists, reqArtistDetail } from "@/api/artist";
import { reqDjTopListPopular } from "@/api/djradio";

const getDefaultState = () => {
  return {
    // 首页轮播 列表
    bannersLists: [],
    // (网友精选)歌单(首页热门推荐)列表
    topPlayLists: [],
    // (首页新碟上架)最新专辑 列表
    albumNewestLists: [],
    // 获取所有榜单 列表
    topLists: [],
    // 获取飙升榜 列表
    soaringLists: [],
    // 获取新歌榜 列表
    newSongLists: [],
    // 获取原创榜 列表
    originalLists: [],
    // 歌单所有歌曲(可获取首页榜单)数据列表
    playListTrackAllLists: [],
    // 获取首页热门歌手 列表
    topArtistsLists: [],
    // 获取首页热门歌手的详情 列表
    artistLists: [],
    // 获取首页热门主播 列表
    djTopListPopularLists: [],
  };
};
const state = getDefaultState();
const mutations = {
  // 首页轮播 列表
  GETBANNERSLISTS(state, bannersLists) {
    state.bannersLists = bannersLists;
  },
  // (网友精选)歌单(首页热门推荐)列表
  GETTOPPLAYLISTS(state, topPlayLists) {
    state.topPlayLists = topPlayLists;
  },
  // (首页新碟上架)最新专辑 列表
  GETALBUMNEWESTLISTS(state, albumNewestLists) {
    state.albumNewestLists = albumNewestLists;
  },
  // 所有榜单 列表
  GETTOPLISTS(state, topLists) {
    state.topLists = topLists;
  },
  // 飙升榜 列表
  GETSOARINGLISTS(state, soaringLists) {
    state.soaringLists = soaringLists;
  },
  // 新歌榜 列表
  GETNEWSONGLISTS(state, newSongLists) {
    state.newSongLists = newSongLists;
  },
  // 原创榜 列表
  GETORIGINALLISTS(state, originalLists) {
    state.originalLists = originalLists;
  },
  // 首页热门歌手 列表
  GETTOPARTISTSLISTS(state, topArtistsLists) {
    state.topArtistsLists = topArtistsLists;
  },
  // 首页歌手详情 列表
  GETARTISTDETAILLISTS(state, artistLists) {
    state.artistLists = artistLists;
  },
  // 首页热门主播 列表
  GETDJTOPLISTPOPULARLISTS(state, djTopListPopularLists) {
    state.djTopListPopularLists = djTopListPopularLists;
  },
};
const actions = {
  // 获取首页轮播 列表
  async getBannersLists({ commit }) {
    let result = await reqGetBannersList();
    if (result.code === 200) {
      commit("GETBANNERSLISTS", result.banners);
    }
  },
  // 获取(网友精选)歌单(首页热门推荐)列表
  async getTopPlayLists({ commit }, params) {
    let result = await reqTopPlayList(params);
    if (result.code === 200) {
      commit("GETTOPPLAYLISTS", result.playlists);
    }
  },
  // 获取 (首页新碟上架)最新专辑 列表
  async getAlbumNewestLists({ commit }) {
    let result = await reqAlbumNewest();
    if (result.code === 200) {
      commit("GETALBUMNEWESTLISTS", result.albums);
    }
  },
  // 获取所有榜单 列表
  async getTopLists({ commit }) {
    let result = await reqTopList();
    if (result.code === 200) {
      commit("GETTOPLISTS", result.list);
    }
  },
  // 获取首页飙升榜单 列表
  async getSoaringLists({ commit }, params) {
    let result = await reqPlayListTrackAll(params);
    if (result.code === 200) {
      commit("GETSOARINGLISTS", result.songs);
    }
  },
  // 获取首页新歌榜单 列表
  async getNewSongLists({ commit }, params) {
    let result = await reqPlayListTrackAll(params);
    if (result.code === 200) {
      commit("GETNEWSONGLISTS", result.songs);
    }
  },
  // 获取首页原创榜单 列表
  async getOriginalLists({ commit }, params) {
    let result = await reqPlayListTrackAll(params);
    if (result.code === 200) {
      commit("GETORIGINALLISTS", result.songs);
    }
  },
  // 获取 热门歌手 列表
  async getTopArtistsLists({ commit }, params) {
    let result = await reqTopArtists(params);
    if (result.code == 200) {
      commit("GETTOPARTISTSLISTS", result.artists);
    }
  },
  // 根据 id 获取首页指定的 歌手详情 列表
  getArtistDetailLists({ commit }, id) {
    let artistLists = [];
    // 发送请求获取相对应的歌手的详情
    id.forEach(async item => {
      let result = await reqArtistDetail(item);
      if (result.code == 200) {
        artistLists.push(result.data);
      }
    });
    commit("GETARTISTDETAILLISTS", artistLists);
  },
  // 获取 首页热门主播 列表
  async getDjTopListPopularLists({ commit }, limit) {
    let result = await reqDjTopListPopular(limit);
    if (result.code === 200) {
      commit("GETDJTOPLISTPOPULARLISTS", result.data.list);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
