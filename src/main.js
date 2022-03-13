import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HeaderNav from '@/components/HeaderNav'

import "@/styles/index.scss";
import "swiper/css/swiper.css";

Vue.component(HeaderNav.name, HeaderNav)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
