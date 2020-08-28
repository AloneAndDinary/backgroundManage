<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item :name="item.id" v-for="(item,index) in dataList" :key="index">
        <template slot="title">
          <span>{{item.otherName}}</span>
          <span style="position: absolute;right: 85px;">
            是否可访问: <el-switch v-model="item.isShow" active-text="是" inactive-text="否"></el-switch>
          </span>
        </template>
        <paneComponent v-if="item.hasChild" :dataList="item.children"></paneComponent>
        <div v-else>展示的内容</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "paneComponent",
  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      activeName: '1'
    };
  }
};
</script>

<style scoped lang="less">
  /deep/ .el-collapse-item__wrap{
    padding-left: 20px;
  }
</style>
