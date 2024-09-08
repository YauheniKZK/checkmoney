<script setup lang="ts">
import { MoneyCalculator20Regular } from '@vicons/fluent'
</script>

<template>
  <div class="flex flex-col w-full grow">
    <div class="flex flex-col justify-center items-center grow">
      <n-icon :size="128" :color="'#eeeeee'" class="mb-4">
        <MoneyCalculator20Regular />
      </n-icon>
      <span class="text-[#eeeeee]">{{'Скоро...'}}</span>
    </div>
  </div>
</template>

<style scoped>
</style>
