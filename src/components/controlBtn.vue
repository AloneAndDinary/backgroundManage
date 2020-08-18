<template>
  <div class="controlBtn">
    <div class="btnList">
      <el-button v-for="(btn, i) in controlBtn" :key="i" :size="btn.size" :type="btn.type" :class="btn.position">{{ btn.name }}</el-button>
    </div>
    <div class="searchList">
      <template v-for="(item, index) in searchItemList">
        <div :key="item.title" class="title">
          <span>{{ item.title }}:</span>
        </div>
        <el-input v-if="item.type==='input'" v-model="item.value" :placeholder="item.placeholder" :key="index"></el-input>
        <el-select v-if="item.type==='select'" v-model="item.value" :placeholder="item.placeholder" :key="index">
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value">
          </el-option>
        </el-select>
      </template>
      <el-button type="success" size="mini" @click="search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "controlBtn",
  props: {
    controlBtn: {
      type: Array,
      default: ()=>{
        return [];
      }
    },
    searchItemList: {
      type: Array,
      default: ()=> {
        return {};
      }
    }
  },
  methods: {
    search() {
      this.$emit('search');
    }
  }
};
</script>

<style scoped lang="less">
  @import "../css/pageCommon";
</style>
