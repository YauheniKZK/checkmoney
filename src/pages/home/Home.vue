<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currencySymbols } from '@/untils/data'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import WebApp from '@twa-dev/sdk'

const appStore = useAppStore()

const { currentCurrencySymbolGetters } = storeToRefs(appStore)
const { setCurrentCurrencySymbol } = appStore

const inputnumber = ref()
const valueInput = ref(null)
const showSelectSymbol = ref(false)
const selectedSymbol = ref(currentCurrencySymbolGetters.value?.value || null)

const keyboardHeight = ref(32)

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


onMounted(() => {
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      console.log('window', window)
      const viewportHeight = window.visualViewport.height;
      const windowHeight = window.innerHeight;
      keyboardHeight.value = windowHeight - viewportHeight;

      console.log('Высота клавиатуры:', keyboardHeight.value);
    })
  }
})

</script>

<template>
  <div class="flex grow flex-col w-full p-4 relative">
    <span class="absolute right-4 top-4">{{ WebApp.viewportHeight }}</span>
    <span class="absolute right-4 top-8">{{ WebApp.viewportStableHeight }}</span>
    <span class="absolute right-4 top-16">{{ keyboardHeight }}</span>
    <div class="flex justify-center mb-8 leading-[66px]">
      <span class="text-5xl pacifico-font">{{ 'Расходы' }}</span>
    </div>
    <div class="flex w-full justify-center bg-[#3C2C3E] rounded-lg max-w-[300px] mx-auto p-2 mb-2">
      <!--  -->
      <n-input-number
        ref="inputnumber"
        v-model:value="valueInput"
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
    <div class="flex justify-center absolute bottom-8 left-0 w-full" :style="`
      bottom: ${keyboardHeight}px
    `">
      <n-button
        :color="'#0064B0'"
        :text-color="'#FFFFFF'"
        class="h-[54px] max-w-[340px] w-full mx-auto"
        :style="`
          opacity: 1 !important;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 500;
          background: #0064B0 !important;
        `"
        @click="false"
      >
        <span>{{ 'Внести' }}</span>
      </n-button>
    </div>
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
