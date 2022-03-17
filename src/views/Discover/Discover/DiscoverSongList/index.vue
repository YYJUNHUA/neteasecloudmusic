<template>
  <div class="song-list">
    <HeaderNav :isRecommend="false" title="榜单" />
    <div class="list-blist">
      <dl class="blist-blk" v-for="(top, index) in concatTopAndDataLists" :key="index">
        <dt class="blk-top">
          <div class="top-bigImg">
            <img :src="`${top.coverImgUrl}?param=100y100`" alt="" />
            <a class="bigImg-msk" :title="top.name" href="/#"></a>
          </div>
          <div class="top-title">
            <a class="title-h3" href="/#">
              <h3>{{ top.name }}</h3>
            </a>
            <div class="title-btn">
              <a class="btn-1" href="/#"></a>
              <a class="btn-2" href="/#"></a>
            </div>
          </div>
        </dt>
        <dd>
          <ol>
            <li
              v-for="(song, index) in top.songLists"
              :key="index"
              :class="{ hover: currentIndex == index }"
              @mouseenter="changeIndex(index)"
            >
              <span class="no-top">{{ index + 1 }}</span>
              <a class="top-song-name" :title="song.name" href="/#">{{ song.name }}</a>
              <div class="top-oper">
                <a class="oper-play" title="播放" href="/#"></a>
                <a class="oper-add icon" title="添加到播放列表" href="/#"></a>
                <a class="oper-collection" title="收藏" href="/#"></a>
              </div>
            </li>
          </ol>
          <div class="more">
            <a href="/#">查看全部></a>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverSongList",
  props: ["concatTopAndDataLists"],
  data() {
    return {
      // 鼠标选中的歌曲的索引
      currentIndex: -1,
    };
  },
  methods: {
    // 修改选中歌曲的索引
    changeIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-icon-index-bill {
  background: url("./images/index_bill.png") no-repeat;
}
.list-icon-coverall {
  background: url(~@/views/Discover/Discover/images/coverall.png) no-repeat;
}
.list-icon-index {
  background: url(~@/assets/images/index.png) no-repeat;
}

.song-list {
  clear: both;
  .list-blist {
    @extend .list-icon-index-bill;
    height: 472px;
    margin-top: 20px;
    // padding-left: 1px;
    box-sizing: content-box;
    .blist-blk {
      float: left;
      width: 230px;
      .blk-top {
        height: 100px;
        padding: 20px 0 0 19px;
        // 榜单大图
        .top-bigImg {
          position: relative;
          float: left;
          display: inline;
          width: 80px;
          height: 80px;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .bigImg-msk {
            @extend .list-icon-coverall;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: -145px -57px;
          }
        }
        // 榜单名称
        .top-title {
          float: left;
          width: 116px;
          margin: 6px 0 0 10px;
          .title-h3 {
            text-decoration: none;
            color: #333;
            &:hover {
              text-decoration: underline;
            }
            h3 {
              width: 100%;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
          }
          .title-btn {
            margin-top: 10px;
            a {
              @extend .list-icon-index;
              display: block;
              float: left;
              width: 22px;
              height: 22px;
              margin-right: 10px;
              text-indent: -9999px;
            }
            .btn-1 {
              background-position: -267px -205px;
              &:hover {
                background-position: -267px -235px;
              }
            }
            .btn-2 {
              background-position: -300px -205px;
              &:hover {
                background-position: -300px -235px;
              }
            }
          }
        }
      }

      // 榜单列表
      ol {
        height: 319px;
        margin-left: 50px;
        line-height: 32px;
        li {
          height: 32px;
          * {
            vertical-align: middle;
          }
          &:hover {
            .top-song-name {
              width: 96px;
              text-decoration: underline;
            }
            .top-oper {
              display: block;
            }
          }
          .no-top {
            float: left;
            position: relative;
            width: 35px;
            height: 32px;
            margin-left: -35px;
            text-align: center;
            color: #c10d0c;
            font-size: 16px;
          }
          .top-song-name {
            float: left;
            width: 170px;
            height: 32px;
            color: #000;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
          .top-oper {
            display: none;
            float: right;
            width: 82px;
            margin-top: 7px;
            a {
              float: left;
              width: 17px;
              height: 17px;
              margin-right: 10px;
            }
            // 播放按钮
            .oper-play {
              @extend .list-icon-index;
              background-position: -267px -268px;
              &:hover {
                background-position: -267px -288px;
              }
            }
            // 添加按钮
            .oper-add {
              display: inline-block;
              overflow: hidden;
              margin: 2px 6px 0 0;
              background-position: 0 -700px;
              &:hover {
                background-position: -22px -700px;
              }
            }
            // 收藏按钮
            .oper-collection {
              @extend .list-icon-index;
              background-position: -297px -268px;
              &:hover {
                background-position: -297px -288px;
              }
            }
          }
        }
      }

      // 查看更多
      .more {
        clear: both;
        height: 32px;
        margin-right: 32px;
        text-align: right;
        line-height: 32px;
        a {
          color: #000;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
