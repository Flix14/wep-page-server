import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Downloads from './views/Downloads.vue'
import Tutos from './views/Tutos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: Downloads
    },
    {
      path: '/tuto',
      name: 'tuto',
      component: Tutos
    }
  ]
})
