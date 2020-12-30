<template>
  <div class="home">
    首页
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log('配置的数据', process.env.baseUrl);
  }
};
</script>
