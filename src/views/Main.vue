<script setup lang="ts">
import FooterPage from '@/components/FooterPage.vue';
const versionApp = import.meta.env.PACKAGE_VERSION
</script>

<template>
  <div class="flex grow flex-col w-full main-container">
    <router-view class="grow" />
    <FooterPage />
    <span class="fixed bottom-[80px] right-4">{{ versionApp }}</span>
  </div>
</template>

<style scoped>
</style>
