<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { currencySymbols } from '@/untils/data'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import WebApp from '@twa-dev/sdk'
import CategoryItem from './components/CategoryItem.vue'

const appStore = useAppStore()

const { currentCurrencySymbolGetters, userCategoriesGetters } = storeToRefs(appStore)
const { setCurrentCurrencySymbol, actionAddUserCategory, actionValuePriceCategory } = appStore

const inputnumber = ref()
const valueInput = ref(null)
const showSelectSymbol = ref(false)
const showAddCategory = ref(false)
const selectedSymbol = ref(currentCurrencySymbolGetters.value?.value || null)
const valueTitleCategory = ref('')
const selectedId = ref<any>(null)
const inputNumberPlaceholder = ref('0')
const addPriceBtn = ref()
const categoryItemRef = ref()

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

const selectCategory = (id: number) => {
  selectedId.value = id
}

const addCategory = () => {
  console.log('userCategoriesGetters.value.length', userCategoriesGetters.value)
  actionAddUserCategory({
    title: valueTitleCategory.value,
    value: 0,
    id: userCategoriesGetters.value.length + 1
  })

  showAddCategory.value = false
  valueTitleCategory.value = ''
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
    console.log('categoryItemRef', event.target.closest('.item-category'))
    if (
      inputnumber.value !== document.activeElement &&
      !event?.target?.closest('input') &&
      !event.target.closest('button') &&
      !event.target.closest('.item-category')
    ) {
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
      if (windowHeight - viewportHeight <= 0) {
        keyboardHeight.value = 32  
      } else {
        keyboardHeight.value = windowHeight - viewportHeight + 16;  
      }
      // keyboardHeight.value = windowHeight - viewportHeight;

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
        :placeholder="inputNumberPlaceholder"
        class="number-input-main"
        @focus="focusNumber"
        @blur="blurNumber"
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
    <div class="flex flex-col w-full py-4">
      <div class="flex items-center justify-between border-b-[1px] border-[#ffffff62] pb-4 mb-4">
        <span>{{ 'Ваши категории' }}</span>
        <n-button
          :color="'#0064B0'"
          :text-color="'#FFFFFF'"
          class="h-[20px]"
          :style="`
            opacity: 1 !important;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 400;
            background: #0064B0 !important;
          `"
          @click="showAddCategory = true"
        >
          <span>{{ 'добавить' }}</span>
        </n-button>
      </div>
      <div class="flex flex-wrap gap-4">
        <CategoryItem
          ref="categoryItemRef"
          v-for="(item, index) in userCategoriesGetters"
          :key="index"
          :item="item"
          class="w-[calc(50%-8px)]"
          :class="selectedId === item.id ? 'bg-[#006769]' : 'bg-[#405D72]'"
          @click="selectCategory(item.id)"
        />
      </div>
    </div>
    <div v-if="!showAddCategory" class="flex justify-center absolute bottom-8 left-0 w-full animated-btn" :style="`
      bottom: ${keyboardHeight}px
    `">
      <n-button
        ref="addPriceBtn"
        :color="'#0064B0'"
        :text-color="'#FFFFFF'"
        class="h-[54px] max-w-[340px] w-full mx-auto"
        :disabled="!selectedId"
        :style="`
          opacity: 1 !important;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 500;
          background: #0064B0 !important;
        `"
        @click="addPrice"
      >
        <span>{{ 'Внести' }}</span>
      </n-button>
    </div>
    <n-drawer v-model:show="showSelectSymbol" :width="380" to=".main-container" :placement="'right'" :content-class="'bg-[#1E5F74]'">
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
    <n-drawer v-model:show="showAddCategory" :width="380" to=".main-container" :placement="'top'" :content-class="'bg-[#1E5F74]'">
      <n-drawer-content>
        <div class="flex flex-col">
          <span class="text-[#eeeeee] mb-2">{{ 'Добавить новую категорию' }}</span>
          <n-input
            v-model:value="valueTitleCategory"
            type="text"
            placeholder=""
            class="mb-4"
          />
          <n-button
            :color="'#0064B0'"
            :text-color="'#FFFFFF'"
            class="h-[54px]"
            :style="`
              opacity: 1 !important;
              border-radius: 16px;
              font-size: 16px;
              font-weight: 400;
              background: #0064B0 !important;
            `"
            @click="addCategory"
          >
            <span>{{ 'Добавить' }}</span>
          </n-button>
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
.animated-btn {
  transition: all 0.2s ease-in-out;
}
</style>
