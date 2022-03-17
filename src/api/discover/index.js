import request from "@/utils/request";

// 接口: 获取轮播数据 列表
export const reqGetBannersList = () => request({ url: "/banner", method: "GET" });
