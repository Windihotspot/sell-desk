<script setup>
import { ref } from 'vue'

const billing = ref('monthly')

const setBilling = (type) => {
  billing.value = type
}

const starterFeatures = [
  'Create invoices',
  'Payment links',
  'QR payments',
  'Basic dashboard',
  'Transaction history'
]

const businessFeatures = [
  'Everything in Starter',
  'Advanced invoicing',
  'Pay4Me',
  'PayWithSplit',
  'CreditList',
  'Reports & analytics',
  'Team access'
]

const enterpriseFeatures = [
  'Everything in Business',
  'Custom workflows',
  'Advanced analytics',
  'Multiple teams',
  'Priority support',
  'Dedicated onboarding'
]

const fees = [
  { icon: '💳', title: 'Card payments', rate: 'From X%' },
  { icon: '🏦', title: 'Bank transfers', rate: 'From X%' },
  { icon: '▦', title: 'QR payments', rate: 'From X%' },
  { icon: '🧾', title: 'Invoice payments', rate: 'From X%' }
]

const comparison = [
  { feature: 'Invoicing', starter: '✓', business: '✓', enterprise: '✓' },
  { feature: 'Payment links & QR', starter: '✓', business: '✓', enterprise: '✓' },
  { feature: 'Pay4Me', starter: '—', business: '✓', enterprise: '✓' },
  { feature: 'PayWithSplit', starter: '—', business: '✓', enterprise: '✓' },
  { feature: 'CreditList', starter: '—', business: '✓', enterprise: '✓' },
  { feature: 'Reports & analytics', starter: 'Basic', business: 'Advanced', enterprise: 'Advanced' }
]

const products = [
  { name: 'Pay4Me', desc: 'Request a payment from someone else.' },
  { name: 'PayWithSplit', desc: 'Split a bill so everyone pays their share.' },
  { name: 'CreditList', desc: 'Manage installment plans and follow-ups.' },
  { name: 'Payment Widget', desc: 'Accept payments from your website.' }
]

const quizOptions = [
  { label: "I'm just starting", value: 'Starter' },
  { label: "I'm growing", value: 'Business' },
  { label: 'I manage an organization', value: 'Enterprise' }
]

const recommendation = ref(null)

const setRecommendation = (plan) => {
  const texts = {
    Starter: 'A simple starting point for invoices and QR payments.',
    Business: 'Best fit for growing businesses using Pay4Me, PayWithSplit and CreditList.',
    Enterprise: 'Best for organizations needing custom workflows and teams.'
  }

  recommendation.value = {
    title: plan,
    text: texts[plan]
  }
}
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

  <!-- main section -->
  <div class="min-h-screen bg-[#f7f9fc] text-slate-900 font-sans">
    <!-- Hero -->
    <header
      class="text-center pt-16 pb-12 px-5 bg-[radial-gradient(circle_at_top,#e9f1ff,#f7f9fc_55%)]"
    >
      <div
        class="inline-block bg-blue-50 text-blue-600 px-3.5 py-2 rounded-full text-xs font-extrabold"
      >
        SELLDESK PRICING
      </div>

      <h1
        class="text-[clamp(40px,6vw,68px)] leading-none tracking-[-3px] max-w-[800px] mx-auto mt-4 mb-4 font-bold"
      >
        Pricing that grows with your business.
      </h1>

      <p class="max-w-[650px] mx-auto text-slate-500 leading-relaxed">
        Simple, transparent pricing for invoices, collections and payment tools. Start small and
        scale when you are ready.
      </p>

      <!-- Billing Toggle -->
      <div class="mt-6 mx-auto bg-white border border-slate-200 p-1.5 rounded-xl w-max flex">
        <button
          @click="setBilling('monthly')"
          class="px-5 py-2.5 rounded-lg font-extrabold transition-colors"
          :class="billing === 'monthly' ? 'bg-blue-600 text-white' : 'text-slate-500'"
        >
          Monthly
        </button>
        <button
          @click="setBilling('yearly')"
          class="px-5 py-2.5 rounded-lg font-extrabold transition-colors"
          :class="billing === 'yearly' ? 'bg-blue-600 text-white' : 'text-slate-500'"
        >
          Yearly · Save 20%
        </button>
      </div>
    </header>

    <main>
      <!-- Plans -->
      <section class="max-w-[1180px] mx-auto px-5 py-9">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          <!-- Starter -->
          <article class="bg-white border border-slate-200 rounded-[20px] p-7 shadow-sm relative">
            <h3 class="text-xl font-bold">Starter</h3>
            <p class="text-slate-500 text-[13px] min-h-[38px] mt-1">
              For individuals and small businesses getting started.
            </p>
            <div class="text-[38px] font-black mt-5 mb-1">
              ₦0 <span class="text-xs text-slate-500 font-normal">/ month</span>
            </div>
            <button
              class="w-full mt-4 mb-4 bg-blue-600 text-white rounded-xl py-3 font-extrabold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <ul class="space-y-2 text-[13px] text-slate-600">
              <li v-for="item in starterFeatures" :key="item" class="flex items-start gap-2">
                <span class="text-green-600 font-black">✓</span>
                {{ item }}
              </li>
            </ul>
          </article>

          <!-- Business (Popular) -->
          <article
            class="bg-white border-2 border-blue-600 rounded-[20px] p-7 shadow-sm relative md:-translate-y-2"
          >
            <div
              class="absolute right-4 top-4 bg-blue-600 text-white rounded-full px-2.5 py-1.5 text-[10px] font-black"
            >
              MOST POPULAR
            </div>
            <h3 class="text-xl font-bold">Business</h3>
            <p class="text-slate-500 text-[13px] min-h-[38px] mt-1">
              For growing businesses that need more control.
            </p>
            <div class="text-[38px] font-black mt-5 mb-1">
              {{ billing === 'monthly' ? '₦X,XXX' : '₦XX,XXX' }}
              <span class="text-xs text-slate-500 font-normal">/ month</span>
            </div>
            <button
              class="w-full mt-4 mb-4 bg-blue-600 text-white rounded-xl py-3 font-extrabold hover:bg-blue-700 transition"
            >
              Start Business
            </button>
            <ul class="space-y-2 text-[13px] text-slate-600">
              <li v-for="item in businessFeatures" :key="item" class="flex items-start gap-2">
                <span class="text-green-600 font-black">✓</span>
                {{ item }}
              </li>
            </ul>
          </article>

          <!-- Enterprise -->
          <article class="bg-white border border-slate-200 rounded-[20px] p-7 shadow-sm relative">
            <h3 class="text-xl font-bold">Enterprise</h3>
            <p class="text-slate-500 text-[13px] min-h-[38px] mt-1">
              For organizations with custom payment workflows.
            </p>
            <div class="text-[38px] font-black mt-5 mb-1">Custom</div>
            <button
              class="w-full mt-4 mb-4 bg-blue-600 text-white rounded-xl py-3 font-extrabold hover:bg-blue-700 transition"
            >
              Talk to Sales
            </button>
            <ul class="space-y-2 text-[13px] text-slate-600">
              <li v-for="item in enterpriseFeatures" :key="item" class="flex items-start gap-2">
                <span class="text-green-600 font-black">✓</span>
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Transaction Fees -->
      <section class="max-w-[1180px] mx-auto px-5 py-9 text-center">
        <h2 class="text-[31px] tracking-tight font-bold mb-2">
          Simple, transparent transaction fees
        </h2>
        <p class="max-w-[650px] mx-auto text-slate-500 leading-relaxed">
          Replace the placeholders below with Teinnovate's approved commercial rates.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-7">
          <div
            v-for="fee in fees"
            :key="fee.title"
            class="bg-white border border-slate-200 rounded-2xl p-5 text-left"
          >
            <span class="text-xl">{{ fee.icon }}</span>
            <strong class="block mt-2 mb-1">{{ fee.title }}</strong>
            <span class="text-xs text-slate-500">{{ fee.rate }}</span>
          </div>
        </div>
      </section>

      <!-- Compare Features -->
      <section class="max-w-[1180px] mx-auto px-5 py-9 text-center">
        <h2 class="text-[31px] tracking-tight font-bold mb-2">Compare all features</h2>
        <p class="max-w-[650px] mx-auto text-slate-500 leading-relaxed mb-7">
          A quick view of what comes with each plan.
        </p>

        <div class="bg-white border border-slate-200 rounded-[18px] overflow-hidden text-left">
          <!-- Header -->
          <div class="grid grid-cols-[2fr_1fr_1fr_1fr] bg-slate-100 font-extrabold text-[13px]">
            <div class="p-3.5 px-4">Feature</div>
            <div class="p-3.5 px-4">Starter</div>
            <div class="p-3.5 px-4">Business</div>
            <div class="p-3.5 px-4">Enterprise</div>
          </div>

          <!-- Rows -->
          <div
            v-for="(row, index) in comparison"
            :key="index"
            class="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-slate-200 last:border-0 text-[13px]"
          >
            <div class="p-3.5 px-4 text-slate-700">{{ row.feature }}</div>
            <div
              class="p-3.5 px-4"
              :class="row.starter === '✓' ? 'text-green-600 font-black' : 'text-slate-500'"
            >
              {{ row.starter }}
            </div>
            <div
              class="p-3.5 px-4"
              :class="
                row.business === '✓' || row.business === 'Advanced'
                  ? 'text-green-600 font-black'
                  : 'text-slate-500'
              "
            >
              {{ row.business }}
            </div>
            <div
              class="p-3.5 px-4"
              :class="
                row.enterprise === '✓' || row.enterprise === 'Advanced'
                  ? 'text-green-600 font-black'
                  : 'text-slate-500'
              "
            >
              {{ row.enterprise }}
            </div>
          </div>
        </div>
      </section>

      <!-- Quiz / Recommendation -->
      <section class="max-w-[1180px] mx-auto px-5 py-9">
        <div
          class="bg-gradient-to-br from-[#082d92] to-blue-600 rounded-3xl p-10 text-white flex flex-col md:flex-row justify-between gap-6 items-center"
        >
          <div>
            <h2 class="text-2xl font-bold m-0 mb-2">Not sure which plan is right for you?</h2>
            <p class="text-blue-100">Choose what best describes your business.</p>

            <div
              v-if="recommendation"
              class="mt-3 p-3 bg-white/10 border border-white/20 rounded-xl"
            >
              <b>{{ recommendation.title }} plan recommended.</b>
              {{ recommendation.text }}
            </div>
          </div>

          <div class="flex gap-2.5 flex-wrap">
            <button
              v-for="option in quizOptions"
              :key="option.value"
              @click="setRecommendation(option.value)"
              class="bg-white text-slate-900 px-4 py-3 rounded-xl font-extrabold hover:bg-slate-100 transition"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </section>

      <!-- More ways to get paid -->
      <section class="max-w-[1180px] mx-auto px-5 py-9 text-center">
        <h2 class="text-[31px] tracking-tight font-bold mb-2">More ways to get paid</h2>
        <p class="max-w-[650px] mx-auto text-slate-500 leading-relaxed">
          Bring the Quidly ecosystem into the pricing experience.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-7">
          <div
            v-for="product in products"
            :key="product.name"
            class="bg-white border border-slate-200 rounded-2xl p-5 text-left"
          >
            <b class="block">{{ product.name }}</b>
            <p class="text-xs text-slate-500 mt-1">{{ product.desc }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- CTA -->
    <section class="text-center bg-white py-16 px-5">
      <h2 class="text-4xl font-bold mb-2">Ready to simplify payments?</h2>
      <p class="max-w-[650px] mx-auto text-slate-500 leading-relaxed">
        Start collecting payments, sending invoices and managing transactions with SellDesk.
      </p>
      <a
        href="#"
        class="inline-block mt-4 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-extrabold hover:bg-blue-700 transition"
      >
        Get Started Free →
      </a>
    </section>
  </div>
</template>

