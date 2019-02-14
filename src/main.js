import Vue from 'vue'
import App from './App.vue'
import Product from './Product.vue'

// Vue.component("sidebar", Sidebar)
Vue.component("product", Product)

new Vue({
  el: '#app',
  render: h => h(App)
})
