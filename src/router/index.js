import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/add-listing',
      name: 'add-listing',
      component: () => import('../views/AddListing.vue')
    },
    {
      path: '/listing/:id',
      name: 'inner-page',
      component: () => import('../views/ListingView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
