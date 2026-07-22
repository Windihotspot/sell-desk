<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { reactive } from 'vue'

const form = reactive({
  companyName: '',
  email: '',
  password: '',
  agreed: false
})

const emit = defineEmits(['submit'])

function handleSubmit() {
  emit('submit', { ...form })
}
</script>

<template>
  <!--Hero Section-->
  <section class="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- LEFT: copy + form -->
      <div>
        <span
          class="inline-block bg-sky-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md"
        >
          FREE INVOICING SOFTWARE
        </span>

        <h1 class="mt-5 text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-slate-900">
          Invoicing,<br />
          but
          <span class="relative inline-block text-teal-600">
            better
            <svg
              class="absolute left-0 -bottom-2 w-full"
              height="8"
              viewBox="0 0 160 8"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 C 40 1, 120 1, 158 6"
                stroke="#0d9488"
                stroke-width="3"
                fill="none"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </h1>

        <p class="mt-5 text-slate-500 text-[15px] leading-relaxed max-w-md">
          Create professional invoices in seconds, track payments in real time and monitor your
          business growth in a single powerful dashboard.
        </p>

        <form class="mt-6 space-y-3 max-w-md" @submit.prevent="handleSubmit">
          <input
            v-model="form.companyName"
            type="text"
            placeholder="Company Name"
            class="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            class="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
          />
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
          />

          <label class="flex items-start gap-2 text-xs text-slate-500 pt-1">
            <input
              v-model="form.agreed"
              type="checkbox"
              class="mt-0.5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span>
              I agree to the
              <a href="#" class="text-teal-600 font-medium">Terms of Service</a>
              and
              <a href="#" class="text-teal-600 font-medium">Privacy Policy</a>
            </span>
          </label>

          <p class="text-xs text-slate-400">
            Your data will be in US data center.
            <a href="#" class="underline text-slate-500">Select Country</a>
          </p>

          <button
            type="submit"
            class="w-full bg-[#0b2540] hover:bg-[#0a1f36] transition-colors text-white text-sm font-semibold py-3.5 rounded-lg"
          >
            Create Free Account
          </button>

          <!-- <div class="flex items-center gap-3 pt-1">
            <span class="text-xs text-slate-400 whitespace-nowrap">Or sign in using</span>
            <div class="flex items-center gap-3 text-slate-400">
              <button
                type="button"
                title="Google"
                class="w-4 h-4 flex items-center justify-center text-[13px] font-bold hover:text-slate-600"
              >
                G
              </button>
              <button
                type="button"
                title="Facebook"
                class="w-4 h-4 flex items-center justify-center text-[13px] font-bold hover:text-slate-600"
              >
                f
              </button>
              <button
                type="button"
                title="X"
                class="w-4 h-4 flex items-center justify-center text-[13px] font-bold hover:text-slate-600"
              >
                X
              </button>
              <button
                type="button"
                title="Microsoft"
                class="w-4 h-4 flex items-center justify-center text-[13px] font-bold hover:text-slate-600"
              >
                M
              </button>
              <button
                type="button"
                title="LinkedIn"
                class="w-4 h-4 flex items-center justify-center text-[13px] font-bold hover:text-slate-600"
              >
                in
              </button>
            </div>
          </div> -->
        </form>
      </div>

      <!-- RIGHT: phone mockup -->
      <div class="relative flex justify-center lg:justify-end">
        <div
          class="absolute -inset-10 bg-gradient-to-br from-teal-50 via-slate-50 to-transparent rounded-[3rem] -z-10"
        ></div>

        <!-- image wrapper controls the sizing everything else is pinned to -->
        <div class="relative w-[280px] sm:w-[340px] lg:w-[400px]">
          <img
            src="../assets/img/mockup.png"
            alt="SellDesk invoicing app on a phone"
            class="w-full h-[60vh] object-contain drop-shadow-xl transition-opacity duration-700"
          />

          <!-- floating card: paid -->
          <div
            class="absolute top-[8%] -left-4 sm:-left-8 lg:-left-10 bg-white rounded-xl shadow-lg px-3.5 py-2.5 w-36 sm:w-40"
          >
            <div class="flex items-center gap-1.5">
              <span
                class="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center"
                >✓</span
              >
              <span class="text-[10px] font-semibold text-slate-700">Invoce Paid</span>
            </div>
            <p class="text-sm font-extrabold text-slate-900 mt-0.5">₦125,000</p>
            <p class="text-[9px] text-slate-400">2 mins ago</p>
          </div>

          <!-- floating card: sent -->
          <div
            class="absolute top-[16%] -right-3 sm:-right-6 lg:-right-8 bg-white rounded-xl shadow-lg px-3.5 py-2.5 w-28 sm:w-32"
          >
            <div class="flex items-center gap-1.5">
              <span class="text-[11px]">📤</span>
              <span class="text-[10px] font-semibold text-slate-700">Invoice Sent</span>
            </div>
            <p class="text-[10px] font-semibold text-slate-800 mt-0.5">John Ltd.</p>
            <p class="text-[9px] text-amber-500">Pending</p>
          </div>

          <!-- floating card: whatsapp -->
          <div
            class="absolute bottom-[14%] -left-6 sm:-left-10 lg:-left-12 bg-white rounded-xl shadow-lg px-3.5 py-2.5 w-36 sm:w-40"
          >
            <div class="flex items-center gap-1.5">
              <span class="text-[11px]">💬</span>
              <span class="text-[10px] font-semibold text-slate-700">Whatsapp shared</span>
            </div>
            <p class="text-[9px] text-slate-400 mt-0.5">Delivered</p>
            <p class="text-[9px] text-slate-300">Just now</p>
          </div>
        </div>
      </div>
    </div>

    <!-- feature strip -->
    <div class="mt-16 pt-6 border-t border-slate-100">
      <div
        class="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm font-medium text-slate-700"
      >
        <span class="flex items-center gap-2"
          ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Instant Invoice</span
        >
        <span class="flex items-center gap-2"
          ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Payment Tracking</span
        >
        <span class="flex items-center gap-2"
          ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Secure &amp; Reliable</span
        >
        <span class="flex items-center gap-2"
          ><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Live Analytics</span
        >
      </div>
    </div>

    <p class="text-center font-bold text-slate-900 mt-8">Trusted by business across Nigeria</p>
  </section>
</template>

<style scoped>
.qr-fake {
  background-image: repeating-linear-gradient(0deg, #111 0 3px, transparent 3px 6px),
    repeating-linear-gradient(90deg, #111 0 3px, transparent 3px 6px);
  background-size: 6px 6px;
  background-blend-mode: multiply;
}
</style>
