<template>
  <div class="controlBtn">
    <div class="btnList">
      <el-button v-for="(btn, i) in controlBtn" :key="i" :size="btn.size" :type="btn.type" :class="btn.position" @click="btnClick(btn)">{{ btn.name }}</el-button>
    </div>
    <div class="searchList">
      <template v-for="(item, index) in searchItemList">
        <div :key="item.title" class="title">
          <span>{{ item.title }}:</span>
        </div>
        <el-input v-if="item.type==='input'" :key="index" v-model="item.value" :placeholder="item.placeholder" />
        <el-select v-if="item.type==='select'" :key="index" v-model="item.value" :placeholder="item.placeholder">
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
        <el-date-picker
          v-if="item.type === 'time'"
          :key="index"
          v-model="item.value"
          type="date"
          value-format="yyyy-MM-dd"
          :placeholder="item.placeholder"
        />
        <el-cascader
          v-if="item.type === 'cascader'"
          :key="index"
          v-model="item.value"
          :options="item.options"
        />
      </template>
      <el-button v-if="showSearchBtn" type="success" size="mini" class="searchBtn" @click="search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlBtn',
  props: {
    controlBtn: {
      type: Array,
      default: () => {
        return [];
      }
    },
    searchItemList: {
      type: Array,
      default: () => {
        return {};
      }
    },
    showSearchBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    search() {
      this.$emit('search');
    },
    btnClick(data) {
      this.$emit('btnClick', data);
    }
  }
};
</script>

<style scoped lang="less">
  @import "../../css/pageCommon";
</style>
