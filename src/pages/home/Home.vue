<script setup lang="ts">
import { ref } from 'vue'
import Expenses from './components/Expenses.vue'
import Income from './components/Income.vue'


// ----------------

const currentTab = ref('expenses')

const updateTabs = (value: string) => {
  currentTab.value = value
}

// ----------------

</script>

<template>
  <div class="flex flex-col w-full pt-4">
    <n-tabs
      type="segment"
      :value="currentTab"
      animated
      class="tab-custom-main"
      @update:value="updateTabs"
    >
      <n-tab-pane name="expenses" :tab="'Расходы'">
        <Expenses />
      </n-tab-pane>
      <n-tab-pane name="income" :tab="'Доходы'">
        <Income />
      </n-tab-pane>
    </n-tabs>
  </div>
  
</template>

<style scoped>
</style>
