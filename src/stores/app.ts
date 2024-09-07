import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  // ---------- STATE -------------

  const currentCurrencySymbol = ref<any>(null)
  const userCategories = ref<any>([])
  const selectedId = ref<number | null>(null)

  // ---------- GETTERS -------------

  const currentCurrencySymbolGetters = computed(() => currentCurrencySymbol.value)
  const userCategoriesGetters = computed(() => userCategories.value)
  const selectedIdGetters = computed(() => selectedId.value)

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

  function setSelectedId(value: number | null) {
    selectedId.value = value
  }

  return {
    currentCurrencySymbolGetters,
    setCurrentCurrencySymbol,
    userCategoriesGetters,
    actionAddUserCategory,
    actionValuePriceCategory,
    setSelectedId,
    selectedIdGetters
  }
})
