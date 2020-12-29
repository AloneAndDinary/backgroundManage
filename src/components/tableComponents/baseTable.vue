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
  name: 'BaseTable',
  components: {
    tableComponent,
    pagination,
    controlBtn
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
