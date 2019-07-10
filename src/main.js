import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'

require('@/style/plugin.css')
require('@/style/estilos.css')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
