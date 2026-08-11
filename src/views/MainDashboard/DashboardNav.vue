<script setup>
import { ref } from 'vue'

// =====================================================
// STATE
// =====================================================
const currentView = ref('home')
const sidebarOpen = ref(false)
const globalSearchQuery = ref('')

// =====================================================
// METHODS
// =====================================================
const go = (view) => {
  currentView.value = view
  sidebarOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navItemClass = (view) => {
  const base =
    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200'

  if (currentView.value === view) {
    return `${base} bg-blue-50 text-blue-700 shadow-sm`
  }
  return `${base} text-slate-600 hover:bg-slate-50 hover:text-slate-900`
}

const doGlobalSearch = () => {
  // You can expand this later
  console.log('Searching for:', globalSearchQuery.value)
}

const showAccountMenu = ref(false)

const toggleAccountMenu = () => {
  showAccountMenu.value = !showAccountMenu.value
}

const switchAccount = () => {
  // Add your switch-account logic here
  console.log('Switch account')
}

const logout = () => {
  // Add your logout logic here
  console.log('Logout')
}
</script>

<template>
  <!-- ===================== OVERLAY (Mobile) ===================== -->
  <div
    v-if="sidebarOpen"
    @click="sidebarOpen = false"
    class="fixed inset-0 bg-black/40 z-[90] md:hidden transition-opacity"
  ></div>

  <!-- ===================== SIDEBAR ===================== -->
  <aside
    class="w-[260px] bg-white border-r border-slate-200 fixed left-0 top-0 bottom-0 z-[100] flex flex-col transition-transform duration-300 ease-out"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
  >
    <!-- Brand -->
    <div class="px-5 pt-5 pb-4">
      <div class="flex items-center gap-1.5">
        <span class="text-2xl font-black tracking-tighter text-slate-900">
          <span class="text-blue-600">sell</span>desk
        </span>
        <span class="text-[9px] font-bold text-slate-400 tracking-wide">@ quidly</span>
      </div>
    </div>

    <!-- Workspace Switcher -->
    <div class="px-4 mb-5">
      <div
        class="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 cursor-pointer hover:bg-slate-100 transition"
      >
        <p class="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-1">Workspace</p>
        <div class="flex items-center justify-between">
          <strong class="text-[13px] text-slate-800">Emmanuel's Business</strong>
          <span class="text-slate-400 text-xs">▾</span>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto px-3 space-y-6 pb-6">
      <!-- Overview -->
      <div>
        <p class="px-3 mb-2 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          Overview
        </p>
        <div class="space-y-1">
          <RouterLink
            to="/dashboard"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
          >
            <span class="text-lg opacity-80">⌂</span>
            <span>dashboard</span>
          </RouterLink>

          <RouterLink
            to="/activityoverview"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
            active-class="bg-[#1e63f2] text-white shadow-[0_8px_20px_rgba(30,99,242,0.22)]"
          >
            <span class="text-lg opacity-80">◉</span>
            <span>Activity</span>
          </RouterLink>
        </div>
      </div>

      <!-- Business -->
      <div>
        <p class="px-3 mb-2 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          Workspace
        </p>
        <div class="space-y-1">
          <RouterLink
            to="/quickinvoice"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
            active-class="bg-[#1e63f2] text-white shadow-[0_8px_20px_rgba(30,99,242,0.22)]"
          >
            <span class="text-lg opacity-80">＋</span>
            <span>Quick Invoice</span>
          </RouterLink>

          <RouterLink
            to="/invoices"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
            active-class="bg-[#1e63f2] text-white shadow-[0_8px_20px_rgba(30,99,242,0.22)]"
          >
            <span class="text-lg opacity-80">▤</span>
            <span>Invoices</span>
          </RouterLink>

          <RouterLink
            to="/payment"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
            active-class="bg-[#1e63f2] text-white shadow-[0_8px_20px_rgba(30,99,242,0.22)]"
          >
            <span class="text-lg opacity-80">↕</span>
            <span>Payments</span>
          </RouterLink>

          <RouterLink
            to="/fullinvoice"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
          >
            <span class="text-lg opacity-80">▧</span>
            <span>Full Invoice</span>
          </RouterLink>
        </div>
      </div>

      <!-- Manage -->
      <div>
        <p class="px-3 mb-2 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          Manage
        </p>
        <div class="space-y-1">
          <RouterLink
            to="/clients"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
          >
            <span class="text-lg opacity-80">♙</span>
            <span>Clients</span>
          </RouterLink>
        </div>
        <p class="px-3 mb-2 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          Finance
        </p>

        <RouterLink
          to="/paywithsplit"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-[#1e63f2] transition-all duration-200"
        >
          <i class="mdi mdi-cash-multiple text-lg opacity-80"></i>
          <span>pay with split</span>
        </RouterLink>
      </div>

      <!-- System -->
      <div>
        <p class="px-3 mb-2 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          System
        </p>
        <div class="space-y-1">
          <button @click="go('settings')" :class="navItemClass('settings')">
            <span class="text-lg opacity-80">⚙</span>
            <span>Settings</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- User Profile -->

    <div class="relative">
      <!-- Drop-up menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-2 scale-95"
      >
        <div v-if="showAccountMenu" class="absolute bottom-full left-0 right-0 mb-2 z-50">
          <div
            class="bg-white rounded-2xl border border-slate-100 shadow-[0_12px_35px_rgba(15,23,42,0.12)] p-2"
          >
            <!-- Account header -->
            <div class="px-3 py-2.5 mb-1">
              <p class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Account</p>
              <p class="text-sm font-semibold text-slate-800 truncate">Emmanuel Ojedele</p>
            </div>

            <!-- Switch Account -->
            <button
              @click="switchAccount"
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
            >
              <span
                class="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-100 grid place-items-center transition-colors"
              >
                <i class="mdi mdi-account-switch-outline text-lg"></i>
              </span>

              <span class="flex-1 text-left"> Switch account </span>

              <i
                class="mdi mdi-chevron-right text-slate-300 group-hover:text-blue-500 transition-colors"
              ></i>
            </button>

            <!-- Divider -->
            <div class="h-px bg-slate-100 my-1.5"></div>

            <!-- Logout -->
            <button
              @click="logout"
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-200 group"
            >
              <span
                class="w-8 h-8 rounded-lg bg-red-50 group-hover:bg-red-100 grid place-items-center transition-colors"
              >
                <i class="mdi mdi-logout text-lg"></i>
              </span>

              <span class="flex-1 text-left"> Logout </span>
            </button>
          </div>
        </div>
      </Transition>

      <!-- Profile button -->
      <button
        @click="toggleAccountMenu"
        class="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all duration-200 text-left"
        :class="showAccountMenu ? 'bg-slate-50' : ''"
      >
        <!-- Avatar -->
        <div
          class="w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white text-[11px] font-bold shadow-sm"
        >
          EO
        </div>

        <!-- User information -->
        <div class="min-w-0 flex-1">
          <p class="text-[13px] font-semibold text-slate-800 truncate">Emmanuel Ojedele</p>

          <p class="text-[11px] text-slate-400">Merchant account</p>
        </div>

        <!-- Chevron -->
        <i
          class="mdi mdi-chevron-up text-slate-400 text-lg transition-transform duration-200"
          :class="showAccountMenu ? 'rotate-180 text-blue-500' : ''"
        ></i>
      </button>
    </div>
  </aside>

  <!-- ===================== TOP NAVBAR ===================== -->
  <!-- ===================== TOP NAVBAR ===================== -->

  <header
    class="fixed top-0 right-0 left-0 md:left-[260px] h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-[110] flex items-center justify-between px-4 md:px-6"
  >
    <!-- Left: Hamburger + Page Title -->
    <div class="flex items-center gap-3">
      <!-- Mobile Hamburger -->
      <button
        type="button"
        @click.stop="sidebarOpen = !sidebarOpen"
        class="md:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition"
        aria-label="Toggle navigation menu"
        :aria-expanded="sidebarOpen"
      >
        <svg
          v-if="!sidebarOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
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
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Page Title -->
      <div class="hidden sm:block">
        <img
          src="/logo.png"
          alt="Selldesk Logo"
          class="h-4 sm:h-5 md:h-6 lg:h-12 xl:h-14 w-auto ml-5"
        />
      </div>
    </div>

    <!-- Center: Search -->

    <div class="flex-1 max-w-md mx-4 hidden md:block">
      <!-- <div class="relative">
        <input
          v-model="globalSearchQuery"
          @keyup.enter="doGlobalSearch"
          type="text"
          placeholder="Search invoices, payments, customers..."
          class="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
        />

        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"> ⌕ </span>
      </div> -->
    </div>

    <!-- Right: Actions -->

    <div class="flex items-center gap-2">
      <!-- Notification -->
      <button
        type="button"
        class="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition relative"
      >
        <span class="text-lg">🔔</span>

        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- New Invoice -->
      <button
        type="button"
        @click="go('quick')"
        class="hidden sm:flex items-center gap-2 h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
      >
        <span>＋</span>
        <span>New Invoice</span>
      </button>
    </div>
  </header>
</template>
