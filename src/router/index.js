import Vue from 'vue'
import VueRouter from 'vue-router'
import H from '../views/H.vue'
import C from '../views/C.vue'
import S from '../views/S.vue'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: H
  },
  {
    path: '/stories',
    name: 'Home',
    component: S
  },
  {
    path: '/Comic',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:C
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
