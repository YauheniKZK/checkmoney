import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  // ---------- STATE -------------

  const currentCurrencySymbol = ref<any>(null)

  // ---------- GETTERS -------------

  const currentCurrencySymbolGetters = computed(() => currentCurrencySymbol.value)

  // ---------- ACTION -------------

  function setCurrentCurrencySymbol(value: any) {
    currentCurrencySymbol.value = value
  }

  

  return {
    currentCurrencySymbolGetters,
    setCurrentCurrencySymbol
  }
})
