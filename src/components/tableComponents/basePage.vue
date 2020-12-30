<template>
  <div class="container">
    <div class="searchList">
      <controlBtn :search-item-list="searchItemList" :control-btn="controlBtn" :show-search-btn="showSearchBtn" />
    </div>
    <div class="tableContent">
      <tableComponent :table-data="tableData" :column-data="columnData" :show-checkbox="showCheckbox" :show-btn="showBtn" :btn-list="btnList" />
    </div>
    <div class="paginationContent">
      <pagination :current-page="currentPage" :page-size="pageSize" :total="total" />
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
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      btnList: true,
      showBtn: false,
      showCheckbox: false,
      columnData: [],
      tableData: {},
      controlBtn: [],
      searchItemList: [],
      showSearchBtn: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
      this.$emit('handleSizeChange', val);
    }
  }
};
</script>

<style scoped>

</style>
