<template>
  <div class="tableContainer">
    <el-table
      ref="refName"
      :data="tableData"
      row-key="id"
      :tree-props="treeProp"
      :expand-row-keys="expandRowKeys"
      style="width: 100%"
      @row-click="rowClick"
    >
      <el-table-column v-if="isExpandTable" type="expand">
        <template>
          <slot name="expandContent" />
        </template>
      </el-table-column>
      <el-table-column v-if="showCheckbox" type="selection" width="55" />
      <el-table-column v-for="(item,index) in columnData" :key="index" :prop="item.propName" :label="item.label" />
      <template v-if="showBtn">
        <el-table-column :label="btnList.label">
          <template slot-scope="scope">
            <el-button v-for="(detail,i) in btnList.actionBarList" :key="i" type="text" @click.stop="btnClick(detail.type,scope.row)">{{ detail.name }}</el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    columnData: {
      type: Array,
      default: () => {
        return []
      }
    },
    expandRowKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    isExpandTable: {
      type: Boolean,
      default: false
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    btnList: {
      type: Object,
      default: () => {
        return {}
      }
    },
    treeProp: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      btnClick(type, data) {
        this.$emit('btnClickEvent', { type, data })
      }
    }
  },
  methods: {
    rowClick(row, column, event) {
      this.$refs.refName.toggleRowExpansion(row)
      this.$emit('rowClick', row, column, event)
    }
  }
}
</script>

<style scoped>

</style>
