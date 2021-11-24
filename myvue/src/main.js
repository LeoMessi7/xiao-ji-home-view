// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login'
import router from './router'
import ElementUI from 'element-ui'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$wow=wow
Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
