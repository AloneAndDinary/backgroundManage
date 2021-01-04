<template>
  <div>
    测试页面1-2
    <el-button :loading="btnLoading" @click="setBtn">测试加载</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  mounted() {
  },
  methods: {
    setBtn() {
      this.showBtnLoading();
      setTimeout(() => {
        this.hideBtnLoading();
      }, 1000);
    }
  }
};
</script>

<style scoped>

</style>
