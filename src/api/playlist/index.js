import request from "@/utils/request";

// 接口: 获取 歌单 ( 网友精选碟 ) 列表
export const reqTopPlayList = params =>
  request({
    url: "/top/playlist",
    method: "GET",
    params,
  });

// 接口: 获取 歌单所有歌曲(可获取首页榜单) 列表
export const reqPlayListTrackAll = params => request({ url: "/playlist/track/all", method: "GET", params });
