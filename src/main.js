import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HeaderNav from "@/components/HeaderNav";

// 公共样式
import "@/styles/index.scss";
// swiper 样式
import "swiper/css/swiper.css";

// 全局组件
Vue.component(HeaderNav.name, HeaderNav);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
