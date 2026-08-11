<script setup>
import { ref, computed } from 'vue'
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

const activeTab = ref('All')

const tabs = [
  { name: 'All', count: 128 },
  { name: 'Paid', count: 84 },
  { name: 'Sent', count: 19 },
  { name: 'Partial', count: 8 },
  { name: 'Overdue', count: 17 },
  { name: 'Draft', count: 12 }
]

const invoices = [
  {
    id: 'INV-00128',
    client: 'Adeola Stores',
    amount: '₦85,000',
    dueDate: 'Aug 09',
    status: 'PAID'
  },
  {
    id: 'INV-00127',
    client: 'Chris Holdings',
    amount: '₦120,000',
    dueDate: 'Aug 15',
    status: 'SENT'
  },
  {
    id: 'INV-00125',
    client: 'Kola & Co.',
    amount: '₦370,000',
    dueDate: 'Aug 03',
    status: 'OVERDUE'
  }
]

const statusClasses = {
  PAID: 'bg-emerald-50 text-emerald-600',
  SENT: 'bg-blue-50 text-blue-600',
  OVERDUE: 'bg-red-50 text-red-600',
  PARTIAL: 'bg-amber-50 text-amber-600',
  DRAFT: 'bg-slate-100 text-slate-600'
}

const filteredInvoices = computed(() => {
  if (activeTab.value === 'All') return invoices
  return invoices.filter((inv) => inv.status.toLowerCase() === activeTab.value.toLowerCase())
})
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

      <!-- invoice dashboard -->
      <div class="min-h-screen bg-slate-50 font-sans text-slate-800">
        <!-- Header -->
        <div class="px-8 pt-8 pb-6 flex items-start justify-between">
          <div>
            <p class="text-xs font-medium tracking-wider text-slate-400 uppercase mb-1">
              Invoice Management
            </p>
            <h1 class="text-2xl font-semibold text-slate-900">Invoices</h1>
            <p class="text-sm text-slate-500 mt-1">
              Manage, track and collect every invoice from one place.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <button
              class="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              ↓ Export
            </button>
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition shadow-sm"
            >
              + Create invoice
            </button>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="px-8 mb-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Total Invoiced -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-sm">
              <p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                Total Invoiced
              </p>
              <p class="text-2xl font-semibold text-slate-900">₦8.42m</p>
              <p class="text-xs text-emerald-500 mt-1.5 flex items-center gap-1">
                <span>↑</span> 14.8%
              </p>
            </div>

            <!-- Paid -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-sm">
              <p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Paid</p>
              <p class="text-2xl font-semibold text-slate-900">₦6.73m</p>
              <p class="text-xs text-emerald-500 mt-1.5">79.9% collected</p>
            </div>

            <!-- Outstanding -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-sm">
              <p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                Outstanding
              </p>
              <p class="text-2xl font-semibold text-slate-900">₦1.32m</p>
              <p class="text-xs text-amber-500 mt-1.5">15.7%</p>
            </div>

            <!-- Overdue -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-sm">
              <p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Overdue</p>
              <p class="text-2xl font-semibold text-slate-900">₦370k</p>
              <p class="text-xs text-red-500 mt-1.5">23 need attention</p>
            </div>
          </div>
        </div>

        <!-- Filters + Table -->
        <div class="px-8 mb-6">
          <div class="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
            <!-- Status Tabs -->
            <div
              class="flex items-center gap-1 px-4 pt-4 pb-3 border-b border-slate-100 overflow-x-auto"
            >
              <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="activeTab = tab.name"
                :class="[
                  'px-3.5 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition',
                  activeTab === tab.name
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                ]"
              >
                {{ tab.name }} {{ tab.count }}
              </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr
                    class="text-left text-xs font-medium text-slate-400 uppercase tracking-wider border-b border-slate-100"
                  >
                    <th class="px-6 py-3 font-medium">Invoice</th>
                    <th class="px-6 py-3 font-medium">Client</th>
                    <th class="px-6 py-3 font-medium">Amount</th>
                    <th class="px-6 py-3 font-medium">Due Date</th>
                    <th class="px-6 py-3 font-medium">Status</th>
                    <th class="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr
                    v-for="invoice in filteredInvoices"
                    :key="invoice.id"
                    class="hover:bg-slate-50/60 transition"
                  >
                    <td class="px-6 py-4 font-medium text-slate-800">
                      {{ invoice.id }}
                    </td>
                    <td class="px-6 py-4 text-slate-600">
                      {{ invoice.client }}
                    </td>
                    <td class="px-6 py-4 font-medium text-slate-800">
                      {{ invoice.amount }}
                    </td>
                    <td class="px-6 py-4 text-slate-500">
                      {{ invoice.dueDate }}
                    </td>
                    <td class="px-6 py-4">
                      <span
                        :class="[
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                          statusClasses[invoice.status]
                        ]"
                      >
                        {{ invoice.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button
                        class="px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="px-8 pb-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Collection Progress -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm">
              <div class="flex items-center justify-between mb-5">
                <h3 class="text-sm font-semibold text-slate-800">Collection progress</h3>
                <span class="text-xs text-slate-400">August 2026</span>
              </div>

              <p class="text-xl font-semibold text-slate-900 mb-3">79.9% collected</p>

              <!-- Progress Bar -->
              <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div
                  class="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                  style="width: 79.9%"
                ></div>
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-500">Total invoiced</span>
                  <span class="font-medium text-slate-800">₦8.42m</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-500">Outstanding</span>
                  <span class="font-medium text-slate-800">₦1.32m</span>
                </div>
              </div>
            </div>

            <!-- Invoice Health -->
            <div class="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-sm">
              <div class="flex items-center justify-between mb-5">
                <h3 class="text-sm font-semibold text-slate-800">Invoice health</h3>
                <span class="text-xs text-slate-400">Current</span>
              </div>

              <div class="space-y-4">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-600">Paid on time</span>
                  <span class="font-medium text-emerald-500">82%</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-600">Awaiting payment</span>
                  <span class="font-medium text-slate-700">15.7%</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-600">Overdue</span>
                  <span class="font-medium text-red-500">4.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
