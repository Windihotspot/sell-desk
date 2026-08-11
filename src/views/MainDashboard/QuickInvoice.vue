<script setup>
import { ref } from 'vue'
import DashboardNav from './DashboardNav.vue'

// STATE
// =====================================================
const sidebarOpen = ref(false)
const globalSearchQuery = ref('')
const toastMsg = ref('')
const toastVisible = ref(false)
const toastTimer = ref(null)

const toast = (message) => {
  toastMsg.value = message
  toastVisible.value = true
  clearTimeout(toastTimer.value)
  toastTimer.value = setTimeout(() => {
    toastVisible.value = false
  }, 1800)
}

const doGlobalSearch = () => {
  const q = globalSearchQuery.value.trim().toLowerCase()
  if (!q) return
  toast(`Searching for “${globalSearchQuery.value}”...`)
}
</script>

<template>
  <div class="min-h-screen" v-cloak>
    <DashboardNav />

    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/30 z-[90] md:hidden"
    ></div>

    <!-- MAIN -->
    <main class="md:ml-[245px] min-h-screen">
      <header
        class="h-[70px] bg-white border-b border-brand-line flex items-center justify-between px-4 md:px-8 sticky top-0 z-[60]"
      >
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="text-xl border-0 bg-transparent md:hidden"
        >
          ☰
        </button>

        <div
          class="hidden sm:flex h-[38px] w-[300px] border border-brand-line rounded-lg items-center px-3 text-brand-light"
        >
          ⌕
          <input
            v-model="globalSearchQuery"
            @input="doGlobalSearch"
            placeholder="Search invoices, customers..."
            class="border-0 outline-none w-full text-[11px] ml-2 bg-transparent"
          />
        </div>

        <div class="flex items-center gap-3">
          <button
            @click="toast('No new notifications')"
            class="w-[35px] h-[35px] border border-brand-line rounded-lg bg-white text-brand-muted relative"
          >
            ♢<span class="absolute w-1.5 h-1.5 rounded-full bg-red-600 right-2 top-1.5"></span>
          </button>
          <button
            @click="toast('Help centre opened')"
            class="w-[35px] h-[35px] border border-brand-line rounded-lg bg-white text-brand-muted"
          >
            ?
          </button>
          <div
            class="w-[35px] h-[35px] rounded-full grid place-items-center text-white text-[10px] font-black avatar-grad"
          >
            EO
          </div>
        </div>
      </header>

      <!-- quick invoice dashboard -->
      <div class="min-h-screen bg-slate-50 font-sans">
        <!-- Header -->
        <div class="px-8 pt-8 pb-6">
          <p class="text-xs font-medium tracking-wider text-slate-400 uppercase mb-1">
            Fast Invoicing
          </p>
          <h1 class="text-2xl font-semibold text-slate-800">Quick Invoice</h1>
          <p class="text-sm text-slate-500 mt-1">
            Create and send a professional invoice in a few seconds.
          </p>
        </div>

        <!-- Main Content -->
        <div class="px-8 pb-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
            <!-- Left: Invoice Details -->
            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h2 class="text-sm font-semibold text-slate-800">Invoice details</h2>
                <span class="text-xs text-slate-400">Draft autosaved</span>
              </div>

              <div class="divide-y divide-slate-100">
                <!-- Client -->
                <div class="flex items-center justify-between px-6 py-4">
                  <span class="text-sm text-slate-500">Client</span>
                  <span class="text-sm font-medium text-slate-800">Adeola Stores</span>
                </div>

                <!-- Invoice number -->
                <div class="flex items-center justify-between px-6 py-4">
                  <span class="text-sm text-slate-500">Invoice number</span>
                  <span class="text-sm font-medium text-slate-800">INV-00129</span>
                </div>

                <!-- Issue date -->
                <div class="flex items-center justify-between px-6 py-4">
                  <span class="text-sm text-slate-500">Issue date</span>
                  <span class="text-sm font-medium text-slate-800">09 Aug 2026</span>
                </div>

                <!-- Due date -->
                <div class="flex items-center justify-between px-6 py-4">
                  <span class="text-sm text-slate-500">Due date</span>
                  <span class="text-sm font-medium text-slate-800">16 Aug 2026</span>
                </div>
              </div>
            </div>

            <!-- Right: Invoice Preview -->
            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h2 class="text-sm font-semibold text-slate-800">Invoice preview</h2>
                <span class="text-xs text-slate-400">Live preview</span>
              </div>

              <div class="p-6">
                <!-- Invoice Card -->
                <div class="border border-slate-200 rounded-xl p-6 bg-white">
                  <!-- Logo + Title -->
                  <div class="flex items-start justify-between mb-10">
                    <div class="flex items-center gap-1.5">
                      <span class="text-xl font-bold text-blue-600 tracking-tight">sell</span>
                      <span class="text-xl font-bold text-slate-800 tracking-tight">desk</span>
                    </div>
                    <div class="text-right">
                      <h3 class="text-2xl font-bold text-slate-800 tracking-wide">INVOICE</h3>
                      <p class="text-sm text-slate-500 mt-1">INV-00129</p>
                    </div>
                  </div>

                  <!-- Client + Amounts -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-slate-600">Adeola Stores</span>
                      <span class="text-sm font-semibold text-slate-800">₦85,000</span>
                    </div>

                    <div class="border-t border-slate-100 pt-4">
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-slate-500">Website design service</span>
                        <span class="text-sm font-medium text-slate-800">₦85,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
