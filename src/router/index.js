import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import Result from '../views/Result';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
