<template>
  <div>
    <BasePage />
  </div>
</template>

<script>
import BasePage from '../../components/tableComponents/basePage';
export default {
  name: 'Test1',
  components: {
    BasePage
  },
  data() {
    return {
      baseConfig: {
        searchConfig: {},
        tableConfig: {
          tableData: [], //  表格数据
          tableColumn: [], // 表格表头配置信息
          showColumnBtn: true, // 是否展示表格操作栏
          columnBtnList: [], // 操作栏按钮列表
          showCheckbox: false // 是否展示复选框
        },
        paginationConfig: {
          currentPage: 1, // 当前页
          pageSize: 10, // 每页显示多少条
          total: 0 // 总数
        }
      }
    };
  }
};
</script>

<style scoped>

</style>
