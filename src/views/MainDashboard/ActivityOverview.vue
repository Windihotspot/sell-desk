<script setup>
import { ref } from 'vue'
import DashboardNav from './DashboardNav.vue'

// =====================================================
// STATE
// =====================================================
const sidebarOpen = ref(false)
const globalSearchQuery = ref('')
const toastMsg = ref('')
const toastVisible = ref(false)
const toastTimer = ref(null)

// =====================================================
// ACTIVITY DATA
// =====================================================
const kpis = [
  {
    label: 'Transaction Volume',
    value: '₦3.28m',
    foot: '↑ 12.4%',
    tone: 'text-[#10a276]'
  },
  {
    label: 'Successful Payments',
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
    label: 'Failed / Reversed',
    value: '23',
    foot: '1.8%',
    tone: 'text-red-500'
  }
]

const columns = ['Activity', 'Reference', 'Client', 'Amount', 'Status']

const activityRows = [
  {
    activity: 'Payment received',
    reference: 'PAY-92821',
    client: 'Adeola Stores',
    amount: '₦85,000',
    status: 'Successful'
  },
  {
    activity: 'Invoice sent',
    reference: 'INV-00127',
    client: 'Chris Holdings',
    amount: '₦120,000',
    status: 'Sent'
  },
  {
    activity: 'Invoice overdue',
    reference: 'INV-00125',
    client: 'Kola & Co.',
    amount: '₦370,000',
    status: 'Overdue'
  }
]

// =====================================================
// METHODS
// =====================================================
const statusClass = (status) => {
  const map = {
    Successful: 'bg-[#e8f8f1] text-[#0b8b62]',
    Sent: 'bg-[#eaf0ff] text-[#2d5dcc]',
    Overdue: 'bg-[#fff0f0] text-[#c64545]',
    Pending: 'bg-[#fff5df] text-[#a56a00]',
    Failed: 'bg-[#fff0f0] text-[#c64545]'
  }
  return map[status] || 'bg-gray-100 text-gray-600'
}

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

      <!-- activity dashboard -->

      <section class="min-h-screen bg-[#f6f8fc] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <p class="text-[10px] font-bold tracking-[1.5px] text-[#98a2b3] uppercase mb-1">
                Activity Overview
              </p>
              <h1 class="text-2xl sm:text-[28px] font-bold text-[#101828] tracking-tight">
                Activity Overview
              </h1>
              <p class="text-[13px] text-[#667085] mt-1">
                Monitor revenue, payments, invoices and merchant activity.
              </p>
            </div>

            <button
              class="self-start sm:self-auto px-4 py-2.5 rounded-xl border border-[#e7eaf0] bg-white text-[12px] font-semibold text-[#344054] hover:bg-gray-50 transition flex items-center gap-1.5"
            >
              ↓ Export report
            </button>
          </div>

          <!-- KPI Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            <div
              v-for="kpi in kpis"
              :key="kpi.label"
              class="bg-white border border-[#e7eaf0] rounded-2xl p-4 sm:p-5 shadow-sm"
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

          <!-- Recent Activity Table -->
          <div class="bg-white border border-[#e7eaf0] rounded-2xl shadow-sm overflow-hidden">
            <div class="flex items-center justify-between px-5 py-4 border-b border-[#f0f2f6]">
              <h3 class="text-[14px] font-bold text-[#101828]">Recent activity</h3>
              <span class="text-[11px] text-[#98a2b3]">Live merchant activity feed</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px]">
                <thead>
                  <tr class="border-b border-[#f0f2f6]">
                    <th
                      v-for="col in columns"
                      :key="col"
                      class="px-5 py-3 text-left text-[10px] font-bold tracking-wide text-[#98a2b3] uppercase"
                    >
                      {{ col }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in activityRows"
                    :key="i"
                    class="border-b border-[#f0f2f6] last:border-0 hover:bg-[#fafbfc] transition"
                  >
                    <td class="px-5 py-3.5 text-[13px] text-[#344054]">
                      {{ row.activity }}
                    </td>
                    <td class="px-5 py-3.5 text-[13px] text-[#667085]">
                      {{ row.reference }}
                    </td>
                    <td class="px-5 py-3.5 text-[13px] text-[#344054]">
                      {{ row.client }}
                    </td>
                    <td class="px-5 py-3.5 text-[13px] font-medium text-[#101828]">
                      {{ row.amount }}
                    </td>
                    <td class="px-5 py-3.5">
                      <span
                        class="inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                        :class="statusClass(row.status)"
                      >
                        {{ row.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
