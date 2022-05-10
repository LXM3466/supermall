import axios from "axios";
export function request(config){   // 两个回调函数 方便后续调用时拿到数据
  // 1.创建axios实例
  // return new Promise((resolve, reject) => {
  //   const instace1 = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000,
  //   })
  //   // 真正发送网络请求
  //   instace1(config).then(res => {
  //     // console.log(res);
  //     resolve(res)
  //   }).catch(err => {
  //     // console.log(err);
  //     reject(err)
  //   })
  // })
 
   // 1.创建axios实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
  })

  // 2.axios拦截器
  // 2.1 为什么要请求拦截? 作用
  // 1. 比如config中的一些信息不符合服务器要求
  // 2.比如每次发送网络请求的时候，都希望在界面中显示一个请求的图标
  // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
  // instance1.interceptors.request.use(config => {
  //     console.log(config);
  //     return config;
  //   }, err => {
  //     console.log(err);
  // } )

  // // 2.2 响应拦截
  // instance1.interceptors.response.use(res => {
  //   console.log(res);
  //   return res;
  // }, err => {
  //   console.log(err);
  // })

  // 3.真正发送网络请求  本身就是一个promise
  return instance1(config);
}

