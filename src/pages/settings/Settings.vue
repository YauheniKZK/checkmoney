<script setup lang="ts">
import { Settings28Regular } from '@vicons/fluent'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { currentCurrencySymbolGetters, selectedIdGetters } = storeToRefs(appStore)
const { setCurrentCurrencySymbol, actionValuePriceCategory } = appStore
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <div class="flex flex-col justify-center items-center">
      <n-icon :size="78" :color="'#eeeeee'" class="mb-4">
        <Settings28Regular />
      </n-icon>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <n-button text :text-color="'#d2d2d2'" class="mr-1" @click="false">
            <span class="underline">{{ 'Выбрать ' }}</span>
          </n-button>
          <span class="text-[#d2d2d2]">{{ ' денежный знак' }}</span>
        </div>

        <n-ellipsis style="max-width: 100px">
          {{ currentCurrencySymbolGetters?.symbol_native || '--' }}
        </n-ellipsis>
      </div>
      <div class="w-full h-[1px] bg-[#ffffff63] my-4"></div>
    </div>
  </div>
</template>

<style scoped>
</style>
