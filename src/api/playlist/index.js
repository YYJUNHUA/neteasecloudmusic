import request from "@/utils/request";

// 接口: 获取 推荐歌单 列表
export const reqPersonalized = limit =>
  request({
    url: "/personalized",
    method: "GET",
    params: { limit },
  });

// 接口: 获取 歌单所有歌曲(可获取首页榜单) 列表
export const reqPlayListTrackAll = params => request({ url: "/playlist/track/all", method: "GET", params });
