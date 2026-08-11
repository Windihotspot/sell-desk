<script setup>
import { ref } from 'vue'
import DashboardNav from './DashboardNav.vue'

const go = (view) => {
  // replace with your real navigation
  console.log('Navigate to:', view)
}

const kpis = [
  {
    label: 'Total Revenue',
    value: '₦6.73m',
    foot: '↑ 12.8% this month',
    tone: 'text-[#10a276]'
  },
  {
    label: 'Payments Received',
    value: '1,184',
    foot: '92.2% success rate',
    tone: 'text-[#10a276]'
  },
  {
    label: 'Invoices Created',
    value: '128',
    foot: '↑ 18 this week',
    tone: 'text-[#10a276]'
  },
  {
    label: 'Invoices Sent',
    value: '19',
    foot: '14 paid • 5 awaiting payment',
    tone: 'text-[#10a276]',
    extraClass: 'bg-gradient-to-br from-white via-[#f7fbff] to-[#fff3e9]'
  }
]

const revenueBars = [
  { label: 'Mon', value: '220k', height: '45%' },
  { label: 'Tue', value: '310k', height: '62%' },
  { label: 'Wed', value: '260k', height: '52%' },
  { label: 'Thu', value: '390k', height: '78%' },
  { label: 'Sat', value: '470k', height: '94%' }
]

const activitySummary = [
  { label: 'Payments received', value: '₦720,000' },
  { label: 'Invoices sent', value: '18' },
  { label: 'Invoices paid', value: '14' },
  { label: 'Pending collections', value: '₦182,000' },
  { label: 'Overdue invoices', value: '4', tone: 'text-red-500' }
]

const quickActions = [
  {
    icon: '＋',
    label: 'Create Quick Invoice',
    desc: 'Send an invoice fast',
    view: 'quick'
  },
  { icon: '▧', label: 'Open Full Invoice', desc: 'Review invoice details', view: 'full' },
  {
    icon: '↗',
    label: 'PayNow with Split',
    desc: 'Configure split payments',
    view: 'split'
  },
  { icon: '♙', label: 'View Clients', desc: 'Manage your directory', view: 'clients' }
]

// =====================================================
// STATE
// =====================================================
const currentView = ref('dashboard')
const sidebarOpen = ref(false)
const globalSearchQuery = ref('')
const toastMsg = ref('')
const toastVisible = ref(false)
const toastTimer = ref(null)

// =====================================================
// METHODS
// =====================================================

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

  // Simple routing based on search term
  if (q.includes('invoice') || q.includes('inv-')) {
    go('invoices')
  } else if (q.includes('payment') || q.includes('pay-') || q.includes('qr')) {
    go('payments')
  } else if (q.includes('client') || q.includes('customer')) {
    go('clients')
  } else {
    toast(`No results for “${globalSearchQuery.value}”`)
  }
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

      <!-- dashboard -->
      <section class="min-h-screen bg-[#f6f8fc] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p class="text-[10px] font-bold tracking-[1.5px] text-[#98a2b3] uppercase mb-1">
                Merchant Dashboard
              </p>
              <h1 class="text-2xl sm:text-[28px] font-bold text-[#101828] tracking-tight">
                Good morning, Emmanuel
              </h1>
              <p class="text-[13px] text-[#667085] mt-1">
                Here’s what’s happening across your SellDesk business today.
              </p>
            </div>

            <div class="flex gap-2">
              <button
                @click="go('invoices')"
                class="px-4 py-2.5 rounded-xl border border-[#e7eaf0] bg-white text-[12px] font-semibold text-[#344054] hover:bg-gray-50 transition"
              >
                View invoices
              </button>
              <button
                @click="go('quick')"
                class="px-4 py-2.5 rounded-xl bg-[#eef4ff] text-[12px] font-semibold text-[#1e63f2] hover:bg-[#e0ebff] transition"
              >
                + Create invoice
              </button>
            </div>
          </div>

          <!-- KPI Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            <div
              v-for="kpi in kpis"
              :key="kpi.label"
              class="bg-white border border-[#e7eaf0] rounded-2xl p-4 sm:p-5 shadow-sm"
              :class="kpi.extraClass"
            >
              <p class="text-[10px] font-bold tracking-wide text-[#98a2b3] uppercase">
                {{ kpi.label }}
              </p>
              <p class="text-xl sm:text-2xl font-bold text-[#101828] mt-2">
                {{ kpi.value }}
              </p>
              <p class="text-[11px] mt-1.5 font-medium" :class="kpi.tone">
                {{ kpi.foot }}
              </p>
            </div>
          </div>

          <!-- Hero Banner -->
          <div
            class="relative overflow-hidden rounded-2xl p-5 sm:p-7 mb-5 text-white min-h-[180px] sm:min-h-[200px]"
            style="background: linear-gradient(135deg, #1e63f2 0%, #5b5cf0 45%, #6caf08 100%)"
          >
            <!-- Decorative circle -->
            <div class="absolute -right-16 -top-24 w-72 h-72 rounded-full bg-white/10"></div>

            <div
              class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div class="max-w-xl">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold tracking-wide"
                >
                  ✦ PAYNOW WITH SPLIT
                </span>

                <h2 class="text-xl sm:text-2xl font-bold mt-4 leading-snug">
                  Give customers more ways to pay.
                </h2>

                <p class="text-[13px] text-white/85 mt-2 leading-relaxed max-w-lg">
                  Let customers split eligible purchases into manageable payments while you keep a
                  simple, trackable payment experience inside SellDesk.
                </p>

                <div class="flex flex-wrap gap-2.5 mt-5">
                  <button
                    @click="go('split')"
                    class="px-4 py-2.5 rounded-xl bg-white text-[#1e63f2] text-[12px] font-bold hover:bg-gray-50 transition"
                  >
                    Set up Split Payment →
                  </button>
                  <button
                    class="px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-white text-[12px] font-semibold hover:bg-white/15 transition"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              <!-- Mini Split Card -->
              <div
                class="hidden lg:block w-[220px] shrink-0 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-4"
              >
                <p class="text-[10px] font-bold text-white/70 tracking-wide">SPLIT PAYMENT</p>
                <p class="text-2xl font-bold mt-2">₦250,000</p>

                <div class="h-1.5 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div class="h-full w-[64%] bg-white rounded-full"></div>
                </div>

                <div class="flex justify-between text-[11px] text-white/70 mt-2">
                  <span>4 payments</span>
                  <span>64% setup</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Revenue + Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-4 mb-6">
            <!-- Revenue Activity -->
            <div class="bg-white border border-[#e7eaf0] rounded-2xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-5">
                <h3 class="text-[14px] font-bold text-[#101828]">Revenue activity</h3>
                <span class="text-[11px] text-[#98a2b3]">Last 7 days</span>
              </div>

              <div class="flex items-end gap-3 h-[160px]">
                <div
                  v-for="bar in revenueBars"
                  :key="bar.label"
                  class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                >
                  <span class="text-[10px] text-[#98a2b3]">{{ bar.value }}</span>
                  <div
                    class="w-full bg-[#f0f4fa] rounded-lg h-[120px] flex items-end overflow-hidden"
                  >
                    <div
                      class="w-full rounded-t-lg"
                      :style="{
                        height: bar.height,
                        background: 'linear-gradient(180deg, #3b82f6, #1e63f2)'
                      }"
                    ></div>
                  </div>
                  <span class="text-[10px] text-[#98a2b3]">{{ bar.label }}</span>
                </div>
              </div>
            </div>

            <!-- Activity Summary -->
            <div class="bg-white border border-[#e7eaf0] rounded-2xl p-5 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-[14px] font-bold text-[#101828]">Activity summary</h3>
                <span class="text-[11px] text-[#98a2b3]">Today</span>
              </div>

              <div class="space-y-0">
                <div
                  v-for="(row, i) in activitySummary"
                  :key="i"
                  class="flex items-center justify-between py-3 border-b border-[#f0f2f6] last:border-0"
                >
                  <span class="text-[13px] text-[#667085]">{{ row.label }}</span>
                  <span class="text-[13px] font-semibold" :class="row.tone || 'text-[#101828]'">
                    {{ row.value }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-[14px] font-bold text-[#101828]">Quick actions</h3>
              <span class="text-[11px] text-[#98a2b3]">Common merchant tasks</span>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                v-for="action in quickActions"
                :key="action.label"
                @click="go(action.view)"
                class="bg-white border border-[#e7eaf0] rounded-2xl p-4 text-left hover:bg-[#f8fafc] transition shadow-sm"
              >
                <div
                  class="w-9 h-9 rounded-xl bg-[#eef4ff] text-[#1e63f2] grid place-items-center text-sm font-bold mb-3"
                >
                  {{ action.icon }}
                </div>
                <p class="text-[13px] font-semibold text-[#101828]">{{ action.label }}</p>
                <p class="text-[11px] text-[#98a2b3] mt-0.5">{{ action.desc }}</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
