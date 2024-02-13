import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import '/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/assets/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: () => import('/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/views/SignupView.vue')
    },
    {
      path: '/data',
      name: 'DataView',
      component: () => import('/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/views/DataView.vue')
    }
  ]
})

export default router
