import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Визуализация алгоритмов сортировки'
    },
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: 'Страница не найдена'
    },
    component: NotFound,
  },
]

const router = createRouter({
  history: process.env.NODE_ENV === "production" ? createWebHistory('/sort-helper/') : createWebHistory(),
  routes
})

router.afterEach(to => {
  nextTick(() => {
    document.title = to.meta.title || 'Sort Helper'
  })
})

export default router
