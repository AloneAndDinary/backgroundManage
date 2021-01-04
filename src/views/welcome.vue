<template>
  <div>
    欢迎
  </div>
</template>

<script>
import { request } from '../network/require';
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
    getDemo() {
      const sendData = {
        method: 'get',
        url: '/api/register',
        data: {}
      };
      request(sendData).then(res => {
      });
    }
  }
};
</script>

<style scoped>

</style>
