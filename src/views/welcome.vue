<template>
    <div>
        欢迎
    </div>
</template>

<script>
import { request } from '../network/require';
require('../mock');
export default {
  name: "welcome",
  data() {
    return {

    };
  },
  mounted() {
    this.getDemo();
  },
  methods:{
    getDemo() {
      let sendData = {
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
