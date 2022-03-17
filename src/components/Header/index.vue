<template>
  <div class="header">
    <div class="header-wrap">
      <h1 class="logo">
        <a href="/#">网易云音乐</a>
      </h1>
      <ul class="wrap-nav">
        <li>
          <a class="nav-select" href="/#">
            <span>发现音乐</span>
            <sub class="cor">&nbsp;</sub>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>我的音乐</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>关注</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>商城</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>音乐人</span>
          </a>
        </li>
        <li>
          <a href="/#">
            <span>下载客户端</span>
            <sup class="hot">&nbsp;</sup>
          </a>
        </li>
      </ul>
      <div class="wrap-login">
        <a href="/#">登录</a>
      </div>
      <div class="wrap-creators">
        <a href="/#">创作者中心</a>
      </div>
      <div class="wrap-search">
        <span class="search-bg">
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </span>
      </div>
    </div>
    <div class="sub-header">
      <div class="sub-header-wrap">
        <ul class="wrap-nav">
          <li>
            <!-- <a class="nav-select" href="/#">
              <span>推荐</span>
            </a> -->
            <router-link class="nav-select" to="/discover">
              <span>推荐</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="/#">
              <span> 排行榜 </span>
            </a> -->
            <router-link to="/discover/toplist">
              <span> 排行榜 </span>
            </router-link>
          </li>
          <li>
            <a href="/#">
              <span style="padding: 0 15px 0 11px">
                歌单
                <sub class="white-icon"></sub>
              </span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span>主播电台</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span>歌手</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span>新碟上架</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.logo,
.cor,
.hot,
.search-bg {
  background: url("./images/topbar.png") no-repeat 9999px;
}

$wrap-width: 1100px;
$height: 70px;
.header {
  position: relative;
  width: 100%;
  height: $height;
  background: #242424;
  .header-wrap {
    position: relative;
    width: $wrap-width;
    margin: 0 auto;
    .logo {
      float: left;
      width: 176px;
      height: $height;
      background-position: 0 0;
      a {
        float: left;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }
    .wrap-nav {
      float: left;
      li {
        position: relative;
        float: left;
        height: $height;
        .cor {
          display: block;
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
        }

        &:hover,
        .nav-select {
          background: #000;
          color: #fff;
        }
        a {
          display: inline-block;
          height: $height;
          padding: 0 19px;
          line-height: $height;
          color: #ccc;
        }
        span {
          font-size: 14px;
        }
        .hot {
          display: block;
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-position: -190px 0;
        }
      }
    }
    .wrap-login {
      display: flex;
      float: right;
      align-items: center;
      width: 28px;
      height: $height;
      margin: 0 0 0 20px;
      padding: 0 22px 0 0;
      a {
        display: inline-block;
        color: #999;
        &:hover {
          color: #787878;
          text-decoration: underline;
        }
      }
    }
    .wrap-creators {
      display: flex;
      float: right;
      align-items: center;
      width: 90px;
      height: $height;
      margin: 0 0 0 12px;
      a {
        width: 90px;
        height: 32px;
        padding: 0 0 0 16px;
        color: #ccc;
        line-height: 32px;
        border: 1px solid #4f4f4f;
        border-radius: 20px;
        box-sizing: border-box;
        &:hover {
          color: fff;
          text-decoration: none;
          border: 1px solid #ccc;
        }
      }
    }
    .wrap-search {
      $searchWidth: 158px;
      display: flex;
      float: right;
      align-items: center;
      width: $searchWidth;
      height: $height;
      .search-bg {
        $height: 32px;
        width: $searchWidth;
        height: $height;
        line-height: $height + 2px;
        background-color: #fff;
        background-position: 0 -99px;
        border-radius: 32px;
        input {
          width: 80%;
          margin: 0 0 0 30px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          &::-webkit-input-placeholder {
            color: #9b9b9b;
          }
        }
      }
    }
  }
}
.sub-header {
  $height: 35px;
  height: $height;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  clear: right;
  .sub-header-wrap {
    position: relative;
    width: $wrap-width;
    height: $height;
    margin: 0 auto;
    .wrap-nav {
      float: left;
      padding-left: 180px;
      li {
        float: left;
        height: $height;
        &:hover,
        .nav-select {
          span {
            background: #9b0909;
          }
        }
        a {
          display: inline-block;
          height: $height;
          line-height: $height;
          color: #fff;
          .white-icon {
            position: absolute;
            display: inline-block;
            width: 8px;
            height: 8px;
            top: 9px;
            background: url("./images/white-icon.png");
            background-size: cover;
          }
          span {
            display: inline-block;
            height: 20px;
            padding: 0 13px;
            margin: 0 17px 0;
            line-height: 20px;
            border-radius: 20px;
          }
        }
      }
    }
  }
}
</style>
