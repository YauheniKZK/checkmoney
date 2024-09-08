<script setup lang="ts">
import { computed } from 'vue'
import moment from 'moment'
import { fakeHistory } from '@/untils/data';

</script>

<template>
  <div class="flex w-full flex-col">
    <span class="text-[16px] mb-4 text-center">{{ 'История' }}</span>
    <div class="flex flex-col w-full">
      <div
        v-for="item in fakeHistory"
        :key="item.key"
        class="flex flex-col w-full"
      >
        <div class="flex items-center bg-[#65ae75] p-2 mb-4 rounded-[8px]">
          <span>{{ moment(item.day).format('DD MMM, yyyy') }}</span>
        </div>
        <div class="flex flex-col w-full">
          <div
            v-for="i in item.items"
            :key="i.key"
            class="flex items-center justify-between p-2"
          >
            <div class="flex flex-col">
              <span>{{ i.category }}</span>
              <span class="text-[#868686]">{{ moment(i.time).format('HH:mm') }}</span>
            </div>
            <div class="flex items-center">
              <span>{{ i.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
