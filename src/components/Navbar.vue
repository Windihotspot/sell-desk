<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const openDropdown = ref(null)
const showCompanyDropdown = ref(false)
const showResourcesDropdown = ref(false)

const toggleDropdown = (label) => {
  openDropdown.value = openDropdown.value === label ? null : label
}

const navItems = [
  {
    label: 'Company',
    hasDropdown: true,
    children: [
      { label: 'About Teinnovate', to: '/aboutteinnovate' }
      // { label: 'Careers', to: '/careers' }
    ]
  },
  {
    label: 'Resources',
    hasDropdown: true,
    children: [
      { label: 'Help & Resorces', to: '/help&resorces' }
      // { label: 'Resources', to: '/resources' }
    ]
  }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleCompanyDropdown = () => {
  showCompanyDropdown.value = !showCompanyDropdown.value
}
const toggleResourcesDropdown = () => {
  showResourcesDropdown.value = !showResourcesDropdown.value
  showCompanyDropdown.value = false
}
</script>
<template>
  <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
    <nav
      class="max-w-screen-2xl mx-auto h-16 lg:h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="/logo.png"
          alt="Selldesk Logo"
          class="h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14 w-auto"
        />
      </div>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-sm">
        <!-- <router-link to="/features" class="hover:text-blue-600 transition-colors">
          Features
        </router-link>
        <router-link to="/pricing" class="hover:text-blue-600 transition-colors">
          Pricing
        </router-link> -->
        <!-- <router-link to="/integrations" class="hover:text-blue-600 transition-colors">
          Integrations
        </router-link> -->
        <router-link to="/download" class="hover:text-blue-600 transition-colors">
          Download
        </router-link>
        <!-- <a href="#" class="hover:text-blue-600 transition-colors">Resources</a> -->
      </nav>

      <!-- Desktop Right Nav Items -->
      <div class="hidden md:flex items-center gap-8">
        <div v-for="item in navItems" :key="item.label" class="relative">
          <button
            class="flex items-center gap-1 hover:text-blue-600 transition-colors"
            @click="item.hasDropdown && toggleDropdown(item.label)"
          >
            {{ item.label }}

            <svg
              v-if="item.hasDropdown"
              class="w-4 h-4 transition-transform duration-300"
              :class="{ 'rotate-180': openDropdown === item.label }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Dropdown -->
          <div
            v-if="item.hasDropdown && openDropdown === item.label"
            class="absolute left-0 mt-3 w-56 rounded-xl border bg-white shadow-lg py-2 z-50"
          >
            <router-link
              v-for="child in item.children"
              :key="child.label"
              :to="child.to"
              class="block px-4 py-3 hover:bg-gray-100 transition-colors"
            >
              {{ child.label }}
            </router-link>
          </div>
        </div>
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
          <!-- <svg
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
          </svg> -->
        </button>

        <span class="text-sm text-slate-700">English</span>

        <!-- <router-link to="/signup" class="text-sm font-semibold text-blue-600 hover:text-blue-700">
          sign up
        </router-link> -->
        <router-link
          to="/signin"
          class="bg-[#053758] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
        >
          sign In
        </router-link>
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
          class="absolute right-0 top-0 h-full w-[min(100%,320px)] xs:w-[85%] sm:w-[70%] md:w-[55%] lg:w-[420px] max-w-md bg-white shadow-2xl flex flex-col safe-top safe-bottom"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 border-b shrink-0"
          >
            <h2 class="text-lg sm:text-xl font-semibold text-slate-800">Menu</h2>

            <button
              @click="toggleMobileMenu"
              class="p-2.5 -mr-1.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-slate-600"
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
          <div class="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-5 sm:py-6">
            <!-- Main Links -->
            <nav class="flex flex-col gap-1 text-slate-700 font-medium">
              <!-- <router-link
                to="/features"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Features
              </router-link> -->
              <!-- <router-link
                to="/pricing"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Pricing
              </router-link> -->
              <!-- <router-link
                to="/integrations"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Integrations
              </router-link> -->
              <router-link
                to="/download"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Download
              </router-link>
            </nav>

            <!-- Dropdown Items -->
            <div class="border-t border-slate-100 mt-6 pt-5 space-y-1">
              <!-- Company -->
              <div>
                <button
                  @click="toggleCompanyDropdown"
                  class="flex items-center justify-between w-full px-3 py-3 rounded-lg font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Company</span>
                  <svg
                    class="w-4 h-4 transition-transform duration-300 shrink-0"
                    :class="{ 'rotate-180': showCompanyDropdown }"
                    xmlns="http://www.w3.org/2000/svg"
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

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <div
                    v-if="showCompanyDropdown"
                    class="mt-1 ml-2 sm:ml-3 rounded-lg border border-slate-100 bg-slate-50/80 overflow-hidden"
                  >
                    <router-link
                      to="/aboutteinnovate"
                      class="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      @click="showCompanyDropdown = false"
                    >
                      About Teinnovate
                    </router-link>
                  </div>
                </transition>
              </div>

              <!-- Resources -->
              <div>
                <button
                  @click="toggleResourcesDropdown"
                  class="flex items-center justify-between w-full px-3 py-3 rounded-lg font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span>Resources</span>
                  <svg
                    class="w-4 h-4 transition-transform duration-300 shrink-0"
                    :class="{ 'rotate-180': showResourcesDropdown }"
                    xmlns="http://www.w3.org/2000/svg"
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

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <div
                    v-if="showResourcesDropdown"
                    class="mt-1 ml-2 sm:ml-3 rounded-lg border border-slate-100 bg-slate-50/80 overflow-hidden"
                  >
                    <router-link
                      to="/help&resorces"
                      class="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      @click="showResourcesDropdown = false"
                    >
                      Help &amp; Resources
                    </router-link>
                  </div>
                </transition>
              </div>
            </div>

            <!-- Actions -->
            <div class="border-t border-slate-100 mt-6 pt-5 space-y-1">
              <button
                class="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span>🔍</span>
                <span>Search</span>
              </button>

              <button
                class="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span>🌐</span>
                <span>English</span>
              </button>

              <a
                href="/signup"
                class="block px-3 py-3 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              >
                Sign up for free
              </a>
            </div>

            <!-- Sign Up Button -->
            <div class="mt-6 pt-2 pb-2">
              <a
                href="/signin"
                class="block w-full text-center bg-[#053758] hover:bg-[#042a44] active:bg-[#031f33] text-white rounded-full px-6 py-3.5 font-semibold transition-colors shadow-sm"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
