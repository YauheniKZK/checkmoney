<script setup lang="ts">
import { ref, computed } from 'vue'
import { currencySymbols } from '@/untils/data'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { currentCurrencySymbolGetters } = storeToRefs(appStore)
const { setCurrentCurrencySymbol } = appStore

const inputnumber = ref()
const value = ref(null)
const showSelectSymbol = ref(false)
const selectedSymbol = ref(currentCurrencySymbolGetters.value?.value || null)

const optionsSymbols = computed(() => {
  console.log('currencySymbols', currencySymbols)
  return currencySymbols.map((item) => {
    return {
      label: item.name,
      value: item.code,
      ...item
    }
  })
})


const validatorInputNumber = (x: number) => x >= 0

const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|\$|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums))
    return Number(nums)
  return nums === '' ? null : Number.NaN
}

const changeSymbol = () => {
  showSelectSymbol.value = true
}

const updateSymbol = (value: any, option: any) => {
  selectedSymbol.value = value
  setCurrentCurrencySymbol(option)
}

document.addEventListener('touchstart', function(event: any) {
  console.log('inputnumber.value', inputnumber.value)
  if (inputnumber.value) {
    if (inputnumber.value !== document.activeElement && !event?.target?.closest('input')) {
      inputnumber.value.blur();
    }
  }
})

</script>

<template>
  <div class="flex grow flex-col w-full p-4">
    <div class="flex justify-center mb-8 leading-[66px]">
      <span class="text-5xl pacifico-font">{{ 'Расходы' }}</span>
    </div>
    <div class="flex w-full justify-center bg-[#3C2C3E] rounded-lg max-w-[300px] mx-auto p-2 mb-2">
      <n-input-number
        ref="inputnumber"
        :value="value"
        :show-button="false"
        :parse="parseCurrency"
        :validator="validatorInputNumber"
        :input-props="{
          inputmode: 'decimal',
          pattern: '[0-9]*\.?[0-9]*'
        }"
        placeholder="0"
        class="number-input-main"
      >
        <template #suffix>
          <span class="absolute right-0 top-0">{{ currentCurrencySymbolGetters?.symbol_native || '' }}</span>  
        </template>
      </n-input-number>
    </div>
    <n-button
      text
      color="#eeeeee"
      @click="changeSymbol"
    >
      <span>{{ 'Выбрать знак' }}</span>
    </n-button>
    <n-drawer v-model:show="showSelectSymbol" :width="380" to="#app" :placement="'right'" :content-class="'bg-[#1E5F74]'">
      <n-drawer-content>
        <div class="flex flex-col">
          <span class="text-[#eeeeee] mb-2">{{ 'Выберете денежный знак' }}</span>
          <n-select
            v-model:value="selectedSymbol"
            filterable
            placeholder="Please select symbol"
            :options="optionsSymbols"
            @update:value="updateSymbol"
          />
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
</style>
