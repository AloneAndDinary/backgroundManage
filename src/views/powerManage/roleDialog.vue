<template>
  <div class="roleDialog">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in menuList" :key="index" :name="index.toString()" :label="item.otherName">
        <PanelComponent :dataList="item.children"></PanelComponent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { request } from "../../network/require";
import PanelComponent from './paneComponent';
export default {
  name: "roleDialog",
  components:{
    PanelComponent
  },
  data() {
    return {
      menuList: [],
      activeName: '0'
    };
  },
  mounted() {
    this.getSystemList();
  },
  methods: {
    // 获取系统
    getSystemList() {
      let sendData = {
        method: 'get',
        url: '/powerManage/menuList',
        data: {
          systemId: 1
        }
      };
      request(sendData).then(res => {
        this.menuList = res;
        console.log('列表数据', res);
      });
    },
    // 标签切换
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="less">
  .roleDialog{
    /*padding-left: 20px;*/
  }
</style>
