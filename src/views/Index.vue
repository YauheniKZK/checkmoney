<script setup lang="ts">
</script>

<template>
<div class="flex flex-col grow max-w-[600px] w-full h-full mx-auto">
    <router-view v-slot="{ Component }" class="h-[100vh]">
      <transition name="slide-left">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
