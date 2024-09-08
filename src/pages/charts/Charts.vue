<script setup lang="ts">
import Periods from './components/Periods.vue'
import History from './components/History.vue'
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <span class="max-w-[85%] mb-4">{{ 'Выберете период, или настройте дату по своему усмотрению' }}</span>
    <Periods class="mb-6" />
    <History />
  </div>
</template>

<style scoped>
</style>
