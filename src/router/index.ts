import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
import Features from '@/components/NavbarComponent.vue/features.vue'
import Pricing from '@/components/NavbarComponent.vue/Pricing.vue'
import Integrations from '@/components/NavbarComponent.vue/Integrations.vue'
import Download from '@/components/NavbarComponent.vue/Download.vue'
import AboutTeinnovate from '@/components/NavbarComponent.vue/AboutTeinnovate.vue'
import HelpResorces from '@/components/NavbarComponent.vue/Help&Resorces.vue'
// auth
import Signin from '@/views/Auth.vue/signin.vue'
import Signup from '@/views/Auth.vue/signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/integrations',
      name: 'integrations',
      component: Integrations
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/aboutteinnovate',
      name: 'aboutteinnovate',
      component: AboutTeinnovate
    },
    {
      path: '/help&resorces',
      name: 'help&resorces',
      component: HelpResorces
    },
    // auth
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})

export default router
