<script setup lang="ts">
import Index from '@/views/Index.vue'
</script>

<template>
  <n-config-provider abstract>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <Index class="grow" />
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
