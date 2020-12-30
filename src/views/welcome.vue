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
    console.log('配置的数据', process.env.NODE_ENV);
  },
  methods: {
    getDemo() {
      const sendData = {
        method: 'get',
        url: '/api/register',
        data: {}
      };
      request(sendData).then(res => {
        console.log('返回的数据', res);
      });
    }
  }
};
</script>

<style scoped>

</style>
