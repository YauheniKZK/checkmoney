<script setup lang="ts">
import { getImageUrl } from '@/untils/images'
import { DotsVertical } from '@vicons/tabler'
const props = defineProps({
  item: Object
})
</script>

<template>
  <div class="flex flex-col item-category gap-2">
    <div class="flex mb-2">
      <img :src="getImageUrl(`icons-categories/${props?.item?.icon?.title}.svg`)" class="max-w-[60px] w-[60px] object-contain" alt="" />
    </div>
    <div class="flex flex-col grow">
      <span class="tag">{{ (props?.item?.value || 0) + '$' }}</span>
      <span class="text-[16px] font-[500] mb-2 text-[#eeeeee]">{{ props?.item?.title || '' }}</span>
    </div>
    <n-popover
      raw
      trigger="click"
      placement="right-start"
      style="border-radius: 16px"
      :show-arrow="false"
    >
      <template #trigger>
        <n-button text class="absolute right-[8px] top-[8px]" @click.stop>
          <n-icon :size="22" :color="'#eeeeee'">
            <DotsVertical />
          </n-icon>
        </n-button>
      </template>
      <div
        class="flex flex-col items-start p-[10px] bg-[#26282b] min-w-[160px]"
        style="border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 8px"
      >
        <n-button
          text
          :text-color="'#eeeeee'"
          class="h-[30px] w-[100%] flex justify-start"
          style="font-size: 16px; font-weight: 400; text-align: left"
          @click="false"
        >
          <span>{{ 'Редактировать' }}</span>
        </n-button>
        <n-button
          text
          :text-color="'#eeeeee'"
          class="h-[30px] w-[100%] flex justify-start"
          style="font-size: 16px; font-weight: 400; text-align: left"
          @click="false"
        >
          <span>{{ 'Удалить' }}</span>
        </n-button>
      </div>
    </n-popover>
  </div>
</template>

<style scoped>
.item-category {
  position: relative;
  padding: 8px 16px 8px 8px;
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
