
<script setup>
import { ref,computed, onMounted, onUnmounted } from 'vue'

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


const products = [
  {
    name: 'Payment Widget',
    short: 'Accept payments wherever customers are.',
    desc: 'Accept payments directly through your website, school portal or e-commerce store with a seamless checkout experience.',
    features: ['Website checkout', 'Payment notifications', 'Simple integration'],
    type: 'widget'
  },
  {
    name: 'SellDesk',
    short: 'Create invoices. Get paid. Stay in control.',
    desc: 'Create and send professional electronic invoices, track payment status and reduce manual payment follow-ups.',
    features: ['Digital invoices', 'Payment tracking', 'Automated follow-up'],
    type: 'invoice'
  },
  {
    name: 'PayWithSplit',
    short: 'Split the payment. Not the experience.',
    desc: 'Let customers divide a bill and pay their individual share without one person having to front the entire amount.',
    features: ['Split bills', 'QR-first flow', 'Individual payments'],
    type: 'split'
  },
  {
    name: 'Pay4Me',
    short: 'Let someone else pay — without losing the sale.',
    desc: 'Customers can securely request payment from a parent, sponsor, friend or business partner through a QR code or payment request.',
    features: ['QR payment request', 'Secure delegation', 'Instant confirmation'],
    type: 'pay4me'
  },
  {
    name: 'CreditList',
    short: 'Make installment payments easier to manage.',
    desc: 'Set payment schedules, track outstanding balances and reduce manual follow-ups for schools, hospitals and other organizations.',
    features: ['Payment schedules', 'Outstanding balances', 'Reminders'],
    type: 'credit'
  }
]

const active = ref(0)
let timer = null

const currentProduct = computed(() => products[active.value])

const setActive = (index) => {
  active.value = index
  restartAutoplay()
}

const restartAutoplay = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    active.value = (active.value + 1) % products.length
  }, 5000)
}

onMounted(() => {
  restartAutoplay()
})

onUnmounted(() => {
  clearInterval(timer)
})

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
        <router-link to="/features" class="hover:text-blue-600 transition-colors">
          Features
        </router-link>
        <router-link to="/pricing" class="hover:text-blue-600 transition-colors">
          Pricing
        </router-link>
        <router-link to="/integrations" class="hover:text-blue-600 transition-colors">
          Integrations
        </router-link>
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

        <router-link to="/signin" class="text-sm font-semibold text-blue-600 hover:text-blue-700">
          sign in
        </router-link>
        <router-link
          to="/signup"
          class="bg-[#053758] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
        >
          sign up
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
              <router-link
                to="/features"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Features
              </router-link>
              <router-link
                to="/pricing"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Pricing
              </router-link>
              <router-link
                to="/integrations"
                class="px-3 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Integrations
              </router-link>
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
                href="/signin"
                class="block px-3 py-3 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              >
                Sign In
              </a>
            </div>

            <!-- Sign Up Button -->
            <div class="mt-6 pt-2 pb-2">
              <a
                href="/signup"
                class="block w-full text-center bg-[#053758] hover:bg-[#042a44] active:bg-[#031f33] text-white rounded-full px-6 py-3.5 font-semibold transition-colors shadow-sm"
              >
                Sign Up For Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <section class="relative overflow-hidden py-20 md:py-28 px-6 bg-white">
    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute w-[620px] h-[620px] border border-blue-500/10 rounded-full -right-64 -top-64"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_8%_20%,rgba(23,105,232,0.08),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(104,173,18,0.10),transparent_30%)]"
      ></div>
    </div>

    <div class="max-w-[1180px] mx-auto relative z-10">
      <!-- Eyebrow -->
      <span
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-[13px]"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        SellDesk ecosystem
      </span>

      <h1
        class="text-[clamp(38px,5vw,64px)] leading-[1.02] tracking-[-2.8px] max-w-[760px] mt-5 mb-4 font-bold text-slate-900"
      >
        One platform. Every payment workflow.
      </h1>

      <p class="max-w-[700px] text-slate-500 text-lg leading-relaxed mb-12">
        From checkout and invoicing to split payments, delegated payments and installment management
        — bring the payment tools your customers and business need into one connected experience.
      </p>

      <!-- Showcase -->
      <div class="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-stretch">
        <!-- Tabs -->
        <div
          class="flex flex-col gap-2.5 p-3.5 border border-slate-200 rounded-[26px] bg-white/90 shadow-[0_18px_55px_rgba(16,24,40,0.07)]"
        >
          <button
            v-for="(product, index) in products"
            :key="product.name"
            @click="setActive(index)"
            class="relative text-left px-4 py-4 rounded-[18px] transition-all duration-250 cursor-pointer"
            :class="
              active === index
                ? 'bg-gradient-to-br from-[#0d55c8] to-[#237ff1] text-white shadow-[0_12px_30px_rgba(23,105,232,0.22)]'
                : 'text-slate-500 hover:bg-slate-50 hover:translate-x-1'
            "
          >
            <div class="flex items-start gap-2.5">
              <span
                class="inline-flex w-7 h-7 rounded-full items-center justify-center text-xs font-extrabold shrink-0"
                :class="active === index ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'"
              >
                0{{ index + 1 }}
              </span>
              <div>
                <strong class="text-[16px] block">{{ product.name }}</strong>
                <p class="mt-1.5 text-xs leading-snug opacity-80">{{ product.short }}</p>
              </div>
            </div>
          </button>

          <div class="mt-auto pt-3 px-3.5 text-[11px] text-slate-400 border-t border-slate-200">
            Auto-playing • Click any tab to pause & jump
          </div>
        </div>

        <!-- Product Card -->
        <div
          class="relative min-h-[560px] overflow-hidden rounded-[30px] p-8 md:p-10 text-white bg-gradient-to-br from-[#061d70] via-[#0c4ac3] to-[#1778ed] shadow-[0_25px_70px_rgba(7,31,114,0.22)]"
        >
          <!-- Decorative circles -->
          <div
            class="absolute w-[520px] h-[520px] rounded-full border border-white/10 -right-52 -top-52"
          ></div>
          <div
            class="absolute w-[330px] h-[330px] rounded-full bg-green-500/20 blur-xl -left-36 -bottom-44"
          ></div>

          <div class="relative z-10">
            <div class="flex justify-between items-start gap-5">
              <span
                class="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-[11px] font-extrabold tracking-wider uppercase"
              >
                {{ currentProduct.name }}
              </span>
              <span class="text-xs opacity-60">0{{ active + 1 }} / 05</span>
            </div>

            <h2 class="text-[32px] md:text-[40px] tracking-[-1.6px] mt-5 mb-2.5 font-bold">
              {{ currentProduct.name }}
            </h2>
            <p class="max-w-[470px] text-white/75 leading-relaxed">
              {{ currentProduct.desc }}
            </p>

            <!-- Visual Stage -->
            <div class="min-h-[300px] flex items-center justify-center mt-5 relative">
              <!-- Payment Widget -->
              <div v-if="currentProduct.type === 'widget'" class="w-full max-w-[610px]">
                <div
                  class="bg-neutral-900 rounded-t-[15px] rounded-b-[7px] p-2 pb-4 shadow-2xl transform perspective-900 rotate-x-1"
                >
                  <div class="bg-white rounded-lg overflow-hidden h-[245px] text-slate-800 p-4">
                    <div class="flex justify-between text-[11px] font-extrabold">
                      <span>Checkout</span>
                      <span class="text-blue-600">Payment Widget</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                      <div class="p-3.5 rounded-lg bg-blue-50">
                        <small class="text-[8px] text-slate-500">ORDER TOTAL</small>
                        <b class="block text-lg mt-1.5">₦250,000</b>
                      </div>
                      <div class="p-3.5 rounded-lg bg-emerald-50">
                        <small class="text-[8px] text-slate-500">STATUS</small>
                        <b class="block text-lg mt-1.5 text-emerald-600">Ready</b>
                      </div>
                      <div class="p-3.5 rounded-lg bg-orange-50">
                        <small class="text-[8px] text-slate-500">REFERENCE</small>
                        <b class="block text-lg mt-1.5">#QDL2045</b>
                      </div>
                    </div>
                    <div class="mt-3 border border-slate-100 rounded-lg p-2.5">
                      <div
                        class="h-6 border-b border-slate-100 flex items-center justify-between text-[8px]"
                      >
                        <span>MacBook Air M3</span><b>₦250,000</b>
                      </div>
                      <div
                        class="h-6 border-b border-slate-100 flex items-center justify-between text-[8px]"
                      >
                        <span>Payment method</span><b>Secure checkout</b>
                      </div>
                      <div class="h-6 flex items-center justify-between text-[8px]">
                        <span>Notification</span><b class="text-emerald-600">Instant</b>
                      </div>
                    </div>
                  </div>
                  <div
                    class="h-2 w-[108%] -ml-[4%] bg-gradient-to-b from-neutral-400 to-neutral-600 rounded-b-full"
                  ></div>
                </div>
              </div>

              <!-- Invoice -->
              <div
                v-else-if="currentProduct.type === 'invoice'"
                class="w-[230px] bg-white text-slate-900 rounded-2xl p-4 shadow-2xl"
              >
                <div class="text-lg font-black text-blue-600">
                  sell<span class="text-green-500">desk</span>@quidly
                </div>
                <h3 class="text-2xl text-right my-3 font-bold">INVOICE</h3>
                <div class="h-1.5 bg-slate-100 rounded mb-2"></div>
                <div class="text-[10px] text-slate-500">Invoice #QLY4F887411-4</div>
                <div class="h-3 bg-green-500 rounded my-2"></div>
                <div class="h-1.5 bg-slate-100 rounded my-2"></div>
                <div class="h-1.5 bg-slate-100 rounded my-2"></div>
                <div class="h-1.5 bg-slate-100 rounded w-[70%] my-2"></div>
                <div class="mt-5 text-right font-black">Total ₦27,000.00</div>
              </div>

              <!-- Split -->
              <div
                v-else-if="currentProduct.type === 'split'"
                class="w-[290px] bg-white text-slate-900 rounded-[22px] p-5 shadow-2xl"
              >
                <h3 class="text-xl font-bold m-0">Split bill</h3>
                <div class="text-[10px] text-slate-500">Dinner with friends</div>
                <div class="text-3xl font-black my-4">₦60,000</div>
                <div class="flex justify-between py-2.5 border-b border-slate-100 text-[11px]">
                  <span>David</span><span class="text-emerald-600 font-extrabold">₦20,000 ✓</span>
                </div>
                <div class="flex justify-between py-2.5 border-b border-slate-100 text-[11px]">
                  <span>Sarah</span><span class="text-emerald-600 font-extrabold">₦20,000 ✓</span>
                </div>
                <div class="flex justify-between py-2.5 text-[11px]">
                  <span>Mike</span><span class="text-emerald-600 font-extrabold">₦20,000 ✓</span>
                </div>
              </div>

              <!-- Pay4Me -->
              <div v-else-if="currentProduct.type === 'pay4me'" class="flex gap-6 items-center">
                <div class="w-[145px] bg-neutral-900 rounded-[25px] p-1.5 shadow-2xl rotate-5">
                  <div class="h-[290px] bg-white rounded-[20px] overflow-hidden text-slate-900">
                    <div
                      class="h-[65px] bg-gradient-to-br from-indigo-400 to-indigo-500 text-white p-3.5 text-[10px] font-extrabold"
                    >
                      Pay4Me<br /><span class="opacity-70">Payment request</span>
                    </div>
                    <div class="p-3">
                      <div class="p-2.5 rounded-xl bg-slate-50 mb-2 text-[8px]">
                        <b>Amount</b><br /><span class="text-base">₦250,000</span>
                      </div>
                      <div
                        class="w-[82px] h-[82px] mx-auto my-3.5 bg-[repeating-conic-gradient(#111_0_25%,#fff_0_50%)] bg-[length:10px_10px] border-[7px] border-white shadow-[0_0_0_1px_#ddd]"
                      ></div>
                      <div class="text-center text-[8px] text-slate-500">
                        Scan to complete payment
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="w-[145px] bg-neutral-900 rounded-[25px] p-1.5 shadow-2xl -rotate-4 scale-90"
                >
                  <div class="h-[290px] bg-white rounded-[20px] overflow-hidden text-slate-900">
                    <div
                      class="h-[65px] bg-gradient-to-br from-indigo-400 to-indigo-500 text-white p-3.5 text-[10px] font-extrabold"
                    >
                      Payment
                    </div>
                    <div class="p-3 text-center">
                      <div class="text-2xl text-emerald-500 my-7">✓</div>
                      <div class="font-black text-[15px]">Paid securely</div>
                      <div class="text-[8px] text-slate-500 mt-1">₦250,000 payment completed</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CreditList -->
              <div v-else class="w-[340px] bg-white text-slate-900 rounded-[20px] p-5 shadow-2xl">
                <div class="flex justify-between items-center">
                  <h3 class="text-xl font-bold m-0">CreditList</h3>
                  <span class="text-blue-600 text-[10px]">Dashboard</span>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-4">
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">TOTAL CREDIT REQUESTS</small>
                    <b class="block text-base mt-1">₦3.56m</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">IN-FLOW</small>
                    <b class="block text-base mt-1">₦20.00m</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">PAST DUE</small>
                    <b class="block text-base mt-1">₦0</b>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg">
                    <small class="text-[8px] text-slate-500">DEFAULTS</small>
                    <b class="block text-base mt-1">4</b>
                  </div>
                </div>
                <div class="mt-3 p-3 border border-slate-200 rounded-xl text-[9px]">
                  <b>Payment schedule</b>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 01</span><span class="text-emerald-600">Paid ✓</span>
                  </div>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 02</span><span class="text-emerald-600">Paid ✓</span>
                  </div>
                  <div class="flex justify-between py-1.5">
                    <span>Installment 03</span><span class="text-amber-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Features -->
            <div class="flex gap-2 flex-wrap mt-6">
              <span
                v-for="feature in currentProduct.features"
                :key="feature"
                class="px-3 py-2 rounded-full bg-white/10 border border-white/10 text-[11px]"
              >
                ✓ {{ feature }}
              </span>
            </div>

            <!-- Progress -->
            <div class="h-[3px] bg-white/15 mt-7 rounded-full overflow-hidden">
              <div
                class="h-full bg-lime-400 transition-all duration-300"
                :style="{ width: `${((active + 1) / products.length) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

