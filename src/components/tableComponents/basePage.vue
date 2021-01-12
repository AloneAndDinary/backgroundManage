<template>
  <div class="container">
    <div class="searchList">
      <controlBtn :search-item-list="searchItemList" :control-btn="controlBtn" :show-search-btn="showSearchBtn" />
    </div>
    <div class="tableContent">
      <tableComponent
        :table-data="tableConfig.tableData"
        :column-data="tableConfig.tableColumn"
        :show-checkbox="tableConfig.showCheckbox"
        :show-btn="tableConfig.showColumnBtn"
        :btn-list="tableConfig.columnBtnList"
      />
    </div>
    <div class="paginationContent">
      <pagination
        :current-page="paginationConfig.currentPage"
        :page-size="paginationConfig.pageSize"
        :total="paginationConfig.total"
      />
    </div>
  </div>
</template>

<script>
import tableComponent from './tableComponent';
import pagination from './pagination';
import controlBtn from './controlBtn';
export default {
  name: 'BasePage',
  components: {
    tableComponent,
    pagination,
    controlBtn
  },
  props: {
    baseConfig: {
      type: Object,
      default() {
        return {
          searchConfig: {},
          tableConfig: {
            tableData: [], //  表格数据
            tableColumn: [], // 表格表头配置信息
            showColumnBtn: true, // 是否展示表格操作栏
            columnBtnList: {
              label: '操作',
              actionBarList: []
            }, // 操作栏按钮列表
            showCheckbox: false // 是否展示复选框
          },
          paginationConfig: {
            currentPage: 1, // 当前页
            pageSize: 10, // 每页显示多少条
            total: 0 // 总数
          }
        };
      }
    }
  },
  data() {
    return {
      // btnList: true,
      // showBtn: false,
      // showCheckbox: false,
      // columnData: [],
      // tableData: {},
      controlBtn: [],
      searchItemList: [],
      showSearchBtn: false
    };
  },
  computed: {
    searchConfig() {
      return this.baseConfig.searchConfig;
    },
    tableConfig() {
      return this.baseConfig.tableConfig;
    },
    paginationConfig() {
      return this.baseConfig.paginationConfig;
    }
  },
  mounted() {
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val);
    }
  }
};
</script>

<style scoped lang="less">
  .container{
    margin-top: 10px;
  }
</style>
