import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Album = () => import('views/album/Album')
const Us = () => import('views/us/Us')

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
  mode: 'hash',
  // base: process.env.BASE_URL,
  base: '/honey/',
  routes
})

export default router
