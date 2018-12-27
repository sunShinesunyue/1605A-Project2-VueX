/**
 * 主入口
 */

import Vue from 'vue' 
import App from './App.vue' // 引入App.vue
// 引入vuex的实例store
import store from './store/index'

new Vue({
  el: '#app',
  store, // 实例的store(总的)
  render: h => h(App)
})
