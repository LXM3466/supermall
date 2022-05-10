module.exports = {
  // 配置别名   在文件引入的时候不用再写./
  configureWebpack: {
    resolve: {
      alias: {   //别名
        'assets': '@/assets', 
        'common': '@/common', 
        'components': '@/components', 
        'network': '@/network', 
        'views': '@/views', 
      }
    }
  }
}