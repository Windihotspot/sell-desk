<template>
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
</script>
