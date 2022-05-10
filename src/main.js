import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)   // render: h => h(App)  代表 createElement()
}).$mount('#app')

