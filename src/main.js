import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost',
}))

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
