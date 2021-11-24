import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import introduce from '../components/introduce'
import usetool from '../components/usetool'
import Login from '../components/Login'
import bar from '../components/bar'
import foot from "../components/foot"
import 'animate.css'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/foot',
      name: 'foot',
      component: foot
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path: '/usetool',
      name: 'usetool',
      component: usetool
    },

  ]
})
