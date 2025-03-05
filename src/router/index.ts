import { createRouter, createWebHashHistory } from 'vue-router'
import Page1_Portfolio from '../views/Page1_PortfolioTitle.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page1_Portfolio',
      component: Page1_Portfolio,
    },
  ],
})

export default router
