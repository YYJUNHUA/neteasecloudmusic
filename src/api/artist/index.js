import request from "@/utils/request";

// 接口: 获取 热门歌手 列表
/* 
  可选参数: limit - 取出数量, 默认为 50
  offset - 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0 
*/
export const reqTopArtists = params => request({ url: "/top/artists", method: "GET", params });

// 接口: 根据 id 获取 歌手详情 列表
/* 
  必选参数: id - 歌手 id
*/
export const reqArtistDetail = id => request({ url: "/artist/detail", method: "GET", params: { id } });
