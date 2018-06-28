import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'  

import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'

Vue.use(ElementUI);
Vue.use(iView);
Vue.use(VueParticles);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
