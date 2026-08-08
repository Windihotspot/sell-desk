<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const openFaq = ref(null)
const toastVisible = ref(false)
const toastMessage = ref('')
let toastTimeout = null

const showToast = (message) => {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toastVisible.value = false
  }, 2200)
}

const searchHelp = () => {
  const q = searchQuery.value.trim()
  if (!q) {
    showToast('Type something to search the Help Center.')
    return
  }
  showToast(`Searching for “${q}”…`)
  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
}

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const handleResourceClick = (resource) => {
  if (resource.action === 'scroll') {
    document.getElementById(resource.target)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    showToast(resource.toast)
  }
}

const resources = [
  {
    icon: '?',
    title: 'Help Center',
    desc: 'Quick answers to common questions about accounts, payments and invoices.',
    linkText: 'Browse FAQs →',
    action: 'scroll',
    target: 'faq'
  },
  {
    icon: '▶',
    title: 'Getting Started',
    desc: 'Step-by-step guidance for account setup and your first invoice or payment.',
    linkText: 'View guides →',
    action: 'scroll',
    target: 'guides'
  },
  {
    icon: '⌘',
    title: 'Product Guides',
    desc: 'Learn how Payment Widget, SellDesk, Pay4Me, PayWithSplit and CreditList work.',
    linkText: 'Explore products →',
    action: 'scroll',
    target: 'products'
  },
  {
    icon: '▣',
    title: 'API & Integration',
    desc: 'Technical resources for developers integrating payment experiences.',
    linkText: 'Developer resources →',
    action: 'toast',
    toast: 'Developer resources selected'
  },
  {
    icon: '◷',
    title: 'Payment & Invoicing',
    desc: 'Understand payment status, invoice tracking and reminders.',
    linkText: 'Learn more →',
    action: 'scroll',
    target: 'faq'
  },
  {
    icon: '☎',
    title: 'Contact Support',
    desc: "Can't find what you need? Reach the SellDesk support team.",
    linkText: 'Get support →',
    action: 'scroll',
    target: 'support'
  }
]

const quickGuides = [
  {
    title: 'How to set up Payment Widget',
    time: '5 min →',
    toast: 'Payment Widget guide selected'
  },
  { title: 'How Pay4Me works', time: '4 min →', toast: 'Pay4Me guide selected' },
  { title: 'How to split a payment', time: '3 min →', toast: 'PayWithSplit guide selected' },
  { title: 'Set up an installment schedule', time: '6 min →', toast: 'CreditList guide selected' },
  { title: 'Track invoice payment status', time: '4 min →', toast: 'Invoice guide selected' }
]

const products = [
  {
    icon: 'SD',
    name: 'SellDesk',
    desc: 'Create, send and track electronic invoices with less manual follow-up.'
  },
  { icon: 'P4', name: 'Pay4Me', desc: 'Learn the QR-first payment request journey.' },
  {
    icon: 'PS',
    name: 'PayWithSplit',
    desc: 'Understand how groups split bills and pay individually.'
  },
  {
    icon: 'CL',
    name: 'CreditList',
    desc: 'Manage installment schedules, balances and follow-ups.'
  },
  {
    icon: 'QR',
    name: 'Payment Widget',
    desc: 'Explore payment acceptance and integration options.'
  },
  {
    icon: 'CO',
    name: 'Collect@Quidly',
    desc: 'Create campaigns for community and group contributions.'
  }
]

const faqs = [
  {
    question: 'How do I create an invoice?',
    answer:
      'Create an invoice, add the customer and payment details, review it and share it through the available payment channel.'
  },
  {
    question: 'How does Pay4Me work?',
    answer:
      'Pay4Me lets someone request that another person covers a specific item or amount. The recipient reviews the request and completes the payment.'
  },
  {
    question: 'Can customers pay by QR code?',
    answer:
      'This demo is designed around the QR-first payment experience you specified for Pay4Me and can be connected to the actual QR flow.'
  },
  {
    question: 'What is CreditList used for?',
    answer:
      'CreditList is designed for installment payment management, including schedules, customer records, balances and reminders.'
  },
  {
    question: 'How do I integrate the Payment Widget?',
    answer:
      'The final help page can link to your actual developer documentation and integration instructions here.'
  }
]

const supportChannels = [
  {
    icon: '✉',
    title: 'Email support',
    desc: 'For account and payment-related questions.',
    button: 'Contact support',
    toast: 'Email support selected'
  },
  {
    icon: '▣',
    title: 'Developer support',
    desc: 'For integration and technical implementation questions.',
    button: 'Developer help',
    toast: 'Developer support selected'
  },
  {
    icon: '?',
    title: 'Submit a request',
    desc: 'Send a support request when you cannot find an answer.',
    button: 'Submit request',
    toast: 'Support form selected'
  }
]
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

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.2s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>


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

  <!-- main content -->
  <div class="min-h-screen bg-[#f7f9fc] text-slate-900 font-sans">
    <!-- Hero -->
    <header
      class="text-center pt-20 pb-16 px-5 bg-[radial-gradient(circle_at_50%_0,#dfebff,transparent_48%),#fff]"
    >
      <div
        class="inline-block bg-blue-50 text-blue-600 px-3.5 py-2 rounded-full text-xs font-black"
      >
        SELLDESK HELP CENTER
      </div>

      <h1
        class="text-[clamp(42px,6vw,70px)] leading-none tracking-[-3px] my-5 max-w-[800px] mx-auto font-bold"
      >
        How can we help you?
      </h1>

      <p class="max-w-[670px] mx-auto text-slate-500 leading-relaxed text-[17px]">
        Find answers, setup guides, product information and support for everything you do with
        SellDesk.
      </p>

      <!-- Search -->
      <div
        class="max-w-[690px] mx-auto mt-8 bg-white border border-slate-200 rounded-[15px] p-1.5 flex shadow-[0_18px_45px_rgba(30,99,242,0.1)]"
      >
        <input
          v-model="searchQuery"
          @keyup.enter="searchHelp"
          type="text"
          placeholder="Search invoices, payments, Pay4Me, CreditList…"
          class="flex-1 border-0 outline-none px-3.5 py-3 text-sm bg-transparent"
        />
        <button
          @click="searchHelp"
          class="bg-blue-600 text-white rounded-[10px] px-6 font-extrabold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </header>

    <!-- Explore Resources -->
    <section class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] tracking-tight font-bold mb-2.5">Explore our resources</h2>
        <p class="max-w-[680px] mx-auto text-slate-500 leading-relaxed">
          Everything users need to understand SellDesk and get the most out of their payment
          workflow.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-8">
        <div
          v-for="resource in resources"
          :key="resource.title"
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ml-1 mt-1"
        >
          <div
            class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-lg mt-2 ml-3"
          >
            {{ resource.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg ml-5">{{ resource.title }}</h3>
          <p class="text-[13px] leading-relaxed text-slate-500 min-h-[43px] ml-3">{{ resource.desc }}</p>
          <button
            @click="handleResourceClick(resource)"
            class="text-blue-600 text-[13px] font-black mt-2 hover:underline ml-2 mb-2"
          >
            {{ resource.linkText }}
          </button>
        </div>
      </div>
    </section>

    <!-- Popular Guides -->
    <section id="guides" class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] tracking-tight font-bold mb-2.5">Popular guides</h2>
        <p class="max-w-[680px] mx-auto text-slate-500 leading-relaxed">
          A clear onboarding path for new and existing SellDesk users.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 mt-8">
        <!-- Featured Guide -->
        <div
          class="rounded-[20px] p-7 bg-gradient-to-br from-[#082d92] to-blue-600 text-white min-h-[280px]"
        >
          <small class="text-blue-200 text-xs font-bold tracking-wide">START HERE</small>
          <h2 class="text-2xl font-bold mt-2 mb-3">Set up SellDesk and send your first invoice</h2>
          <p class="text-blue-100 text-[13px] leading-relaxed max-w-[520px] mb-5">
            Walk through account setup, invoice creation, sharing and payment tracking.
          </p>
          <button
            @click="showToast('Opening Getting Started guide…')"
            class="inline-block bg-white text-[#082d92] px-4 py-3 rounded-[10px] font-black text-[13px] hover:bg-slate-100 transition"
          >
            Read the guide →
          </button>
        </div>

        <!-- Quick Guides List -->
        <div class="bg-white border border-slate-200 rounded-[20px] p-7">
          <h3 class="font-bold text-lg mb-2">Quick guides</h3>
          <div
            v-for="guide in quickGuides"
            :key="guide.title"
            @click="showToast(guide.toast)"
            class="flex justify-between items-center py-4 border-b border-slate-200 last:border-0 text-[13px] cursor-pointer hover:bg-slate-50 -mx-2 px-2 rounded-lg transition"
          >
            <b>{{ guide.title }}</b>
            <span class="text-slate-500 text-[11px]">{{ guide.time }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Resources -->
    <section id="products" class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] tracking-tight font-bold mb-2.5">Product resources</h2>
        <p class="max-w-[680px] mx-auto text-slate-500 leading-relaxed">
          Give each Quidly product a clear learning path from discovery to everyday use.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-8">
        <div
          v-for="product in products"
          :key="product.name"
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 mt-1 ml-1"
        >
          <div
            class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-sm ml-3 mt-2"
          >
            {{ product.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg ml-5">{{ product.name }}</h3>
          <p class="text-[13px] leading-relaxed text-slate-500 min-h-[43px] ml-3">{{ product.desc }}</p>
          <button
            @click="showToast(`${product.name} resources selected`)"
            class="text-blue-600 text-[13px] font-black mt-2 hover:underline ml-2 mb-2"
          >
            View resources →
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] tracking-tight font-bold mb-2.5">Frequently asked questions</h2>
        <p class="max-w-[680px] mx-auto text-slate-500 leading-relaxed">
          A focused FAQ area that can later connect to the real knowledge base.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-5.5 mt-8">
        <!-- FAQ Intro -->
        <div class="bg-blue-50 rounded-[20px] p-7 mr-4">
          <h2 class="text-xl font-bold mb-3">Need a quick answer?</h2>
          <p class="text-slate-500 text-[13px] leading-relaxed mb-5">
            Start with the questions below. For detailed walkthroughs, use the guides or contact
            support.
          </p>
          <button
            @click="showToast('Support request started')"
            class="bg-blue-600 text-white px-5 py-3 rounded-[10px] font-extrabold hover:bg-blue-700 transition"
          >
            Contact support
          </button>
        </div>

        <!-- FAQ Accordion -->
        <div class="bg-white border border-slate-200 rounded-[18px] overflow-hidden">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="border-b border-slate-200 last:border-0 ml-3 mt-2"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full bg-white px-4.5 py-4.5 text-left font-extrabold flex justify-between items-center hover:bg-slate-50 transition"
            >
              {{ item.question }}
              <span class="text-blue-600 text-xl font-normal mr-5">
                {{ openFaq === index ? '−' : '+' }}
              </span>
            </button>
            <div
              v-show="openFaq === index"
              class="px-4.5 pb-4.5 text-slate-500 text-[13px] leading-relaxed"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section id="support" class="bg-white border-t border-slate-200">
      <div class="max-w-[1180px] mx-auto px-5 py-14">
        <div class="text-center">
          <h2 class="text-[32px] tracking-tight font-bold mb-2.5">Still need help?</h2>
          <p class="max-w-[680px] mx-auto text-slate-500 leading-relaxed">
            Give users a clear path to the right support channel.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          <div
            v-for="channel in supportChannels"
            :key="channel.title"
            class="border border-slate-200 rounded-[17px] p-5.5"
          >
            <div
              class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-lg mb-3 ml-3 mt-2"
            >
              {{ channel.icon }}
            </div>
            <b class="block mb-1 ml-5">{{ channel.title }}</b>
            <p class="text-xs text-slate-500 leading-relaxed mb-3 ml-3">{{ channel.desc }}</p>
            <button
              @click="showToast(channel.toast)"
              class="bg-blue-50 text-blue-600 px-3.5 py-2.5 rounded-[9px] font-extrabold text-sm hover:bg-blue-100 transition mb-3 ml-2 "
            >
              {{ channel.button }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center bg-gradient-to-br from-[#071f72] to-blue-600 text-white py-16 px-5">
      <h2 class="text-4xl font-bold mb-2.5">We're here to help you get paid.</h2>
      <p class="text-blue-100 max-w-xl mx-auto">
        Explore SellDesk, learn how the tools work and get the support you need.
      </p>
      <button
        @click="showToast('Opening SellDesk signup…')"
        class="inline-block mt-5 bg-white text-[#082d92] px-6 py-3.5 rounded-[10px] font-black hover:bg-slate-100 transition"
      >
        Get Started →
      </button>
    </section>

    <!-- Toast -->
    <Transition name="toast">
      <div
        v-if="toastVisible"
        class="fixed right-5 bottom-5 bg-slate-900 text-white px-4 py-3.5 rounded-[10px] text-xs z-50 shadow-lg"
      >
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

