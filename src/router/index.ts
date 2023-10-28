import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import DataView from '@/views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: TestView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView
    },
  ]
})

export default router
