import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Heroes from '../views/ListesHeroes.vue'
import Comic from '../views/ListesComic.vue'
import Storie from '../views/ListesXtorie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Heroes
  },
  {
    path: '/Comic',
    name: 'Comics',
    component: Comic
  },
  {
    path: '/Storie',
    name: 'Stories',
    component: Storie
  },
  {
    path: '/Comic',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
