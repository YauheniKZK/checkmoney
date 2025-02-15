<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currencySymbols, enterBTN } from '@/untils/data'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import WebApp from '@twa-dev/sdk'
import Categories from './Categories.vue'
import { CommentAdd20Regular, Calculator20Regular, Backspace20Regular } from '@vicons/fluent'

const appStore = useAppStore()

const {
  currentCurrencySymbolGetters,
  selectedIdGetters,
  currentEnterExpensesGetters
} = storeToRefs(appStore)
const { setCurrentCurrencySymbol, actionValuePriceCategory } = appStore

const setSizeBtn = (type: string) => {
  if (type !== 'enter' && type !== 'comment') {
    return 1
  }
  if (type === 'enter') {
    return 2
  }
  if (type === 'comment') {
    return 3
  }
  return 1
}

const classPushBtn = ref('')
const inputnumber = ref()
const valueInput = ref(null)
const showSelectSymbol = ref(false)

const selectedSymbol = ref(currentCurrencySymbolGetters.value?.value || null)
const selectedId = ref<any>(null)
const inputNumberPlaceholder = ref('0')
const addPriceBtn = ref()

const categoryItemRefTest = ref<any>(null)

const keyboardHeight = ref(32)

const pushedBtnValue = ref<string | null>(null)

const pushBtn = (value: string) => {
  pushedBtnValue.value = value
  WebApp.HapticFeedback.impactOccurred('medium')
  classPushBtn.value = 'enlarged'
  setTimeout(() => {
    classPushBtn.value = ''
    pushedBtnValue.value = null
  }, 100)
}

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

const focusNumber = () => {
  inputNumberPlaceholder.value = ''
}

const blurNumber = () => {
  inputNumberPlaceholder.value = '0'
}

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

const addPrice = () => {
  if (valueInput.value && selectedId.value) {
    actionValuePriceCategory({
      categoryId: selectedId.value,
      value: valueInput.value
    })
    selectedId.value = null
    valueInput.value = null
    inputnumber.value.focus();
  }
}

document.addEventListener('touchstart', function(event: any) {
  // console.log('inputnumber.value', inputnumber.value)
  if (inputnumber.value) {
    if (
      inputnumber.value !== document.activeElement &&
      !event?.target?.closest('input') &&
      !event.target.closest('button') &&
      !event.target.closest('.item-category')
    ) {
      console.log('categoryItemRef', event.target.closest('.item-category'))
      categoryItemRefTest.value = String(event.target.closest('.item-category'))
      
      if (event.target.closest('.item-category')) {
        inputnumber.value.blur();
        //inputnumber.value.focus();
      } else {
        inputnumber.value.blur();
      }
    } else {
      if (event.target.closest('.item-category')) {
        // inputnumber.value.focus();
      } else {
        // inputnumber.value.blur();
      }
      categoryItemRefTest.value = 'Yes'
    }
  }
})

const setHeightBtn = () => {
  const height = Number(((WebApp.viewportStableHeight - 400) / 4).toFixed(2))
  console.log('height', Number(((WebApp.viewportStableHeight - 300) / 4).toFixed(2)))
  console.log('height', height)
  return height
}

onMounted(() => {
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      console.log('window', window)
      const viewportHeight = window.visualViewport.height;
      const windowHeight = window.innerHeight;
      if (windowHeight - viewportHeight <= 0) {
        keyboardHeight.value = 32
      } else {
        keyboardHeight.value = windowHeight - viewportHeight - 64
      }
      // keyboardHeight.value = windowHeight - viewportHeight;

      console.log('Высота клавиатуры:', keyboardHeight.value);
    })
  }
})
</script>

<template>
  <div class="flex grow flex-col justify-end w-full p-4 relative">
    <div class="flex justify-center mb-4 py-6">
      <span class="text-[30px] leading-[30px] flex self-baseline">{{ 'Br' }}</span>
      <span class="text-[72px] leading-[50px]">{{ currentEnterExpensesGetters.integer }}</span>
      <span class="text-[24px] leading-[24px] flex self-baseline">{{ currentEnterExpensesGetters.fraction }}</span>
    </div>
    <n-grid :cols="3" :x-gap="4" :y-gap="4">
      <n-grid-item
        v-for="btn in enterBTN"
        :key="btn.value"
        :span="setSizeBtn(btn.type)"
      >
        <div class="flex justify-center items-center bg-[#ffffff05] w-full rounded-[16px]" :style="`height: ${setHeightBtn()}px`" @click="pushBtn(btn.value)">
          <n-icon v-if="btn.type === 'remove'" :size="32" :color="'#ceeeee'">
            <Backspace20Regular />
          </n-icon>
          <span v-else class="text-[#ceeeee] font-semibold text-[18px] unenlarged" :class="pushedBtnValue === btn.value ? classPushBtn: ''">{{ btn.label }}</span>
        </div>
      </n-grid-item>
      <n-grid-item :span="3">
        <div class="flex justify-between items-center pt-4">
          <div class="flex gap-6">
            <n-button text>
              <n-icon :size="28" :color="'#ceeeee'">
                <CommentAdd20Regular />
              </n-icon>
            </n-button>
            <n-button text>
              <n-icon :size="28" :color="'#ceeeee'">
                <Calculator20Regular />
              </n-icon>
            </n-button>
          </div>
          <n-button
            :color="'#cbf178'"
            :text-color="'#282f19'"
            class="h-[52px] min-w-[40%] max-w-full font-[600]"
            :style="`
              border-radius: 32px;
              font-size: 16px;
            `"
            @click="false"
          >
            <span>{{ 'Внести' }}</span>
          </n-button>
        </div>
      </n-grid-item>
    </n-grid>
    <!-- <div class="flex items-center">
      <div class="flex text-[32px] text-[#d2d2d2] mr-1">
        <n-ellipsis style="max-width: 100px">
          {{ currentCurrencySymbolGetters?.symbol_native || '' }}
        </n-ellipsis>
      </div>
      <n-input-number
        ref="inputnumber"
        v-model:value="valueInput"
        :show-button="false"
        :parse="parseCurrency"
        :validator="validatorInputNumber"
        :disabled="!selectedIdGetters"
        :input-props="{
          inputmode: 'decimal',
          pattern: '[0-9]*\.?[0-9]*'
        }"
        :placeholder="inputNumberPlaceholder"
        class="number-input-main"
        @focus="focusNumber"
        @blur="blurNumber"
      />
    </div> -->
    <!-- <div class="flex pt-2 max-w-[70%]">
      <span v-if="currentCurrencySymbolGetters" class="text-[#d2d2d2]">
        {{ 'Выберете сначало категорию, потом внесите ваши расходы' }}
      </span>
      <div v-else>
        <n-button text :text-color="'#d2d2d2'" @click="changeSymbol">
          <span class="underline">{{ 'Выберете' }}</span>
        </n-button>
        <span class="text-[#d2d2d2]">{{ ' денежный знак' }}</span>
      </div>
    </div> -->
    <span class="absolute right-4 top-4">{{ WebApp.viewportHeight }}</span>
    <span class="absolute right-4 top-8">{{ WebApp.viewportStableHeight }}</span>
    <span class="absolute right-4 top-16">{{ keyboardHeight }}</span>
    <span class="absolute right-4 top-32">{{ categoryItemRefTest }}</span>
    <!-- <n-button
      text
      color="#eeeeee"
      @click="changeSymbol"
    >
      <span>{{ 'Выбрать знак' }}</span>
    </n-button> -->
    
    <!-- <Categories /> -->
    
    <!-- <div
      v-if="selectedIdGetters"
      class="flex justify-center absolute bottom-[0px] left-0 w-full animated-btn z-10"
      :style="`
        bottom: ${keyboardHeight}px
      `"
    >
      <n-button
        ref="addPriceBtn"
        :color="'#cecece'"
        :text-color="'#1a1a1a'"
        class="h-[52px] max-w-[340px] w-full mx-auto"
        :disabled="!selectedId"
        :style="`
          opacity: 1 !important;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 500;
          background: #cecece !important;
        `"
        @click="addPrice"
      >
        <span>{{ 'Внести' }}</span>
      </n-button>
    </div>
    <n-drawer
      v-model:show="showSelectSymbol"
      :width="380"
      to=".main-container"
      :placement="'right'"
      :content-class="'bg-[#2c2c2c]'"
    >
      <n-drawer-content>
        <div class="flex flex-col">
          <span class="text-[#eeeeee] mb-2">{{ 'Выберете денежный знак' }}</span>
          <n-select
            v-model:value="selectedSymbol"
            filterable
            class="custom-select"
            :placeholder="'денежный знак'"
            :options="optionsSymbols"
            @update:value="updateSymbol"
          />
        </div>
      </n-drawer-content>
    </n-drawer> -->
  </div>
</template>

<style scoped>
.animated-btn {
  transition: all 0.2s ease-in-out;
}
.unenlarged:not(.enlarged) {
  transition: all 0.1s ease-in-out;
  transform: scale(1);
}
.enlarged {
  transition: all 0.1s ease-in-out;
  transform: scale(1.5);
}
</style>
