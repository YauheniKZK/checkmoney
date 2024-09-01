import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  // ---------- STATE -------------

  const currentCurrencySymbol = ref<any>(null)
  const userCategories = ref<any>([])

  // ---------- GETTERS -------------

  const currentCurrencySymbolGetters = computed(() => currentCurrencySymbol.value)
  const userCategoriesGetters = computed(() => userCategories.value)

  // ---------- ACTION -------------

  function setCurrentCurrencySymbol(value: any) {
    currentCurrencySymbol.value = value
  }

  function actionAddUserCategory(item: any) {
    userCategories.value.push(item)
  }

  function actionValuePriceCategory(payload: {
    categoryId: number,
    value: number
  }) {
    const cat = userCategories.value.filter((item: any) => item.id === payload.categoryId)
    cat[0].value = payload.value
  }

  return {
    currentCurrencySymbolGetters,
    setCurrentCurrencySymbol,
    userCategoriesGetters,
    actionAddUserCategory,
    actionValuePriceCategory
  }
})
