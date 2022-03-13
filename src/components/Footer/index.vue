<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="wrap-copy">
        <p class="copy-link">
          <a href="/#">服务条款</a>
          <span class="link-line">|</span>
          <a href="/#">隐私政策</a>
          <span class="link-line">|</span>
          <a href="/#">儿童隐私政策</a>
          <span class="link-line">|</span>
          <a href="/#">版权投诉指引</a>
          <span class="link-line">|</span>
          <a href="/#">联系我们</a>
          <span class="link-line">|</span>
          <a href="/#">广告合作</a>
        </p>
        <p class="copy-right">
          <span class="right-mgr"> 网易公司版权所有©1997-2022 </span>
          <span> 杭州乐读科技有限公司运营： </span>
          <a href="/#">浙网文[2021] 1186-054号</a>
        </p>
        <p class="copy-right">
          <a href="/#"> 粤B2-20090191-18 工业和信息化部备案管理系统网站 </a>
          <a class="police-link" href="/#">
            <span class="police-logo"> </span>
            <span class="police-text">浙公网安备 33010902002564号</span>
          </a>
        </p>
      </div>
      <ul class="wrap-enter fr">
        <li>
          <a class="enter-logonew enter-logo-amped" href="/#"></a>
          <span class="enter-text enter-text-amped"></span>
        </li>
        <li>
          <a class="enter-logonew enter-logo-auth" href="/#"></a>
          <span class="enter-text enter-text-auth"></span>
        </li>
        <li>
          <a class="enter-logonew enter-logo-musician" href="/#"></a>
          <span class="enter-text enter-text-musician"></span>
        </li>
        <li>
          <a class="enter-logonew enter-logo-reward" href="/#"></a>
          <span class="enter-text enter-text-reward"></span>
        </li>
        <li>
          <a class="enter-logonew enter-logo-cash" href="/#"></a>
          <span class="enter-text enter-text-cash"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  clear: both;
  .footer-wrap {
    width: 980px;
    margin: 0 auto;
    .wrap-copy {
      // 版权部分
      float: left;
      width: 520px;
      padding-top: 15px;
      line-height: 24px;
      .copy-link {
        // 链接部分
        a {
          color: #999;
          &:hover {
            text-decoration: underline;
          }
        }
        .link-line {
          margin: 0 8px 0 10px;
          color: #c2c2c2;
        }
      }
      .copy-right {
        // 版权及公安部分
        color: #666;
        a {
          color: #666;
          &:hover {
            text-decoration: underline;
          }
        }
        .right-mgr {
          margin-right: 14px;
        }
        .police-logo {
          width: 14px;
          height: 14px;
          background: url("./images/police.png") no-repeat;
          background-size: cover;
          display: inline-block;
          margin-right: 2px;
          vertical-align: -2px;
        }
        .police-link {
          margin-left: 5px;
          font-size: 0;
        }
        .police-text {
          font-size: 12px;
        }
      }
    }
    .wrap-enter {
      // 页脚图标链接
      width: 420px;
      margin-top: 33px;
      li {
        float: left;
        width: 60px;
        height: 70px;
        margin-left: 30px;
        text-align: center;
        color: #666;
        &:first-child {
          margin-left: 0;
        }
        .enter-logonew {
          display: block;
          float: none;
          width: 50px;
          height: 45px;
          margin: 0 auto;
          background: url("./images/foot_enter_new.png") no-repeat;
          background-size: 110px 552px;
        }
        .enter-logo-amped {
          background-position: -63px -456.5px;
        }
        .enter-logo-auth {
          background-position: -63px -101px;
        }
        .enter-logo-musician {
          background-position: 0 0;
        }
        .enter-logo-reward {
          background-position: -60px -50px;
        }
        .enter-logo-cash {
          background-position: 0 -101px;
        }

        .enter-text {
          display: inline-block;
          margin: 5px 5px 0;
          width: 52px;
          height: 14px;
          background: url("./images/foot_enter_tt.png") no-repeat;
          background-size: 180px 139px;
        }
        .enter-text-amped {
          background-position: 0 -108px;
          margin-left: -6px;
          width: 72px;
        }
        .enter-text-auth {
          background-position: -1px -91px;
        }
        .enter-text-musician {
          background-position: 0 0;
        }
        .enter-text-reward {
          background-position: 0 -54px;
        }
        .enter-text-cash {
          background-position: -1px -72px;
        }
      }
    }
  }
}
</style>
