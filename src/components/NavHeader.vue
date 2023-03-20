<script>
export default {
  name: "nav-header",
  data() {
    return {
      input: ""
    };
  }
};
</script>

<template>
  <div class="navheader">
    <div class="picture">幻听音乐</div>
    <div class="zhongjian">
      <div class="con">
        <span>发现</span>
        <div class="children">
          <div class="children1">
            <router-link to="/paging" class="router-test">
              分类111
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              分类111
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              分类111
            </router-link>
          </div>
        </div>
      </div>
      <div class="con">
        <span>原创音乐</span>
        <div class="children">
          <div class="children1">
            <router-link to="/paging" class="router-test">
              分类
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              推荐歌单
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              发布原创音乐
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              原创众筹
            </router-link>
          </div>
        </div>
      </div>
      <div class="con">
        <span>音乐故事</span>
        <div class="children">
          <div class="children1">
            <router-link to="/paging" class="router-test">
              音乐心情
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              单曲
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              乐评
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              随机
            </router-link>
          </div>
        </div>
      </div>
      <div class="con">
        <span>幻听音乐</span>
        <div class="children">
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
        </div>
      </div>
      <div class="con">
        <span>幻听音乐</span>
        <div class="children">
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
        </div>
      </div>
      <div class="con">
        <span>幻听音乐</span>
        <div class="children">
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
          <div class="children1">
            <a v-bind:href="'#/login'" target="_blank"><span>哈哈哈</span></a>
          </div>
        </div>
      </div>
      <div class="con">
        <span>活动</span>
        <div class="children">
          <div class="children1">
            <router-link to="/paging" class="router-test">
              周边商城
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/shouji" class="router-test">
              手机配件
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              数字专辑
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/paging" class="router-test">
              音乐会门票
            </router-link>
          </div>
        </div>
      </div>
      <div class="con">
        <span>商城</span>
        <div class="children">
          <div class="children1">
            <router-link to="/zhoubian" class="router-test">
              周边商城
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/shouji" class="router-test">
             手机配件
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/shouji1" class="router-test">
              手机配件1
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/shuzi" class="router-test">
              数字专辑
            </router-link>
          </div>
          <div class="children1">
            <router-link to="/yinyue" class="router-test">
              音乐会门票
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="con-input">
      <el-input
        v-model="input"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
      ></el-input>
    </div>
    <div class="con-a">
      <a href="#/login">登录</a>/
      <a href="#/rego">注册</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navheader {
  display: flex;
  width: 100vw;
  height: 101px;
  background-color: #1db1f2;
  color: #fff;
  .picture {
    // background: url("../assets/img/beijing.png") no-repeat;
    // background-size: 100% 100%;
    color: #fff;
    align-items: center;
    line-height: 98px;
    margin-left: 80px;
    margin-right: 30px;
  }
  .zhongjian {
    display: flex;
    justify-content: space-between;
    align-items: center; /*居中*/
    box-sizing: border-box;
    .con {
      display: inline-block;
      padding: 40px 20px 40px 20px;
      .children {
        display: flex;
        align-items: center; /*居中*/
        position: absolute;
        top: 101px;
        left: 0;
        width: 1440px;
        height: 0px;
        opacity: 0;
        overflow: hidden;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
        z-index: 10;
        transition: all 0.5s;
        background-color: #fff;

        .children1 {
          margin-left: 30px;
          color: black;
          a {
            text-decoration: none;
            color: black;
            &:hover {
              color: #0f8ece;
            }
          }
          &:nth-child(1) {
            margin-left: 175px;
          }
        }
      }
    }
  }
  .con:hover {
    cursor: pointer;
    background-color: #0f8ece;
    color: black;
    .children {
      height: 60px;
      opacity: 1;
    }
  }
  .con-input {
    align-items: center;
    line-height: 98px;
    margin-left: 20px;
    /deep/ .el-input {
      border-radius: 30px;
    }
  }
  .con-a {
    align-items: center;
    line-height: 98px;
    margin-left: 30px;
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
