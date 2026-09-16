import '@/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'
import AOS from 'aos'
import './assets/fonts.css'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// MDI
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {
  aliases,
  mdi
} from 'vuetify/iconsets/mdi'

// ApexCharts
import VueApexCharts from 'vue3-apexcharts'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

// API CLIENT
import { initializeApiClient } from '@/services/api/api.service'

// KEYCLOAK
import { initializeKeycloak } from '@/services/keycloak/keycloak.service'

// ─────────────────────────────────────────────
// Vuetify
// ─────────────────────────────────────────────

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

// ─────────────────────────────────────────────
// Create Vue App
// ─────────────────────────────────────────────

const app = createApp(App)

// ─────────────────────────────────────────────
// Pinia
// ─────────────────────────────────────────────

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

// ─────────────────────────────────────────────
// Initialize API Client
// ─────────────────────────────────────────────

initializeApiClient()

// ─────────────────────────────────────────────
// Initialize Keycloak
// ─────────────────────────────────────────────

initializeKeycloak()
  .then(() => {
    console.log('✅ Keycloak ready')

    // ─────────────────────────────────────────
    // Vue Plugins
    // ─────────────────────────────────────────

    app.use(router)
    app.use(vuetify)
    app.use(VueApexCharts)
    app.use(ElementPlus)

    // ─────────────────────────────────────────
    // Redirect handling
    // ─────────────────────────────────────────

    const urlParams = new URLSearchParams(
      window.location.search
    )

    const redirectPath = urlParams.get('redirect')

    if (redirectPath) {
      router
        .push(redirectPath)
        .catch(() => {})
    }

    // ─────────────────────────────────────────
    // Mount
    // ─────────────────────────────────────────

    app.mount('#app')

    // ─────────────────────────────────────────
    // AOS
    // ─────────────────────────────────────────

    AOS.init()
  })
  .catch((error) => {
    console.error('❌ Failed to initialize Keycloak:', error)

    // Still mount the application so public pages
    // can be displayed even if Keycloak fails.
    app.use(router)
    app.use(vuetify)
    app.use(VueApexCharts)
    app.use(ElementPlus)

    app.mount('#app')

    AOS.init()
  })