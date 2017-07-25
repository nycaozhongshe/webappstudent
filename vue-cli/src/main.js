import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';	
import 'mint-ui/lib/style.css'
import 'components/index.js'
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
