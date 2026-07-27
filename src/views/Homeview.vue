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

const features = [
  {
    title: 'Instant Invoice',
    description: 'Create professional invoices in under 30 seconds.'
  },
  {
    title: 'Secure & Reliable',
    description: '100% security to keep your money and data safe.'
  },
  {
    title: 'Custom Templates',
    description: 'Beautiful invoice template that represents your brand.'
  },
  {
    title: 'Real time Analytics',
    description: 'Tracks payments and revenue in real-time.'
  }
]
</script>

<template>
  <Navbar />
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
            src="../assets/img/hero-mockup.png"
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

  <!--Card Section-->

  <section class="bg-[#f4f7fb] py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- LEFT: product image (drop your image here) -->
        <div class="flex justify-center lg:justify-start">
          <img
            src="../assets/img/card-section.png"
            alt="SellDesk dashboard and mobile app"
            class="w-full max-w-xl h-auto object-contain"
          />
        </div>

        <!-- RIGHT: 2x2 feature cards -->
        <div class="grid grid-cols-2 gap-4 sm:gap-5">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-[#0b2540] rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
          >
            <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>

            <h3 class="text-white font-semibold text-sm sm:text-base">
              {{ feature.title }}
            </h3>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Invoice step section-->
  <section class="bg-[#0b2540] py-16 lg:py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- LEFT: heading + steps -->
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10">
            <span class="text-emerald-400">Invoice</span>
            <span class="text-white"> and get </span>
            <span class="text-emerald-400">paid</span>
          </h2>

          <div class="divide-y divide-white/10">
            <!-- Step 1 -->
            <div class="flex items-start gap-4 py-4">
              <span
                class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9h1v1H9z" />
                </svg>
              </span>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base">Create Invoice</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Add your customers details, items and amount in seconds.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex items-start gap-4 py-4">
              <span
                class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base">Send to Customer</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Share the invoice or payment link with your customers.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex items-start gap-4 py-4">
              <span
                class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base">Get Paid Securely</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Customers pay online securely via multiple payment methods.
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex items-start gap-4 pt-4">
              <span
                class="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v18h18M7 15l4-4 3 3 5-6"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-white font-semibold text-sm sm:text-base">Track & Grow</h3>
                <p class="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  Monitor payments and analyze your business performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: product image (drop your image here) -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="absolute -inset-16 bg-emerald-400/10 blur-3xl rounded-full -z-10"></div>

          <img
            src="../assets/img/hero-mockup.png"
            alt="SellDesk payment screen on a phone"
            class="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>

  <!--Free invoiving everywhere-->

  <section class="bg-white py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- LEFT: copy + store badges -->
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
            Take your free invoicing software
            <span class="text-sky-500">everywhere</span>
          </h2>
          <p class="text-slate-500 text-sm sm:text-[15px] mt-4 max-w-sm leading-relaxed">
            Selldesk Invoice is supported by all your daily devices. Your data is up to date at all
            times.
          </p>

          <div class="flex gap-3 mt-6 w-fit">
            <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M3 3l10.5 9L3 21V3zM14 12l3-3 4 2.3c1 .6 1 2 0 2.6L17 16l-3-4zM4.4 2.3L15 8.5l-2.6 2.5-8-8.7z"
                />
              </svg>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">GET IT ON</span>
                <span class="block text-xs font-semibold -mt-0.5">Google Play</span>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16.365 1.43c0 1.14-.42 2.19-1.14 2.98-.83.9-2.14 1.6-3.24 1.51-.14-1.1.44-2.28 1.14-3.03.83-.9 2.26-1.56 3.24-1.46zM20.5 17.24c-.5 1.15-.74 1.66-1.38 2.67-.9 1.4-2.16 3.15-3.73 3.16-1.4.02-1.76-.9-3.65-.89-1.9.01-2.3.9-3.7.88-1.57-.02-2.76-1.6-3.66-3-2.5-3.85-2.77-8.36-1.22-10.77 1.1-1.73 2.85-2.74 4.5-2.74 1.68 0 2.73 1 4.12 1 1.34 0 2.16-1 4.11-1 1.47 0 3.02.8 4.13 2.19-3.63 1.99-3.05 7.16.48 8.5z"
                />
              </svg>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">Download on the</span>
                <span class="block text-xs font-semibold -mt-0.5">App Store</span>
              </span>
            </a>
            <!-- <a
              href="#"
              class="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-4 py-2"
            >
              <span class="grid grid-cols-2 gap-0.5 w-4 h-4">
                <span class="bg-red-500"></span><span class="bg-emerald-500"></span>
                <span class="bg-sky-500"></span><span class="bg-amber-400"></span>
              </span>
              <span class="leading-tight text-left">
                <span class="block text-[9px] text-slate-300">Get from</span>
                <span class="block text-xs font-semibold -mt-0.5">Microsoft</span>
              </span>
            </a> -->
          </div>
        </div>

        <!-- RIGHT: image collage (drop your images in) -->
        <div class="grid grid-cols-2 gap-5">
          <div
            class="rounded-tl-[6rem] rounded-br-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-1.png"
              alt=""
              class="rounded-tl-[6rem] rounded-br-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <div
            class="rounded-tr-[6rem] rounded-bl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-2.png"
              alt=""
              class="rounded-tr-[6rem] rounded-bl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <div
            class="rounded-bl-[6rem] rounded-tr-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          >
            <img
              src="../assets/img/free-3.png"
              alt=""
              class="rounded-bl-[6rem] rounded-tr-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <!--
          <img src="../assets/img/collage-4.jpg" alt="" class="rounded-br-[6rem] rounded-tl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 object-cover" />
          -->
          <div
            class="rounded-br-[6rem] rounded-tl-2xl border-b-4 border-emerald-400 w-full h-40 sm:h-48 bg-slate-100"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.qr-fake {
  background-image: repeating-linear-gradient(0deg, #111 0 3px, transparent 3px 6px),
    repeating-linear-gradient(90deg, #111 0 3px, transparent 3px 6px);
  background-size: 6px 6px;
  background-blend-mode: multiply;
}
</style>
