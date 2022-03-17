import request from "@/utils/request";

// 接口: 电台 - 最热主播榜 列表
export const reqDjTopListPopular = limit => request({ url: "/dj/toplist/popular", method: "GET", params: { limit } });
