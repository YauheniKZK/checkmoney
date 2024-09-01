<script setup lang="ts">
import { getImageUrl } from '@/untils/images'
const props = defineProps({
  item: Object
})
</script>

<template>
  <div class="flex item-category gap-2">
    <div class="flex flex-col grow">
      <span class="text-[16px] font-semibold mb-2">{{ props?.item?.title || '' }}</span>
      <span class="tag">{{ (props?.item?.value || 0) + '$' }}</span>
    </div>
    <div class="flex">
      <img :src="getImageUrl('images/icon1.png')" class="max-w-[60px] object-contain" alt="" />
    </div>
  </div>
</template>

<style scoped>
.item-category {
  padding: 16px;
  background: #405D72;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}
.tag {
  padding: 2px 8px;
  border-radius: 8px;
  background: #344C64;
  align-self: baseline;
}
</style>
