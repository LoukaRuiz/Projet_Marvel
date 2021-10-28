import Vue from 'vue'
import VueRouter from 'vue-router'
import Heroes from '../views/ListesHeroes.vue'
import Comics from '../views/ListesComics.vue'
import Stories from '../components/Table.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Heroes',
    component: Heroes
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories
  },
  {
    path: '/Comic',
    name: 'Comic',
    component:Comics
  },
  {
    path: '/Detail/User',
    name: 'Detail',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
