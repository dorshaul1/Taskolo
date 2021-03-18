import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router';
import { store } from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import './styles/main.scss'

// import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

// // Register components in your 'main.js'
// Vue.component('calendar', Calendar)
// Vue.component('date-picker', DatePicker)
Vue.use(require('vue-moment'));

import VCalendar from 'v-calendar';
Vue.use(VCalendar)


Vue.use(ElementUI);

const clone = require("rfdc/default")

Vue.prototype.$clone = clone

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
