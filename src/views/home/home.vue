<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <good-list :goods="showGoods"></good-list>
  </div>
</template>

<script>

  import HomeSwiper from './childrenHome/HomeSwiper'
  import HomeRecommendView from './childrenHome/HomeRecommendView'
  import FeatureView from './childrenHome/FeatureView'

  import NavBar from 'components/common/nvabar/NavBar'
  import TabControl from 'components/common/tabControl/TabControl'
  import GoodList from 'components/common/goods/GoodList'

  import {
    getHomeMultidata,
    getHomeGoods 
  } from 'network/home'


  export default {
    name: "Home",
    data() {
      return {
        // result: null
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0, list: []},
          'new': {page:0, list: []},
          'sell': {page:0, list: []}
        },
        currentType: 'pop'
      }
    },
    components: { 
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodList,
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /*
        网络请求相关方法
      */ 
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page = page;
          console.log(this.goods);
        })      
      },
      /*
        事件监听相关方法
      */ 
      tabClick(index){
        console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1: 
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break; 
        }       
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
 .home-nav {
   background-color: #ff5777;
   color: white;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 9;
 }
 /* 吸顶效果 */
 .tab-control {
   position: sticky;
   top: 44px;
   background-color: #fff;
   z-index: 9;
 }
</style>
