<template>
  <div
    class="min-h-screen grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] bg-[#f6f8fc] text-[#101828] font-sans"
  >
    <!-- ===================== BRAND PANEL ===================== -->
    <section
      class="relative overflow-hidden px-[7%] py-8 sm:py-10 lg:py-[42px] text-white bg-[radial-gradient(circle_at_75%_20%,#4c8eff66,transparent_25%),linear-gradient(145deg,#06184f,#0a2d92_48%,#1e63f2)] min-h-[380px] sm:min-h-[430px] lg:min-h-screen"
    >
      <!-- decorative circle -->
      <div
        class="pointer-events-none absolute w-[650px] h-[650px] border border-white/10 rounded-full right-[-360px] top-[90px] shadow-[0_0_0_80px_#ffffff06,0_0_0_160px_#ffffff04]"
      />

      <!-- Logo -->
      <div class="relative z-10 text-[25px] font-black tracking-[-1.5px]">
        <span class="text-[#7bc0ed]">sell</span>
        <span class="text-[#8fce42]">desk</span>
        <span class="text-[9px] text-white/60 border-l border-white/30 pl-2 ml-1.5">
          @ quidly
        </span>
      </div>

      <!-- Brand content -->
      <div class="relative z-10 max-w-[620px] mt-14 sm:mt-[70px] lg:mt-[17vh]">
        <div
          class="inline-flex items-center gap-2 px-3 py-2 border border-white/20 bg-white/10 rounded-full text-[11px] font-extrabold"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-[#9bd84b] shadow-[0_0_0_5px_#9bd84b20]" />
          PAYMENT WORKSPACE
        </div>

        <h1
          class="text-[42px] sm:text-[clamp(42px,5vw,70px)] leading-[0.96] tracking-[-2.5px] sm:tracking-[-4px] my-5 sm:my-6"
        >
          Your business.<br />
          Your payments.<br />
          One place.
        </h1>

        <p class="max-w-[550px] text-white/75 leading-relaxed text-[15px]">
          Manage invoices, payment requests, collections and payment activity from a single, simple
          workspace built around the Quidly ecosystem.
        </p>

        <!-- Promise badges (hidden on very small screens) -->
        <div class="hidden sm:flex flex-wrap gap-2.5 mt-8">
          <span
            v-for="item in ['Simple', 'Secure', 'Fast', 'Reliable']"
            :key="item"
            class="px-3.5 py-2.5 rounded-[10px] bg-white/10 border border-white/20 text-[11px] font-extrabold"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <!-- Floating cards scene (hidden on small screens) -->
      <div
        class="hidden sm:block absolute z-10 right-[6%] lg:right-[7%] bottom-4 lg:bottom-[8%] w-[min(420px,52%)] h-[245px] scale-75 lg:scale-100 origin-bottom-right"
      >
        <!-- Main payment card -->
        <div
          class="absolute left-0 top-0 w-[245px] bg-white/95 text-[#101828] rounded-[18px] p-[18px] shadow-[0_24px_60px_#0003] animate-[float1_5s_ease-in-out_infinite]"
        >
          <div class="flex justify-between text-[10px] text-[#667085]">
            <span>PAYMENT RECEIVED</span>
            <span>QUIDLY</span>
          </div>
          <div class="text-[28px] font-black my-3">₦250,000</div>
          <span
            class="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#eff9e8] text-[#4e8700] rounded-lg text-[9px] font-black"
          >
            <i class="w-1.5 h-1.5 rounded-full bg-[#6caf08]" />
            Successful payment
          </span>
        </div>

        <!-- Invoice card -->
        <div
          class="absolute right-0 bottom-0 w-[205px] bg-white/95 text-[#101828] rounded-[18px] p-[18px] shadow-[0_24px_60px_#0003] animate-[float2_5s_ease-in-out_infinite]"
        >
          <div class="flex justify-between items-center">
            <div>
              <div class="text-[10px] text-[#667085]">INVOICE</div>
              <div class="text-sm font-black mt-3 mb-1">INV-00124</div>
              <div class="text-[10px] text-[#667085]">Customer payment</div>
            </div>
            <div
              class="w-10 h-10 rounded-lg"
              style="
                background: repeating-linear-gradient(90deg, #101828 0 6px, #fff 6px 12px),
                  repeating-linear-gradient(#101828 0 6px, #fff 6px 12px);
              "
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== LOGIN PANEL ===================== -->
    <main
      class="min-h-auto lg:min-h-screen bg-white flex items-center justify-center px-5 sm:px-[7%] py-12 sm:py-14 lg:py-10"
    >
      <div class="w-full max-w-[430px]">
        <div class="text-[#1e63f2] text-[11px] font-black uppercase tracking-[1.2px]">
          Welcome back
        </div>

        <h2 class="text-[30px] sm:text-[34px] tracking-[-1.5px] mt-2.5 mb-2">
          Sign in to SellDesk
        </h2>

        <p class="text-[#667085] text-sm leading-relaxed mb-8">
          Access your dashboard and keep your payment workflow moving.
        </p>

        <form @submit.prevent="handleSubmit">
          <!-- Email -->
          <div class="mb-[18px]">
            <label class="block text-xs font-extrabold mb-2">Email address</label>
            <input
              v-model="email"
              type="email"
              placeholder="you@company.com"
              required
              class="w-full h-[50px] border border-[#e4e8f0] rounded-[11px] px-3.5 outline-none text-[#101828] focus:border-[#80a7f8] focus:ring-4 focus:ring-[#1e63f211] transition"
            />
          </div>

          <!-- Password -->
          <div class="mb-[18px]">
            <label class="block text-xs font-extrabold mb-2">Password</label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                required
                class="w-full h-[50px] border border-[#e4e8f0] rounded-[11px] px-3.5 pr-16 outline-none text-[#101828] focus:border-[#80a7f8] focus:ring-4 focus:ring-[#1e63f211] transition"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-extrabold text-[#667085] hover:text-[#101828] transition"
              >
                {{ showPassword ? 'HIDE' : 'SHOW' }}
              </button>
            </div>
          </div>

          <!-- Remember / Forgot -->
          <div class="flex justify-between items-center mb-[22px]">
            <label class="flex items-center gap-2 text-[11px] text-[#667085] cursor-pointer">
              <input
                v-model="remember"
                type="checkbox"
                class="w-[15px] h-[15px] accent-[#1e63f2]"
              />
              Remember me
            </label>
            <a
              href="#"
              @click.prevent="showToast('Forgot password flow selected')"
              class="text-[#1e63f2] text-[11px] font-black hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full h-[51px] rounded-[11px] text-white font-black bg-gradient-to-r from-[#1e63f2] to-[#1554d8] shadow-[0_12px_24px_#1e63f226] hover:brightness-105 active:scale-[0.99] transition"
          >
            Sign in to SellDesk →
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-3 my-6 text-[#98a2b3] text-[10px]">
          <div class="flex-1 h-px bg-[#e4e8f0]" />
          OR CONTINUE WITH
          <div class="flex-1 h-px bg-[#e4e8f0]" />
        </div>

        <!-- Google button -->
        <button
          type="button"
          @click="showToast('Alternative sign-in selected')"
          class="w-full h-12 border border-[#e4e8f0] bg-white rounded-[11px] text-xs font-extrabold text-[#344054] hover:bg-gray-50 active:scale-[0.99] transition"
        >
          Continue with Google
        </button>

        <!-- Sign up link -->
        <p class="text-center mt-6 text-xs text-[#667085]">
          Don't have a SellDesk account?
          <a
            href="#"
            @click.prevent="showToast('Sign up flow selected')"
            class="text-[#1e63f2] font-black hover:underline"
          >
            Create an account
          </a>
        </p>

        <!-- Security note -->
        <div class="text-center text-[9px] text-[#98a2b3] mt-9">
          ⌁ Protected payment workspace · Quidly by Teinnovate Capital
        </div>
      </div>
    </main>

    <!-- Toast -->
    <div
      class="fixed right-5 bottom-5 bg-[#101828] text-white px-4 py-3.5 rounded-[10px] text-xs shadow-lg transition-all duration-200 z-50 pointer-events-none"
      :class="toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
    >
      {{ toastMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)

const toastMessage = ref('')
const toastVisible = ref(false)
let toastTimer = null

function showToast(message) {
  toastMessage.value = message
  toastVisible.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 2200)
}

function handleSubmit() {
  showToast('Demo login submitted — connect your authentication API here.')
  // TODO: call your auth API
}
</script>

<style>
@keyframes float1 {
  50% {
    transform: translateY(-8px) rotate(-1deg);
  }
}
@keyframes float2 {
  50% {
    transform: translateY(8px) rotate(1deg);
  }
}
</style>
