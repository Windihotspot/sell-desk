<template>
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

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <!-- Left Panel -->
        <div class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm">
          <h3 class="font-bold text-lg mb-1">Integration type</h3>
          <div class="flex flex-wrap gap-1.5 my-4">
            <button
              v-for="type in integrationTypes"
              :key="type.key"
              @click="selectIntegration(type.key)"
              class="border px-3.5 py-2.5 rounded-[9px] text-xs font-extrabold transition"
              :class="activeIntegration === type.key
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
            >
              {{ type.label }}
            </button>
          </div>

          <h3 class="font-bold text-lg mb-1">Environment</h3>
          <div class="flex flex-wrap gap-1.5 my-4">
            <button
              v-for="env in environments"
              :key="env"
              @click="selectEnvironment(env)"
              class="border px-3.5 py-2.5 rounded-[9px] text-xs font-extrabold transition"
              :class="activeEnvironment === env
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
            >
              {{ env }}
            </button>
          </div>

          <p class="text-xs text-slate-500">
            Developer-friendly setup with a clear path from testing to production.
          </p>
        </div>

        <!-- Code Panel -->
        <div class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm">
          <h3 class="font-bold text-lg mb-3">{{ currentCode.title }}</h3>
          <pre class="bg-slate-900 text-blue-100 rounded-[14px] p-5 text-xs leading-relaxed font-mono min-h-[250px] whitespace-pre-wrap overflow-x-auto">{{ currentCode.code }}</pre>
          <button
            @click="copyCode"
            class="w-full mt-2.5 bg-blue-50 text-blue-600 py-2.5 rounded-[9px] font-black text-sm hover:bg-blue-100 transition"
          >
            Copy integration code
          </button>
        </div>
      </div>
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
          class="bg-white border border-slate-200 rounded-[20px] p-6.5 shadow-sm"
        >
          <div class="w-8.5 h-8.5 rounded-full bg-blue-50 text-blue-600 grid place-items-center font-black text-sm">
            {{ index + 1 }}
          </div>
          <h3 class="mt-3 mb-1.5 font-bold">{{ step.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed">{{ step.desc }}</p>
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
          <div class="w-12 h-12 rounded-[14px] bg-blue-50 text-blue-600 grid place-items-center font-black text-sm">
            {{ card.icon }}
          </div>
          <h3 class="mt-4 mb-1.5 font-bold text-lg">{{ card.name }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-3">{{ card.desc }}</p>
          <button
            @click="handleCardClick(card)"
            class="text-blue-600 text-[13px] font-black hover:underline"
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