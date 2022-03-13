import request from "@/utils/request";

// 获取轮播数据的接口
export const reqGetBannersList = () =>
  request({ url: "/banner", method: "GET" });
