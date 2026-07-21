<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  // your existing nav items here
  { label: 'Company', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  // ...
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
<template>
  <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">
      <!-- Logo -->
      <div class="flex items-center gap-1 shrink-0">
        <div class="leading-tight">
          <span class="text-2xl font-bold text-blue-600 block -mb-1 ml-4">sell</span>
          <span class="text-2xl font-bold text-slate-900 block">desk</span>
        </div>
        <span class="text-emerald-500 font-medium text-xs mt-1">@quidly</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-sm">
        <a href="#" class="hover:text-blue-600 transition-colors">Features</a>
        <a href="#" class="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#" class="hover:text-blue-600 transition-colors">Integrations</a>
        <a href="#" class="hover:text-blue-600 transition-colors">Download</a>
        <!-- <a href="#" class="hover:text-blue-600 transition-colors">Resources</a> -->
      </nav>

      <!-- Desktop Right Nav Items -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.label"
          class="flex items-center gap-1 text-slate-700 font-medium text-sm hover:text-slate-900 transition-colors"
        >
          {{ item.label }}
          <svg
            v-if="item.hasDropdown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4 h-4 text-slate-400"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Right side actions (Desktop) -->
      <div class="hidden md:flex items-center gap-5 shrink-0">
        <button aria-label="Search" class="text-slate-500 hover:text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button aria-label="Language" class="text-slate-500 hover:text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
          </svg>
        </button>

        <span class="text-sm text-slate-700">English</span>

        <a href="#" class="text-sm font-semibold text-blue-600 hover:text-blue-700">Sign In</a>

        <a href="#" class="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
          Sign Up For Free
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-slate-700 p-2"
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
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-200 py-6 px-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
    >
      <div class="flex flex-col gap-6">
        <!-- Main Nav Links -->
        <nav class="flex flex-col gap-5 text-gray-700 font-medium">
          <a href="#" class="hover:text-blue-600 py-1">Features</a>
          <a href="#" class="hover:text-blue-600 py-1">Pricing</a>
          <a href="#" class="hover:text-blue-600 py-1">Integrations</a>
          <a href="#" class="hover:text-blue-600 py-1">Download</a>
          <!-- <a href="#" class="hover:text-blue-600 py-1">Resources</a> -->
        </nav>

        <!-- Dropdown Nav Items -->
        <div class="flex flex-col gap-4 border-t border-gray-100 pt-6">
          <button
            v-for="item in navItems"
            :key="item.label"
            class="flex items-center justify-between text-left text-slate-700 font-medium py-2 hover:text-slate-900"
          >
            <span>{{ item.label }}</span>
            <svg
              v-if="item.hasDropdown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-slate-400"
            >
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Mobile Actions -->
        <div class="flex flex-col gap-4 border-t border-gray-100 pt-6">
          <div class="flex items-center gap-3 text-slate-700">
            <button aria-label="Search" class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <span class="text-sm">Search</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <button aria-label="Language" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z" />
                </svg>
              </button>
              <span class="text-sm text-slate-700">English</span>
            </div>
          </div>

          <a href="#" class="text-blue-600 font-semibold py-3">Sign In</a>
          <a href="#" class="bg-slate-900 text-white font-semibold py-3.5 rounded-full text-center">Sign Up For Free</a>
        </div>
      </div>
    </div>
  </header>
</template>