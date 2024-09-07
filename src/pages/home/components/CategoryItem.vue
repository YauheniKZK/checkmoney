<script setup lang="ts">
import { getImageUrl } from '@/untils/images'
const props = defineProps({
  item: Object
})
</script>

<template>
  <div class="flex item-category gap-2">
    <div class="flex flex-col grow">
      <span class="text-[16px] font-semibold mb-2 text-[#eeeeee]">{{ props?.item?.title || '' }}</span>
      <span class="tag">{{ (props?.item?.value || 0) + '$' }}</span>
    </div>
    <div class="flex">
      <img :src="getImageUrl(`icons-categories/${props?.item?.icon?.title}.svg`)" class="max-w-[60px] w-full object-contain" alt="" />
    </div>
  </div>
</template>

<style scoped>
.item-category {
  padding: 8px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.tag {
  padding: 2px 8px;
  border-radius: 8px;
  background: #344C64;
  color: #eeeeee;
  align-self: baseline;
}
</style>
