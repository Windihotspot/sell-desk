<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import { login as keycloakLogin } from '@/services/keycloak/keycloak.service'

const router = useRouter()

const isOpen = ref(false)
const openDropdown = ref(null)


async function goToSignin() {
  try {
    console.log('🔐 Starting Keycloak login...')

    await keycloakLogin()
    router.push('/login')
    console.log('✅ Keycloak login initiated')
  } catch (error) {
    console.error('❌ Keycloak login failed:', error)
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value

  if (!isOpen.value) {
    openDropdown.value = null
  }
}

const toggleDropdown = (label) => {
  openDropdown.value = openDropdown.value === label ? null : label
}

const closeMenu = () => {
  isOpen.value = false
  openDropdown.value = null
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

// Prevent the page underneath from scrolling
// when the mobile menu is open
watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)

  // Make sure scrolling is restored
  document.body.style.overflow = ''
})
</script>


<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white"
    data-aos="fade-down"
    data-aos-duration="800"
    data-aos-once="true"
  >
    <nav
      class="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="shrink-0"
        aria-label="Selldesk home"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <img
          src="../assets/img/logo.png"
          alt="Selldesk"
          class="h-9 w-auto object-contain lg:h-11"
        />
      </router-link>

      <!-- Sign In -->
      <router-link
        to="/signin"
        class="rounded-full bg-[#053758] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#042a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#053758]"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        Sign In
      </router-link>
    </nav>
  </header>
</template>
