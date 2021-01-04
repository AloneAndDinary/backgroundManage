<template>
  <div class="roleDialog">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in menuList" :key="index" :name="index.toString()" :label="item.otherName">
        <PanelComponent :data-list="item.children" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { request } from '../../../network/require';
import PanelComponent from './paneComponent';
export default {
  name: 'RoleDialog',
  components: {
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
      const sendData = {
        method: 'get',
        url: '/powerManage/menuList',
        data: {
          systemId: 1
        }
      };
      request(sendData).then(res => {
        this.menuList = res;
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
