<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  // your existing nav items here
  { label: 'Company', hasDropdown: true },
  { label: 'Resources', hasDropdown: true }
  // ...
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
<template>
  <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav
      class="max-w-screen-2xl mx-auto h-16 lg:h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between"
    >
      <!-- Logo -->
      <img src="/logo.png" alt="Selldesk Logo" class="h-10 sm:h-11 lg:h-12 w-auto flex-shrink-0" />

      <div
        class="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-gray-700"
      >
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Integrations</a>
        <a href="#">Download</a>

        <button
          v-for="item in navItems"
          :key="item.label"
          class="flex items-center gap-1 hover:text-blue-600"
        >
          {{ item.label }}

          <svg v-if="item.hasDropdown" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Right side actions (Desktop) -->
      <div class="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
        <button aria-label="Search" class="text-slate-500 hover:text-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-5 h-5"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button aria-label="Language" class="text-slate-500 hover:text-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
          </svg>
        </button>

        <span class="text-sm text-slate-700">English</span>

        <a href="#" class="text-sm font-semibold text-blue-600 hover:text-blue-700">Sign In</a>

        <a
          href="#"
          class="bg-[#053758] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
        >
          Sign Up For Free
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden text-slate-700 p-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6h12v12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <!-- Mobile Slide Menu -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/40" @click="toggleMobileMenu"></div>

        <!-- Slide Drawer -->
        <div
          class="absolute right-0 top-0 h-full w-[85%] sm:w-[70%] md:w-[55%] max-w-md bg-white shadow-2xl flex flex-col"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-5 border-b">
            <h2 class="text-lg font-semibold">Menu</h2>

            <button @click="toggleMobileMenu" class="p-2 rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="flex-1 overflow-y-auto p-6">
            <!-- Main Links -->
            <nav class="flex flex-col gap-5 text-slate-700 font-medium">
              <a href="#" class="hover:text-blue-600">Features</a>
              <a href="#" class="hover:text-blue-600">Pricing</a>
              <a href="#" class="hover:text-blue-600">Integrations</a>
              <a href="#" class="hover:text-blue-600">Download</a>
            </nav>

            <!-- Dropdown Items -->
            <div class="border-t mt-8 pt-6">
              <button
                v-for="item in navItems"
                :key="item.label"
                class="flex justify-between items-center w-full py-3 text-left font-medium text-slate-700 hover:text-slate-900"
              >
                <span>{{ item.label }}</span>

                <svg
                  v-if="item.hasDropdown"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <!-- Actions -->
            <div class="border-t mt-8 pt-6 space-y-4">
              <button class="flex items-center gap-3 text-slate-700">🔍 Search</button>

              <button class="flex items-center gap-3 text-slate-700">🌐 English</button>

              <a href="#" class="block text-blue-600 font-semibold"> Sign In </a>

              <a
                href="#"
                class="block bg-[#053758] text-white rounded-full py-3 text-center font-semibold"
              >
                Sign Up For Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
