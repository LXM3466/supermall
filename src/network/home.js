import { request } from "./request";

// 定义数据请求的函数   
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })

}