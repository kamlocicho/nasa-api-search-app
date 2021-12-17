import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:search',
    name: 'Results',
    component: Results
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
