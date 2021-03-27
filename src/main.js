import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './style/style.scss'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(Vuex)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
