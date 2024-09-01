<script setup lang="ts">
import { ref } from 'vue'
import { currencySymbols } from '@/untils/data'

console.log('currencyToSymbolMap', currencySymbols)

const value = ref(0)

const validatorInputNumber = (x: number) => x >= 0

</script>

<template>
  <div class="flex grow flex-col w-full p-4">
    <div class="flex justify-center mb-6">
      <span class="text-5xl pacifico-font">{{ 'Расходы' }}</span>
    </div>
    <div class="flex w-full justify-center">
      <n-input-number
        :value="value"
        :show-button="false"
        :validator="validatorInputNumber"
        :input-props="{
          inputmode: 'decimal',
          pattern: '[0-9]*[.]?[0-9]*'
        }"
        placeholder=""
        class="number-input-main"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
