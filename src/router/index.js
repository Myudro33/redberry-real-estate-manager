import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddListing from '@/views/AddListing.vue'
import ListingView from '@/views/ListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-listing',
      name: 'add-listing',
      component: AddListing
    },
    {
      path: '/listing/:id',
      name: 'inner-page',
      component: ListingView
    }
  ]
})

export default router
