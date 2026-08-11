<script setup>
import { ref, computed } from 'vue'

const activeIntegration = ref('widget')
const activeEnvironment = ref('Sandbox')
const toastVisible = ref(false)
const toastMessage = ref('')
let toastTimeout = null

const integrationTypes = [
  { key: 'widget', label: 'Payment Widget' },
  { key: 'invoice', label: 'SellDesk Invoice' },
  { key: 'qr', label: 'QR Payments' },
  { key: 'api', label: 'API' }
]

const environments = ['Sandbox', 'Live']

const codeData = {
  widget: {
    title: 'Payment Widget',
    code: `const quidly = new Quidly({
  publicKey: "YOUR_PUBLIC_KEY",
  environment: "sandbox"
});

quidly.pay({
  amount: 25000,
  currency: "NGN",
  reference: "ORDER-001"
});`
  },
  invoice: {
    title: 'SellDesk Invoice',
    code: `const invoice = await quidly.invoices.create({
  customer: { name: "Customer Name", email: "customer@example.com" },
  amount: 25000,
  currency: "NGN"
});

invoice.share();`
  },
  qr: {
    title: 'QR Payments',
    code: `const payment = await quidly.payments.create({
  amount: 25000,
  currency: "NGN",
  method: "qr",
  reference: "QR-ORDER-001"
});

payment.displayQRCode();`
  },
  api: {
    title: 'API',
    code: `POST /payments
Authorization: Bearer YOUR_SECRET_KEY

{
  "amount": 25000,
  "currency": "NGN",
  "reference": "ORDER-001"
}`
  }
}

const currentCode = computed(() => codeData[activeIntegration.value])

const steps = [
  {
    title: 'Create account',
    desc: 'Set up your SellDesk/Quidly business account and access required credentials.'
  },
  {
    title: 'Choose a product',
    desc: 'Select Payment Widget, invoices, QR payments or another supported workflow.'
  },
  {
    title: 'Connect',
    desc: 'Add credentials or the implementation snippet to your platform.'
  },
  {
    title: 'Test & launch',
    desc: 'Test in the appropriate environment, then move to production.'
  }
]

const ecosystemCards = [
  {
    icon: '▣',
    name: 'Payment Widget',
    desc: 'Accept payments directly on your website, school portal or e-commerce store.',
    linkText: 'Explore integration →',
    action: 'select',
    key: 'widget'
  },
  {
    icon: 'SD',
    name: 'SellDesk',
    desc: 'Connect electronic invoicing and payment tracking into your workflow.',
    linkText: 'Invoice integration →',
    action: 'select',
    key: 'invoice'
  },
  {
    icon: 'QR',
    name: 'QR Payments',
    desc: 'Support the QR-first payment experience for relevant Quidly workflows.',
    linkText: 'QR integration →',
    action: 'select',
    key: 'qr'
  },
  {
    icon: 'P4',
    name: 'Pay4Me',
    desc: 'Build payment-request journeys where a recipient can review and pay.',
    linkText: 'Learn more →',
    action: 'toast',
    toast: 'Pay4Me resources selected'
  },
  {
    icon: 'PS',
    name: 'PayWithSplit',
    desc: 'Support shared payment journeys where people pay their own portion.',
    linkText: 'Learn more →',
    action: 'toast',
    toast: 'PayWithSplit resources selected'
  },
  {
    icon: 'CL',
    name: 'CreditList',
    desc: 'Connect installment payment workflows for schools, hospitals and organizations.',
    linkText: 'Learn more →',
    action: 'toast',
    toast: 'CreditList resources selected'
  }
]

const showToast = (message) => {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toastVisible.value = false
  }, 2200)
}

const selectIntegration = (key) => {
  activeIntegration.value = key
  scrollToBuilder()
}

const selectEnvironment = (env) => {
  activeEnvironment.value = env
  showToast(`${env} environment selected`)
}

const handleCardClick = (card) => {
  if (card.action === 'select') {
    selectIntegration(card.key)
  } else {
    showToast(card.toast)
  }
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(currentCode.value.code)
    showToast('Integration code copied')
  } catch {
    showToast('Could not copy code')
  }
}

const scrollToBuilder = () => {
  document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
    <header class="text-center pt-20 pb-16 px-5 bg-[radial-gradient(circle_at_50%_0,#dfeaff,transparent_48%),#fff]">
      <div class="inline-block bg-blue-50 text-blue-600 px-3.5 py-2 rounded-full text-xs font-black">
        SELLDESK INTEGRATIONS
      </div>

      <h1 class="text-[clamp(42px,6vw,70px)] leading-none tracking-[-3px] max-w-[850px] mx-auto my-5 font-bold">
        Connect your business to payments.
      </h1>

      <p class="max-w-[700px] mx-auto text-slate-500 text-[17px] leading-relaxed">
        Integrate SellDesk and the Quidly payment ecosystem into your website,
        school portal, e-commerce store or business workflow.
      </p>

      <div class="mt-7 flex flex-col sm:flex-row justify-center gap-2.5">
        <button
          @click="scrollToBuilder"
          class="bg-blue-600 text-white px-5 py-3 rounded-xl font-extrabold hover:bg-blue-700 transition"
        >
          Explore Integration
        </button>
        <button
          @click="showToast('Developer documentation selected')"
          class="bg-white text-blue-600 border border-slate-200 px-5 py-3 rounded-xl font-extrabold hover:bg-slate-50 transition"
        >
          View Documentation
        </button>
      </div>
    </header>

    <!-- Integration Builder -->
    <section id="builder" class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] font-bold mb-2.5">Choose your integration</h2>
        <p class="max-w-[700px] mx-auto text-slate-500 leading-relaxed">
          Select a product, environment and implementation preview. The code
          below is demo content and should be replaced with your approved
          SDK/API implementation.
        </p>
      </div>

      <section class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <!-- Left Panel -->
        <div class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm">
       <h3 class="font-bold text-lg mb-3 ml-5 mt-3">
        Integration type
       </h3>

       <div class="flex flex-wrap gap-2 my-5 ml-3">
       <button
      v-for="type in integrationTypes"
      :key="type.key"
      @click="selectIntegration(type.key)"
      class="border px-4 py-2.5 rounded-[9px] text-xs font-extrabold transition"
      :class="activeIntegration === type.key
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
     >
      {{ type.label }}
     </button>
      </div>

        <h3 class="font-bold text-lg mb-3 mt-6 ml-5">
        Environment
        </h3>

       <div class="flex flex-wrap gap-2 my-5 ml-3">
        <button
      v-for="env in environments"
      :key="env"
      @click="selectEnvironment(env)"
      class="border px-4 py-2.5 rounded-[9px] text-xs font-extrabold transition"
      :class="activeEnvironment === env
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
      >
      {{ env }}
       </button>
      </div>

      <p class="text-xs text-slate-500 leading-relaxed mt-4">
          Developer-friendly setup with a clear path from testing to production.
      </p>
     </div>

       <!-- Code Panel -->
     <div class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm ml-5">
     <h3 class="font-bold text-lg mb-4 ml-5">
      {{ currentCode.title }}
     </h3>

       <pre
      class="bg-slate-900 text-blue-100 rounded-[14px] p-5 text-xs leading-relaxed font-mono min-h-[250px] whitespace-pre-wrap overflow-x-auto"
      >{{ currentCode.code }}</pre>

      <button
      @click="copyCode"
      class="w-full mt-4 bg-blue-50 text-blue-600 py-2.5 rounded-[9px] font-black text-sm hover:bg-blue-100 transition"
      >
         Copy integration code
      </button>
     </div>
      </section>
  </section>
    <!-- How it works -->
    <section class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] font-bold mb-2.5">How integration works</h2>
        <p class="max-w-[700px] mx-auto text-slate-500 leading-relaxed">
          Keep the technical journey simple while communicating the value to business owners.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm ml-3"
        >
          <div class="w-8.5 h-8.5 rounded-full bg-blue-50 text-blue-600 grid place-items-center font-black text-sm">
            {{ index + 1 }}
          </div>
          <h3 class="mt-3 mb-1.5 font-bold ml-5">{{ step.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed ml-3">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Ecosystem Cards -->
    <section class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] font-bold mb-2.5">Build around the Quidly ecosystem</h2>
        <p class="max-w-[700px] mx-auto text-slate-500 leading-relaxed">
          Product cards make the integration section useful for both technical teams and business owners.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
        <div
          v-for="card in ecosystemCards"
          :key="card.name"
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
        >
          <div class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-sm mt-3 ml-5">
            {{ card.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg ml-5">{{ card.name }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-3 ml-3">{{ card.desc }}</p>
          <button
            @click="handleCardClick(card)"
            class="text-blue-600 text-[13px] font-black hover:underline ml-3 mb-2"
          >
            {{ card.linkText }}
          </button>
        </div>
      </div>
    </section>

    <!-- Simple Flow -->
    <section class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="text-center">
        <h2 class="text-[32px] font-bold mb-2.5">A simple payment workflow</h2>
        <p class="max-w-[700px] mx-auto text-slate-500 leading-relaxed">
          A visual explanation for non-technical visitors.
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-3 mt-7">
        <div class="bg-white border border-slate-200 rounded-[15px] p-5 text-center min-w-[160px]">
          <b>Your platform</b>
          <small class="block text-slate-500 mt-1">Website / portal / store</small>
        </div>
        <div class="text-blue-600 font-black text-xl rotate-90 md:rotate-0">→</div>
        <div class="bg-white border border-slate-200 rounded-[15px] p-5 text-center min-w-[160px]">
          <b>SellDesk / Quidly</b>
          <small class="block text-slate-500 mt-1">Payment request</small>
        </div>
        <div class="text-blue-600 font-black text-xl rotate-90 md:rotate-0">→</div>
        <div class="bg-white border border-slate-200 rounded-[15px] p-5 text-center min-w-[160px]">
          <b>Customer</b>
          <small class="block text-slate-500 mt-1">Pay / confirm</small>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-[1180px] mx-auto px-5 py-14">
      <div class="bg-gradient-to-br from-[#071f72] to-blue-600 text-white py-14 px-6 rounded-[24px] text-center">
        <h2 class="text-[36px] font-bold mb-2.5">Ready to connect?</h2>
        <p class="text-blue-100 max-w-xl mx-auto">
          Start with the right integration path and give your customers a smoother payment experience.
        </p>
        <button
          @click="showToast('Integration onboarding started')"
          class="inline-block mt-5 bg-white text-[#082d92] px-5 py-3.5 rounded-[10px] font-black hover:bg-slate-100 transition"
        >
          Start Integration →
        </button>
      </div>
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

