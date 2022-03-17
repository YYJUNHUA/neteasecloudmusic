import request from "@/utils/request";

// 接口: 获取 (首页新碟上架)最新专辑 列表
export const reqAlbumNewest = () => request({ url: "/album/newest", method: "GET" });
