<template>
  <div class="singer">
    <h3 class="singer-h3">
      <span class="fl">入驻歌手</span>
      <a href="/#">查看全部 ></a>
    </h3>
    <ul class="singer-enter">
      <li>
        <a class="enter-btn" href="/#">
          <div class="btn-head">
            <img src="./images/test.jpg" alt="" />
          </div>
          <div class="btn-info">
            <h4>
              <span>张惠妹aMEI</span>
            </h4>
            <p>台湾歌手张惠妹</p>
          </div>
        </a>
      </li>
      <li>
        <a class="enter-btn" href="/#">
          <div class="btn-head">
            <img src="./images/test.jpg" alt="" />
          </div>
          <div class="btn-info">
            <h4>
              <span>张惠妹aMEI</span>
            </h4>
            <p>台湾歌手张惠妹</p>
          </div>
        </a>
      </li>
      <li>
        <a class="enter-btn" href="/#">
          <div class="btn-head">
            <img src="./images/test.jpg" alt="" />
          </div>
          <div class="btn-info">
            <h4>
              <span>张惠妹aMEI</span>
            </h4>
            <p>台湾歌手张惠妹</p>
          </div>
        </a>
      </li>
      <li>
        <a class="enter-btn" href="/#">
          <div class="btn-head">
            <img src="./images/test.jpg" alt="" />
          </div>
          <div class="btn-info">
            <h4>
              <span>张惠妹aMEI</span>
            </h4>
            <p>台湾歌手张惠妹</p>
          </div>
        </a>
      </li>
      <li>
        <a class="enter-btn" href="/#">
          <div class="btn-head">
            <img src="./images/test.jpg" alt="" />
          </div>
          <div class="btn-info">
            <h4>
              <span>张惠妹aMEI</span>
            </h4>
            <p>台湾歌手张惠妹</p>
          </div>
        </a>
      </li>
    </ul>
    <div>
      <a class="music-btn btn2" hidefocus="true" href="/#">
        <span class="btn2">申请成为网易音乐人</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverInSinger",
};
</script>

<style lang="scss" scoped>
.singer-btn2-span {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  *line-height: 32px;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}

.singer {
  margin-top: 15px;
  // 头部
  .singer-h3 {
    position: relative;
    *zoom: 1;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    a {
      float: right;
      font-weight: normal;
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  // 歌手部分
  .singer-enter {
    margin: 6px 0 14px 20px;
    // 解决塌陷
    overflow: hidden;
    li {
      float: left;
      width: 210px;
      height: 62px;
      margin-top: 14px;
      background: #fafafa;
      // 入驻歌手按钮 查看信息
      .enter-btn {
        float: left;
        width: 210px;
        height: 62px;
        color: #333;
        background: #fafafa;
        &:hover {
          background: #f4f4f4;
        }
        // 歌手头像
        .btn-head {
          float: left;
          width: 62px;
          height: 62px;
          // 头像图片
          img {
            float: left;
            width: 62px;
            height: 62px;
          }
        }

        // 歌手信息
        .btn-info {
          float: left;
          width: 133px;
          height: 60px;
          padding-left: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;
          h4 {
            margin-top: 8px;
            span {
              display: inline-block;
              width: 90%;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
          }
          p {
            width: 90%;
            margin-top: 8px;
            color: #666;
          }
        }
      }
    }
  }
  // 申请音乐人
  .music-btn {
    @extend .singer-btn2-span;
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    padding: 0 5px 0 0;
    white-space: nowrap;
    background-position: right -100px;
    &:hover {
      color: #333;
      background-position: right -182px;
      span {
        color: #333;
        background-position: 0 -141px;
      }
    }
    span {
      @extend .singer-btn2-span;
      width: 170px;
      font-weight: bold;
      color: #333;
      padding: 0 15px 0 20px;
      pointer-events: none;
      background-position: 0 -59px;
    }
  }
}
</style>