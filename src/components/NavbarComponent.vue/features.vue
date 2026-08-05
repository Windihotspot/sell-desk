<template>
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

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

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
