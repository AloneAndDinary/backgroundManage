<template>
    <div class="tableContainer">
      <el-table
        :ref="refName"
        :data="tableData"
        style="width: 100%">
        <el-table-column v-if="showCheckbox" type="selection" width="55"></el-table-column>
        <el-table-column v-for="(item,index) in columnData" :key="index" :prop="item.propName" :label="item.label"></el-table-column>
        <template v-if="showBtn">
          <el-table-column :label="btnList.label">
            <template slot-scope="scope">
              <el-button type="text" v-for="(detail,i) in btnList.actionBarList" :key="i" @click="btnClick(detail.type,scope.row)">{{ detail.name }}</el-button>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "tableComponent",
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    columnData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    refName: {
      type: String,
      default: 'table'
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    btnList: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      btnClick(type,data) {
        this.$emit('btnClickEvent',{type,data});
      }
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
