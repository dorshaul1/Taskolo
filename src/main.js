import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router';
import { store } from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
//font awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './styles/main.scss'

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents
  // longTapTimeInterval: 400,
)

// import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

// // Register components in your 'main.js'
// Vue.component('calendar', Calendar)
// Vue.component('date-picker', DatePicker)
Vue.use(require('vue-moment'));


library.add(fab, fas, far);

Vue.component('font-awesome-icon', FontAwesomeIcon)

import VCalendar from 'v-calendar';
Vue.use(VCalendar)


Vue.use(ElementUI);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = debug;

Vue.mixin({
  methods: {
    $clone: require('rfdc')({ proto: true }),
  }
})




new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')

