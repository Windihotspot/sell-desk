<script setup>
import { ref } from 'vue'
import DashboardNav from '../DashboardNav.vue'

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

      <!-- full invoice  dashboard -->
    </main>
  </div>
</template>
