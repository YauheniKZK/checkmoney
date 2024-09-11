import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  function generateZeros(n: number) {
      return '0'.repeat(n)
  }

  // ---------- STATE -------------

  const currentCurrencySymbol = ref<any>(null)
  const userCategories = ref<any>([])
  const selectedId = ref<number | null>(null)
  const decimalPlaces = ref(2)
  const currentEnterExpenses = ref({
    integer: '0',
    fraction: generateZeros(decimalPlaces.value || 1)
  })

  // ---------- GETTERS -------------

  const currentCurrencySymbolGetters = computed(() => currentCurrencySymbol.value)
  const userCategoriesGetters = computed(() => userCategories.value)
  const selectedIdGetters = computed(() => selectedId.value)
  const decimalPlacesGetters = computed(() => decimalPlaces.value)
  const currentEnterExpensesGetters = computed(() => currentEnterExpenses.value)

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
    selectedIdGetters,
    currentEnterExpensesGetters,
    decimalPlacesGetters
  }
})
