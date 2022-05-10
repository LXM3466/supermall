<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
}
</script>

<style scoped>
  .slide {
    width: 100%;
    /* flex-shrink 属性定义了项目的缩小比例，
      默认为1，即如果空间不足，该项目将缩小,
      flex-shrink 属性为0，其他项目都为1，则空间不足时，前者不缩小
    */
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
