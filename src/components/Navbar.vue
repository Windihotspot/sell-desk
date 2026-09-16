<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import { login as keycloakLogin } from '@/services/keycloak/keycloak.service'

const router = useRouter()

const isOpen = ref(false)
const openDropdown = ref(null)

// const navItems = [
//   {
//     label: "Company",
//     children: [
//       {
//         label: "About Teinnovate",
//         to: "/aboutteinnovate",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     children: [
//       {
//         label: "Help & Resources",
//         to: "/help&resorces",
//       },
//     ],
//   },
// ];

// function goToSignin() {
//   router.push('/login')
// }

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
  <header class="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50">
    <nav
      class="max-w-screen-2xl mx-auto h-16 lg:h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between"
    >
      <!-- ==================== -->
      <!-- SELLDESK LOGO -->
      <!-- ==================== -->
      <router-link to="/" class="flex items-center shrink-0" @click="closeMenu">
        <img
          src="../assets/img/logo.png"
          alt="Selldesk Logo"
          class="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14 w-auto object-contain"
        />
      </router-link>

      
      <!-- ==================== -->
      <!-- DESKTOP RIGHT SIDE -->
      <!-- ==================== -->
      <div class="hidden lg:flex items-center gap-6">
        

        <!-- Sign In -->
        <div
          @click="goToSignin"
          class="bg-[#053758] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#042a44] transition-all duration-200 hover:-translate-y-0.5"
        >
          Sign In
        </div>
      </div>

      <!-- ==================== -->
      <!-- MOBILE HAMBURGER -->
      <!-- ==================== -->
      <button
        @click="toggleMenu"
        class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 transition-colors"
        aria-label="Toggle menu"
        :aria-expanded="isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-slate-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- ==================== -->
    <!-- MOBILE MENU -->
    <!-- ==================== -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div v-if="isOpen" class="fixed top-16 left-0 right-0 bottom-0 z-50 md:hidden bg-white">
        <div class="h-full overflow-y-auto px-5 py-6">
        
          <!-- Sign In -->
          <div class="mt-8">
            <div
              @click="goToSignin"
              
              class="block w-full text-center bg-[#053758] hover:bg-[#042a44] text-white rounded-full px-6 py-3.5 font-semibold transition-all duration-200 shadow-sm"
            >
              Sign In
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
