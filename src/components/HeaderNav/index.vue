<template>
  <div class="header-nav">
    <a class="header-nav-title" href="/#">{{ title }}</a>
    <div class="header-nav-tab" v-show="isRecommend">
      <a href="/#">华语</a>
      <span class="nav-tab-line">|</span>
      <a href="/#">流行</a>
      <span class="nav-tab-line">|</span>
      <a href="/#">摇滚</a>
      <span class="nav-tab-line">|</span>
      <a href="/#">民谣</a>
      <span class="nav-tab-line">|</span>
      <a href="/#">电子</a>
    </div>
    <span class="header-nav-more">
      <a href="/#">更多</a>
      <i class="nav-more-icon">&nbsp;</i>
    </span>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ["isRecommend", "title"],
};
</script>

<style lang="scss" scoped>
.discover-icon {
  background: url(~@/views/Discover/images/index.png) no-repeat 0 9999px;
}

.header-nav {
  @extend .discover-icon;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  // 导航标题
  .header-nav-title {
    float: left;
    font-size: 20px;
    font-weight: normal;
    color: #333;
    line-height: 28px;
  }
  // 导航链接
  .header-nav-tab {
    float: left;
    margin: 7px 0 0 20px;
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
    .nav-tab-line {
      margin: 0 13px;
      color: #ccc;
    }
  }

  // 更多
  .header-nav-more {
    float: right;
    margin-top: 9px;
    a {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
    .nav-more-icon {
      @extend .discover-icon;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
}
</style>