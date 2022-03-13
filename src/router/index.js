import Vue from "vue";
import VueRouter from "vue-router";
// 引入路由
import routes from "./routes";

Vue.use(VueRouter);

/* 
  重写 push|replace
  说明: 先把 VueRouter 原型对象的 push|replace 保存一份
 */
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  routes,
});

export default router;
