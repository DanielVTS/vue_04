import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from './router/index.js'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
