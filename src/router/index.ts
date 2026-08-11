import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue'
// import Features from '@/components/NavbarComponent.vue/features.vue'
// import Pricing from '@/components/NavbarComponent.vue/Pricing.vue'
import Integrations from '@/components/NavbarComponent.vue/Integrations.vue'
import Download from '@/components/NavbarComponent.vue/Download.vue'
import AboutTeinnovate from '@/components/NavbarComponent.vue/AboutTeinnovate.vue'
import HelpResorces from '@/components/NavbarComponent.vue/Help&Resorces.vue'
// auth
import Signin from '@/views/Auth.vue/signin.vue'
import Signup from '@/views/Auth.vue/signup.vue'
// dashboard
import Dashboard from '@/views/MainDashboard/Dashboard.vue'
import ActivityOverview from '@/views/MainDashboard/ActivityOverview.vue'
import QuickInvoice from '@/views/MainDashboard/QuickInvoice.vue'
import Invoices from '@/views/MainDashboard/finance/Invoices.vue'
import Payments from '@/views/MainDashboard/finance/payments.vue'
import Settings from '@/views/MainDashboard/System/Settings.vue'
import Clients from '@/views/MainDashboard/finance/Clients.vue'
import PaywithSplit from '@/views/MainDashboard/finance/PaywithSplit.vue'
import Fullinvoice from '@/views/MainDashboard/finance/fullinvoice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/features',
    //   name: 'features',
    //   component: Features
    // },
    // {
    //   path: '/pricing',
    //   name: 'pricing',
    //   component: Pricing
    // },
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
    },
    // dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/activityoverview',
      name: 'activityoverview',
      component: ActivityOverview
    },
    {
      path: '/quickinvoice',
      name: 'quickinvoice',
      component: QuickInvoice
    },
    // finance
    {
      path: '/invoices',
      name: 'invoices',
      component: Invoices
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payments
    },
    {
      path: '/fullinvoice',
      name: 'fullinvoice',
      component: Fullinvoice
    },

    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/paywithsplit',
      name: 'paywithsplit',
      component: PaywithSplit
    },
    // system
    {
      path: '/settings',
      name: 'setings',
      component: Settings
    }
  ]
})

export default router
