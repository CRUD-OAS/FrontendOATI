import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Resultados from '../components/Resultados.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/resultados',
      name: 'Resultados',
      component: Resultados
    },
  ]
})

export default router
