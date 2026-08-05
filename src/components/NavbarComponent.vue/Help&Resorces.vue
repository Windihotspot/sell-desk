<template>
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
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
        >
          <div
            class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-lg"
          >
            {{ resource.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg">{{ resource.title }}</h3>
          <p class="text-[13px] leading-relaxed text-slate-500 min-h-[43px]">{{ resource.desc }}</p>
          <button
            @click="handleResourceClick(resource)"
            class="text-blue-600 text-[13px] font-black mt-2 hover:underline"
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
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
        >
          <div
            class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-sm"
          >
            {{ product.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg">{{ product.name }}</h3>
          <p class="text-[13px] leading-relaxed text-slate-500 min-h-[43px]">{{ product.desc }}</p>
          <button
            @click="showToast(`${product.name} resources selected`)"
            class="text-blue-600 text-[13px] font-black mt-2 hover:underline"
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
        <div class="bg-blue-50 rounded-[20px] p-7">
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
            class="border-b border-slate-200 last:border-0"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full bg-white px-4.5 py-4.5 text-left font-extrabold flex justify-between items-center hover:bg-slate-50 transition"
            >
              {{ item.question }}
              <span class="text-blue-600 text-xl font-normal">
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
              class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-lg mb-3"
            >
              {{ channel.icon }}
            </div>
            <b class="block mb-1">{{ channel.title }}</b>
            <p class="text-xs text-slate-500 leading-relaxed mb-3">{{ channel.desc }}</p>
            <button
              @click="showToast(channel.toast)"
              class="bg-blue-50 text-blue-600 px-3.5 py-2.5 rounded-[9px] font-extrabold text-sm hover:bg-blue-100 transition"
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
