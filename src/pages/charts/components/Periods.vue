<script setup lang="ts">
import { computed } from 'vue'
import moment from 'moment'

const currentWeek = computed(() => {
  const startOfWeek = moment().startOf('isoWeek').format('DD MMM')
  const endOfWeek = moment().endOf('isoWeek').format('DD MMM')
  return startOfWeek + ' - ' + endOfWeek + ', ' + moment().endOf('isoWeek').format('yyyy')
})

const currentMonth = computed(() => {
  const startOfMonth = moment().startOf('month').format('DD MMM')
  const endOfMonth = moment().endOf('month').format('DD MMM')
  return startOfMonth + ' - ' + endOfMonth + ', ' + moment().endOf('isoWeek').format('yyyy')
})
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div class="flex flex-col items-center item-period gap-2">
      <span class="text-[14px] text-[#868686]">{{ 'За день' }}</span>
      <span class="text-[22px]">{{ '0' }}</span>
      <span class="text-[14px] text-[#868686]">{{ moment().format('DD, MMM yyyy') }}</span>
    </div>
    <div class="flex flex-col items-center item-period gap-2">
      <span class="text-[14px] text-[#868686]">{{ 'За неделю' }}</span>
      <span class="text-[22px]">{{ '0' }}</span>
      <span class="text-[14px] text-[#868686]">{{ currentWeek }}</span>
    </div>
    <div class="flex flex-col items-center item-period gap-2">
      <span class="text-[14px] text-[#868686]">{{ 'За месяц' }}</span>
      <span class="text-[22px]">{{ '0' }}</span>
      <span class="text-[14px] text-[#868686]">{{ currentMonth }}</span>
    </div>
    <div class="flex flex-col items-center justify-center item-period gap-2">
      <span class="text-[14px] text-[#868686]">{{ 'Настроить дату' }}</span>
    </div>
  </div>
</template>

<style scoped>
.item-period {
  position: relative;
  padding: 16px;
  border-radius: 16px;
  background: #2c2c2c;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: calc(50% - 8px);
  text-align: center;
}
</style>
