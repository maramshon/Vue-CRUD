import Vue from 'vue'

// Routing
// import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store.js'
// const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'
import App from './App.vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  // router,
  // fb,
  store,
  render: h => h(App),
}).$mount('#app')
