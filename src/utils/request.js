import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // 跨域请求需要携带
  withCredentials: true,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 解决 460 cheating异常
    config.headers["X-Real-IP"] = "211.161.244.70";

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    return res;
  },
  error => {
    console.log("err" + error);
    return Promise.reject(error);
  },
);

export default service;
