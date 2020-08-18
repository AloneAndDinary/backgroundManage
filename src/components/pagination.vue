<template>
  <div class="pageContent">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      :background="showBackground"
      :layout="layout"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
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
    },
    showBackground: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      pageSizes: [10, 20, 30, 50]
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val);
    }
  }
};
</script>

<style scoped lang="less">
  .pageContent{
    text-align: right;
    margin-top: 20px;
  }
</style>
