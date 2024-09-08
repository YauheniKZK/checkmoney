<script setup lang="ts">
import { SmartHome, Settings } from '@vicons/tabler'
import { BookInformation20Regular } from '@vicons/fluent'
</script>

<template>
  <div class="flex flex-col item-footer gap-2">
    <div class="flex justify-between items-center grow">
      <n-button text>
        <n-icon :size="24" :color="'#eeeeee'">
          <BookInformation20Regular />
        </n-icon>
      </n-button>
      <n-button text>
        <n-icon :size="30" :color="'#eeeeee'">
          <SmartHome />
        </n-icon>
      </n-button>
      <n-button text>
        <n-icon :size="24" :color="'#eeeeee'">
          <Settings />
        </n-icon>
      </n-button>
    </div>
  </div>
</template>

<style scoped>
.item-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #080808;
  padding: 16px 16px 38px 16px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>
