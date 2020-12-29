<template>
  <div class="pageContent">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      :background="showBackground"
      :layout="layout"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import basePageConfig from '../../config/basePageConfig'
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
    }
  },
  data() {
    return {
      pageSizes: basePageConfig.pageSizeList,
      showBackground: basePageConfig.showBackground,
      layout: basePageConfig.layout
    }
  },
  mounted() {
    console.log(basePageConfig)
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style scoped lang="less">
  .pageContent{
    text-align: right;
    margin-top: 20px;
  }
</style>
