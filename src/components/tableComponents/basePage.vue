<template>
  <div class="container">
    <div class="searchList">
      <controlBtn />
    </div>
    <div class="tableContent">
      <tableComponent />
    </div>
    <div class="paginationContent">
      <pagination />
    </div>
  </div>
</template>

<script>
import tableComponent from './tableComponent'
import pagination from './pagination'
import controlBtn from './controlBtn'
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
      tableData: {}
    }
  }
}
</script>

<style scoped>

</style>
