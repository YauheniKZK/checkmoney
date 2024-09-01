<script setup lang="ts">
const versionApp = import.meta.env.PACKAGE_VERSION
</script>

<template>
  <div class="flex grow flex-col w-full main-container">
    <router-view class="h-[100vh]" />
    <span class="fixed bottom-4 right-4">{{ versionApp }}</span>
  </div>
</template>

<style scoped>
</style>
