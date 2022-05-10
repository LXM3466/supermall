<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="index" 
           class="tab-control-item" 
           :class="{active: index === currentIndex}" @click="tabClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    },  
  },
  methods: {
    tabClick(index){
      this.currentIndex = index;
      // 将数据传到父组件上
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    /* width: 100%; */
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding-bottom: 5px;
  }
  .active {
    color: #ff5777;
  }
  .active span{
    border-bottom: 3px solid #ff5777;
  }

</style>
