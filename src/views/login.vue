<template>
  <div>
    登录页
    <button @click="login">登录</button>
  </div>
</template>

<script>
// import { request } from '../network/require';
require('../mock');
export default {
  name: 'Welcome',
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    login() {
      this.$router.push('/welcome');
    }
  }
};
</script>

<style scoped>

</style>
