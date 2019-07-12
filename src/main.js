import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import {store} from './store/index'

require('@/style/plugin.css')
require('@/style/estilos.css')
require('@/style/css/fontawesomeV5013.css')


require('@/js/jquery-3.3.1.min.js')
require('@/js/bootstrap.min.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
