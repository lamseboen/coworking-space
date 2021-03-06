import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/HomePage.vue')
  },
  {
    path: '/list-rent',
    name: 'List-rent',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListRentPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
