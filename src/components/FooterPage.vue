<script setup lang="ts">
import { SmartHome, Settings, ChartPie } from '@vicons/tabler'
import WebApp from '@twa-dev/sdk'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigation = (type: 'charts' | 'home' | 'settings') => {
  WebApp.HapticFeedback.impactOccurred('medium')
  router.push({ name: type })
}
</script>

<template>
  <div class="flex flex-col item-footer gap-2 px-6">
    <div class="flex justify-between items-center grow">
      <n-button text @click="navigation('charts')">
        <n-icon :size="24" :color="'#eeeeee'">
          <ChartPie />
        </n-icon>
      </n-button>
      <n-button text @click="navigation('home')">
        <n-icon :size="30" :color="'#eeeeee'">
          <SmartHome />
        </n-icon>
      </n-button>
      <n-button text @click="navigation('settings')">
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
  width: calc(100% - 16px);
  bottom: 16px;
  left: 8px;
  background: #123539;
  padding: 16px 16px 16px 16px;
  z-index: 2;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
}
</style>
