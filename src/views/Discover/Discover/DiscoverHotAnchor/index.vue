<template>
  <div class="hot-anchor">
    <h3 class="anchor-h3">热门主播</h3>
    <ul class="anchor-list">
      <li v-for="auchor in djTopListPopularLists" :key="auchor.id">
        <a href="/#">
          <img :src="`${auchor.avatarUrl}?param=40y40`" alt="" />
        </a>
        <div class="list-info">
          <p>
            <a class="info-name" href="/#">{{ auchor.nickName }}</a>
          </p>
          <p class="info-desc">{{ auchor.nickName }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiscoverHotAnchor",
  props: ["djTopListPopularLists"],
};
</script>

<style lang="scss" scoped>
.hot-anchor {
  margin-top: 30px;
  // 热门主播标题
  .anchor-h3 {
    position: relative;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  // 主播列表区域
  .anchor-list {
    margin: 20px 0 0 20px;
    li {
      float: left;
      width: 210px;
      height: 50px;
      // 主播头像
      a {
        float: left;
        width: 40px;
        margin-right: 10px;
        color: #333;
        img {
          width: 40px;
          height: 40px;
          box-shadow: 0 0 1px #333333 inset;
        }
      }
      // 主播信息
      .list-info {
        float: left;
        width: 160px;
        line-height: 21px;
        * {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        p {
          width: 100%;
        }
        // 主播名字
        .info-name {
          display: inline-block;
          zoom: 1;
          max-width: 88%;
          vertical-align: middle;
          color: #000;
          &:hover {
            text-decoration: underline;
          }
        }
        // 介绍
        .info-desc {
          color: #666;
        }
      }
    }
  }
}
</style>
