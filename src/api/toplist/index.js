import request from "@/utils/request";

// 接口: 获取 所有榜单 列表
export const reqTopList = () => request({ url: "/toplist", method: "GET" });
