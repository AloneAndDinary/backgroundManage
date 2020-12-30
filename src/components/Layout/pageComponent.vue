<template>
  <div class="pageContainer">
    <el-pagination
      :background="showBackground"
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'PageComponent',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: ''
    },
    showBackground: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    handleSizeChange(size) {
      this.$emit('handleSizeChange', size);
    },
    handleCurrentChange(page) {
      this.$emit('handleCurrentChange', page);
    }
  }
};
</script>

<style scoped>
  .pageContainer{
    text-align: right;
    margin-top: 20px;
  }
</style>
