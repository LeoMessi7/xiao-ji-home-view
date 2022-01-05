import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home'
import introduce from '../components/introduce'
import download from '../components/download'
import bar from '../components/bar'
import foot from "../components/foot"
import 'animate.css'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
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
      path:'/introduce',
      name:'introduce',
      component:introduce
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },

  ]
})
