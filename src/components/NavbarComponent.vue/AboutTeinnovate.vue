<script setup>
import { ref } from 'vue'

const aboutCards = [
  {
    num: '01',
    title: 'Simple',
    desc: 'Payment experiences should be easy to understand for both businesses and their customers.'
  },
  {
    num: '02',
    title: 'Secure',
    desc: 'Build trust into payment interactions and give businesses confidence in their workflows.'
  },
  {
    num: '03',
    title: 'Reliable',
    desc: 'Create dependable tools that support businesses, schools, communities and everyday users.'
  }
]

const values = [
  {
    title: 'Customer first',
    desc: 'Design around real payment needs and remove unnecessary complexity.'
  },
  {
    title: 'Clarity',
    desc: 'Make transactions, invoices, balances and payment status easy to understand.'
  },
  {
    title: 'Innovation',
    desc: 'Use technology to improve the way people and businesses interact with payments.'
  },
  {
    title: 'Trust',
    desc: 'Create reliable experiences that businesses and communities can depend on.'
  }
]

const sectors = [
  {
    title: 'Fintech',
    desc: 'Quidly, UtilityBox and MarketsCloud are listed in the company portfolio.'
  },
  {
    title: 'Medtech',
    desc: 'Deramedrx Online is listed within the medtech portfolio.'
  },
  {
    title: 'Agritech',
    desc: 'Teinnovate identifies agritech as one of its innovation verticals.'
  },
  {
    title: 'Emerging Tech',
    desc: 'Blockchain, machine learning, robotics and satellite remote-sensing are highlighted.'
  }
]

const ecosystem = [
  {
    icon: 'SD',
    name: 'SellDesk',
    desc: 'Professional electronic invoicing, payment tracking and automated follow-up.'
  },
  {
    icon: 'P4',
    name: 'Pay4Me',
    desc: 'Payment requests that make it easier for someone else to cover an item or amount.'
  },
  {
    icon: 'PS',
    name: 'PayWithSplit',
    desc: 'Split a shared bill so each person can pay their own portion.'
  },
  {
    icon: 'CL',
    name: 'CreditList',
    desc: 'Installment payment management for schools, hospitals and organizations.'
  },
  {
    icon: 'CO',
    name: 'Collect@Quidly',
    desc: 'Payment campaigns for churches, communities, groups and associations.'
  },
  {
    icon: 'QR',
    name: 'Payment Widget',
    desc: 'Accept digital payments directly inside websites, portals and online stores.'
  }
]

const timeline = [
  {
    title: 'Idea → Product',
    desc: 'Teinnovate highlights an idea-to-product approach as part of its innovation work.'
  },
  {
    title: 'Prototype',
    desc: 'Prototyping is presented as a stage in turning ideas into practical technology experiences.'
  },
  {
    title: 'Innovation',
    desc: 'The wider portfolio spans fintech and other technology verticals, with Quidly positioned in fintech.'
  }
]

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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





  <!-- main content -->
  <div class="min-h-screen bg-[#f7f9fc] text-slate-900 font-sans">
    <!-- Hero -->
    <header
      class="pt-20 pb-16 px-5 bg-[radial-gradient(circle_at_20%_10%,#dce9ff,transparent_35%),radial-gradient(circle_at_85%_20%,#e9f5dc,transparent_30%),#fff]"
    >
      <div
        class="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center"
      >
        <div>
          <div
            class="inline-block bg-blue-50 text-blue-600 px-3.5 py-2 rounded-full text-xs font-black"
          >
            A QUIDLY PAYMENT SOLUTION BY TEINNOVATE CAPITAL
          </div>

          <h1 class="text-[clamp(46px,6vw,76px)] leading-[0.98] tracking-[-4px] my-5 font-bold">
            Building simpler ways for businesses to get paid.
          </h1>

          <p class="text-slate-500 text-[17px] leading-relaxed max-w-[650px]">
            SellDesk sits within Quidly, Teinnovate Capital’s payment solutions service provision,
            bringing simpler invoicing, collections and payment experiences to businesses and
            communities in Nigeria.
          </p>

          <div class="flex flex-col sm:flex-row gap-2.5 mt-7">
            <button
              @click="scrollTo('about')"
              class="bg-blue-600 text-white px-5 py-3 rounded-xl font-extrabold hover:bg-blue-700 transition"
            >
              Discover SellDesk
            </button>
            <button
              @click="scrollTo('ecosystem')"
              class="bg-white text-blue-600 border border-slate-200 px-5 py-3 rounded-xl font-extrabold hover:bg-slate-50 transition"
            >
              Explore Quidly
            </button>
          </div>
        </div>

        <!-- Visual -->
        <div
          class="relative min-h-[390px] rounded-[30px] bg-gradient-to-br from-[#082d92] to-blue-600 overflow-hidden p-7 text-white shadow-[0_30px_70px_rgba(8,45,146,0.2)]"
        >
          <div class="absolute w-60 h-60 rounded-full bg-white/10 -right-16 -top-14"></div>

          <div
            class="absolute top-[75px] left-8 w-[260px] bg-white text-slate-900 rounded-[20px] p-5 shadow-2xl"
          >
            <span class="text-[11px] text-slate-500">BUSINESS PAYMENTS</span>
            <div class="text-[28px] font-black my-2">₦250,000</div>
            <span
              class="inline-block bg-blue-50 text-blue-600 px-2.5 py-1.5 rounded-lg text-[10px] font-black"
            >
              Payment received
            </span>
          </div>

          <div
            class="absolute right-7 bottom-11 w-[220px] bg-white text-slate-900 rounded-[20px] p-5 shadow-2xl"
          >
            <span class="text-[11px] text-slate-500">SELLDESK INVOICE</span>
            <div class="font-black my-2">INV-00124</div>
            <span
              class="inline-block bg-blue-50 text-blue-600 px-2.5 py-1.5 rounded-lg text-[10px] font-black"
            >
              Paid
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- About -->
    <section id="about" class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="text-center">
        <h2 class="text-[34px] tracking-tight font-bold mb-2.5">What we are about</h2>
        <p class="max-w-[720px] mx-auto text-slate-500 leading-relaxed">
          Teinnovate Capital describes its focus as consumer-centric innovation that combines data,
          automation and UX simplicity to improve service and product delivery. Quidly is its
          payment solutions service provision, aimed at transforming payment service delivery in
          Nigeria.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4.5 mt-8">
        <div
          v-for="item in aboutCards"
          :key="item.title"
          class="bg-white border border-slate-200 rounded-[20px] p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ml-1"
        >
          <div
            class="w-12 h-12 rounded-[15px] bg-blue-50 text-blue-600 grid place-items-center font-black"
          >
            {{ item.num }}
          </div>
          <h3 class="mt-4 mb-2 font-bold text-lg">{{ item.title }}</h3>
          <p class="text-[13px] text-slate-500 leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section id="story" class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div class="rounded-[24px] p-9 bg-gradient-to-br from-[#082d92] to-blue-600 text-white">
          <div
            class="inline-block bg-white/10 text-white px-3.5 py-2 rounded-full text-xs font-black"
          >
            OUR STORY
          </div>
          <div class="text-[54px] font-black tracking-[-3px] my-4 leading-none">
            From payment friction to payment flow.
          </div>
          <p class="text-blue-100 text-sm leading-relaxed">
            Our product direction is centered around the realities of businesses and communities
            that still spend too much time manually reconciling payments, following up on invoices
            and coordinating collections.
          </p>
        </div>

        <div class="rounded-[24px] p-9 bg-white border border-slate-200">
          <h2 class="text-[34px] tracking-tight font-bold mb-4">Why we are building this</h2>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">
            Payment is more than the final transaction. It is the workflow around the transaction —
            the request, invoice, collection, confirmation, tracking and follow-up.
          </p>
          <p class="text-slate-500 text-sm leading-relaxed">
            SellDesk and the wider Quidly ecosystem bring these experiences into one connected
            platform so businesses can spend less time chasing payments and more time running their
            operations.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section id="values" class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="text-center">
        <h2 class="text-[34px] tracking-tight font-bold mb-2.5">Our values</h2>
        <p class="max-w-[720px] mx-auto text-slate-500 leading-relaxed">
          The principles that should be visible in every SellDesk and Quidly experience.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white border border-slate-200 rounded-[17px] p-6"
        >
          <b class="text-sm">{{ value.title }}</b>
          <p class="text-xs text-slate-500 leading-relaxed mt-2">{{ value.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Teinnovate -->
    <section id="teinnovate" class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div class="rounded-[24px] p-9 bg-gradient-to-br from-[#082d92] to-blue-600 text-white">
          <div
            class="inline-block bg-white/10 text-white px-3.5 py-2 rounded-full text-xs font-black"
          >
            OUR PARENT COMPANY
          </div>
          <div class="text-[54px] font-black tracking-[-3px] my-4 leading-none">
            Teinnovate Capital
          </div>
          <p class="text-blue-100 text-sm leading-relaxed">
            Teinnovate Capital is the innovation company behind the Quidly payment solutions service
            provision. Its stated focus spans fintech, agrictech, medtech, govtech and other
            emerging technology verticals.
          </p>
        </div>

        <div class="rounded-[24px] p-9 bg-white border border-slate-200">
          <h2 class="text-[34px] tracking-tight font-bold mb-4">Innovation across sectors</h2>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">
            According to Teinnovate Capital, the company aims to build consumer-centric innovation
            that helps service providers deliver exceptional experiences while improving
            optimization and profitability through data, automation and UX simplicity.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
            <div
              v-for="sector in sectors"
              :key="sector.title"
              class="bg-white border border-slate-200 rounded-[17px] p-5"
            >
              <b class="text-sm">{{ sector.title }}</b>
              <p class="text-xs text-slate-500 leading-relaxed mt-1">{{ sector.desc }}</p>
            </div>
          </div>

          <a
            href="https://www.teinnovatecapital.ng/"
            target="_blank"
            class="inline-block mt-5 text-blue-600 font-extrabold hover:underline"
          >
            Visit Teinnovate Capital →
          </a>
        </div>
      </div>
    </section>

    <!-- Ecosystem -->
    <section id="ecosystem" class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="text-center">
        <h2 class="text-[34px] tracking-tight font-bold mb-2.5">
          One ecosystem, multiple payment needs
        </h2>
        <p class="max-w-[720px] mx-auto text-slate-500 leading-relaxed">
          SellDesk is one experience within Quidly, Teinnovate Capital’s payment solutions service
          provision. The ecosystem is designed around different business and community payment
          workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-8">
        <div
          v-for="product in ecosystem"
          :key="product.name"
          class="bg-white border border-slate-200 rounded-[20px] p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ml-1 mt-1"
        >
          <div
            class="w-12 h-12 rounded-[15px] bg-blue-50 text-blue-600 grid place-items-center font-black text-sm"
          >
            {{ product.icon }}
          </div>
          <h3 class="mt-4 mb-2 font-bold text-lg">{{ product.name }}</h3>
          <p class="text-[13px] text-slate-500 leading-relaxed">{{ product.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="max-w-[1180px] mx-auto px-5 py-16">
      <div class="text-center">
        <h2 class="text-[34px] tracking-tight font-bold mb-2.5">From idea to product</h2>
        <p class="max-w-[720px] mx-auto text-slate-500 leading-relaxed">
          Teinnovate Capital presents its approach as idea-to-product, prototyping and innovation.
          This is a better fit for the company page than an invented corporate timeline.
        </p>
      </div>

      <div class="max-w-[800px] mx-auto mt-9">
        <div
          v-for="(step, index) in timeline"
          :key="step.title"
          class="grid grid-cols-[100px_1fr] gap-5 py-5 border-b border-slate-200 last:border-0"
        >
          <div class="font-black text-blue-600">0{{ index + 1 }}</div>
          <div>
            <h3 class="font-bold mb-1.5">{{ step.title }}</h3>
            <p class="text-slate-500 text-[13px] leading-relaxed m-0">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="max-w-[1180px] mx-auto px-5 py-16">
      <div
        class="bg-gradient-to-br from-[#071f72] to-blue-600 text-white text-center rounded-[26px] py-16 px-6"
      >
        <h2 class="text-4xl font-bold mb-2.5">Let’s create.</h2>
        <p class="text-blue-100 max-w-xl mx-auto">
          Connect with Teinnovate Capital to discuss innovation, payment solutions and opportunities
          to work with the Quidly ecosystem.
        </p>
        <a
          href="https://www.teinnovatecapital.ng/"
          target="_blank"
          class="inline-block mt-5 bg-white text-[#082d92] px-5 py-3.5 rounded-xl font-black hover:bg-slate-100 transition"
        >
          Visit Teinnovate Capital →
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-8 px-[6%] text-slate-500 text-xs">
      <div class="max-w-[1180px] mx-auto flex flex-wrap justify-between gap-5">
        <div>
          <strong class="text-slate-900">SellDesk @ Quidly</strong><br />
          Payment solutions within Teinnovate Capital.
        </div>
        <div>
          <strong class="text-slate-900">Teinnovate Capital</strong><br />
          47 Progress College Road, Agege, Lagos<br />
          info@teinnovatecapital.ng · RC#1688357
        </div>
        <div>
          <a
            href="https://www.teinnovatecapital.ng/"
            target="_blank"
            class="text-blue-600 font-extrabold hover:underline"
          >
            Official company website →
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

