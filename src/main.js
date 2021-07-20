import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './icons'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  locale: enLang
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
