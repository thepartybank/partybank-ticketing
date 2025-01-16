import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import CreateEvents from '@/views/CreateEvents.vue'
import FAQView from '@/views/FAQView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about-us',
      component: AboutUsView,
    },
    {
      path: '/create-events',
      component: CreateEvents,
    },
    {
      path: '/contact-us',
      component: ContactUsView,
    },
    {
      path: '/faqs',
      component: FAQView,
    },
  ],
})

export default router
