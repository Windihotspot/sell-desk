<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initializeKeycloak } from '@/services/keycloak/keycloak.service'

const keycloakLoading = ref(true)
const keycloakError = ref(false)

onMounted(async () => {
  try {
    await initializeKeycloak()
    console.log('✅ Keycloak ready')
  } catch (error) {
    console.error('❌ Keycloak initialization failed:', error)
    keycloakError.value = true
  } finally {
    keycloakLoading.value = false
  }
})
</script>

<template>
  <!-- Keycloak Loading -->
  <div
    v-if="keycloakLoading"
    class="min-h-screen flex items-center justify-center bg-white"
  >
    <div class="text-center">
      <div
        class="w-10 h-10 mx-auto mb-4 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"
      ></div>

      <p class="text-sm text-gray-500">
        Loading...
      </p>
    </div>
  </div>

  <!-- Application -->
  <RouterView v-else />
</template>