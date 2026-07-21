<template>
  <header class="w-full bg-white border-b border-gray-200">
    <nav class="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
      <!-- Logo -->
      <div class="flex items-center gap-1 shrink-0">
        <div class="leading-tight">
          <span class="text-2xl font-bold text-blue-600 block -mb-1 ml-4">sell</span>
          <span class="text-2xl font-bold text-slate-900 block">desk</span>
        </div>
        <span class="text-emerald-500 font-medium text-xs  mt-1">@quidly</span>
      </div>

      <!-- nav link features  -->
      <nav class="flex items-center gap-8 text-gray-700 font-medium ml-10">
        <a href="#" class="hover:text-blue-600">Features</a>
        <a href="#" class="hover:text-blue-600">Pricing</a>
        <a href="#" class="hover:text-blue-600">Integrations</a>
        <a href="#" class="hover:text-blue-600">Download</a>
        <a href="#" class="hover:text-blue-600">Resources</a>
      </nav>
      <!-- Nav links -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.label"
          class="flex items-center gap-1 text-slate-700 font-medium text-sm hover:text-slate-900 transition-colors"
        >
          {{ item.label }}
          <svg
            v-if="item.hasDropdown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4 h-4 text-slate-400"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Right side actions -->
      <div class="flex items-center gap-5 shrink-0">
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
          <svg
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
          </svg>
        </button>

        <span class="text-sm text-slate-700">English</span>

        <a href="#" class="text-sm font-semibold text-blue-600 hover:text-blue-700">Sign In</a>

        <a
          href="#"
          class="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
        >
          Sign Up For Free
        </a>
      </div>
    </nav>
  </header>
</template>
