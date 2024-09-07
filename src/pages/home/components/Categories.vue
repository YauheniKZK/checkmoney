<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { userCategoriesGetters } = storeToRefs(appStore)
const { setCurrentCurrencySymbol, actionAddUserCategory, actionValuePriceCategory } = appStore

const showAddCategory = ref(false)
const selectedId = ref<any>(null)
  const valueTitleCategory = ref('')

const selectCategory = (id: number) => {
  selectedId.value = id
}

const addCategory = () => {
  console.log('userCategoriesGetters.value.length', userCategoriesGetters.value)
  actionAddUserCategory({
    title: valueTitleCategory.value,
    value: 0,
    id: userCategoriesGetters.value.length + 1
  })

  showAddCategory.value = false
  valueTitleCategory.value = ''
}

</script>

<template>
  <div class="flex flex-col w-full py-4">
    <div class="flex items-center justify-between border-b-[1px] border-[#ffffff62] pb-2 mb-4">
      <span class="text-[#868686]">{{ 'Ваши категории' }}</span>
      <n-button
        :color="'#939393'"
        :text-color="'#1a1a1a'"
        class="h-[20px]"
        :style="`
          opacity: 1 !important;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 400;
          background: #939393 !important;
        `"
        @click="showAddCategory = true"
      >
        <span>{{ 'добавить' }}</span>
      </n-button>
    </div>
    <div class="flex flex-wrap gap-4">
      <CategoryItem
        ref="categoryItemRef"
        v-for="(item, index) in userCategoriesGetters"
        :key="index"
        :item="item"
        class="w-[calc(50%-8px)]"
        :class="selectedId === item.id ? 'bg-[#006769]' : 'bg-[#405D72]'"
        @click="selectCategory(item.id)"
      />
    </div>
    <n-drawer v-model:show="showAddCategory" :width="380" to=".main-container" :placement="'top'" :content-class="'bg-[#1E5F74]'">
      <n-drawer-content>
        <div class="flex flex-col">
          <span class="text-[#eeeeee] mb-2">{{ 'Добавить новую категорию' }}</span>
          <n-input
            v-model:value="valueTitleCategory"
            type="text"
            placeholder=""
            class="mb-4"
          />
          <n-button
            :color="'#0064B0'"
            :text-color="'#FFFFFF'"
            class="h-[54px]"
            :style="`
              opacity: 1 !important;
              border-radius: 16px;
              font-size: 16px;
              font-weight: 400;
              background: #0064B0 !important;
            `"
            @click="addCategory"
          >
            <span>{{ 'Добавить' }}</span>
          </n-button>
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
.animated-btn {
  transition: all 0.2s ease-in-out;
}
</style>
