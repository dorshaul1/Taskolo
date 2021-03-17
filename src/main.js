import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router';
import {store} from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import './styles/main.scss'

Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
