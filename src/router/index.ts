import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export { routes }

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
