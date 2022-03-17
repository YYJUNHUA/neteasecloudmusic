<template>
  <div class="login-myinfo">
    <p class="myinfo-note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a class="login-btn" href="/#">用户登录</a>
  </div>
</template>

<script>
export default {
  name: "DiscoverLogin",
};
</script>

<style lang="scss" scoped>
.login-icon-index {
  background: url(~@/assets/images/index.png) no-repeat 0 9999px;
}

.login-myinfo {
  @extend .login-icon-index;
  height: 126px;
  padding-top: 0;
  background-position: 0 0;
  // 信息文本
  .myinfo-note {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }
  // 用户登录按钮
  .login-btn {
    @extend .login-icon-index;
    display: block;
    width: 100px;
    height: 31px;
    margin: 0 auto;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
    }
  }
}
</style>
