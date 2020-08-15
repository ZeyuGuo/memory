import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Album = () => import('views/home/Home')
const Us = () => import('views/home/Home')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isShowTabBar: true
      }
    },
    {
      path: '/album',
      name: 'album',
      component: Album,
      meta: {
        isShowTabBar: true
      }
    },
    {
      path: '/us',
      name: 'us',
      component: Us,
      meta: {
        isShowTabBar: true
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
