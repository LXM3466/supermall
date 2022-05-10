import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由的懒加载
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')
// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象router 
const routes = [
  {
    path: '',
    redirect: '/home'   
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  }, 
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },   
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出路由
export default router