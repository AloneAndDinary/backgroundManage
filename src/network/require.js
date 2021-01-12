import axios from 'axios';
export function request(config) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const requests = axios.create({
      // baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
      baseURL: '',
      timeout: 6000 // 请求超时时间
    });
    // 错误处理函数
    const err = (error) => {
      if (error.response) {
        // const data = error.response.data;
        // console.log(data);
      }
      return Promise.reject(error);
    };
    // request interceptor(请求拦截器)
    requests.interceptors.request.use(config => {
      // console.log('请求拦截', config);
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['token'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
      }
      return config;
    }, err);
    // response interceptor（接收拦截器）
    requests.interceptors.response.use((response) => {
      const res = response.data;
      // console.log('拦截器', res);
      return res;
      // if (res.code !== 0&&res.code!==200) {
      //   return Promise.reject('error');
      // } else {
      //   return res;
      // }
    }, err);
    // 请求接口
    requests(config).then(res => {
      resolve(res);
    }).catch(err => reject(err));
  });
}
