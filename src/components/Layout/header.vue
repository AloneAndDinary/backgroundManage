<template>
  <div id="headerPage">
    <div v-if="setting.showHeaderImg" class="logo">
      <!--            <img src="" alt="">-->
    </div>
    <b v-if="setting.showHeaderImg" class="line" />
    <div v-if="setting.showHeaderTitle" class="title">
      后台管理系统
    </div>
    <div v-if="setting.showHeaderNav" class="headerNav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <!--                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      </el-menu>
    </div>
    <div class="userInfo">
      <span>欢迎您 , {{ userName }}! <span class="logOut">退出</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    setting: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      activeIndex: '1',
      userName: '张三'
    };
  }
};
</script>

<style scoped lang="less">
    @import "../../css/framework";
    #headerPage{
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        align-items: center;
        position: relative;
        .line{
            width: @splitLineWidth;
            height: @splitLineHeight;
            background: @splitLineColor;
            margin: 0px 10px;
        }
        .logo{
            width: calc(@asideWidth - 10px);
        }
        .title{
            width: @asideWidth;
            font-size: @titleFontSize;
            color: @titleColor;
            margin-right: 30px;
        }
        .userInfo{
            position: absolute;
            right: 0px;
            color: @titleColor;
            font-size: @userInfoFontSize;
            span.logOut{
                &:hover{
                  text-decoration: underline;
                    /*color: #4390ed;*/
                    cursor: pointer;
                }
            }
        }
    }
</style>
