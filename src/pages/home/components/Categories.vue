<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { iconsFree } from '@/untils/data'
import { getImageUrl } from '@/untils/images'
import CategoryItem from './CategoryItem.vue'
import CheckIcon from '@/assets/icons/components/CheckIcon.vue'
import WebApp from '@twa-dev/sdk'

const appStore = useAppStore()

const { userCategoriesGetters, selectedIdGetters } = storeToRefs(appStore)
const { actionAddUserCategory, setSelectedId } = appStore

const showAddCategory = ref(false)
const valueTitleCategory = ref('')
const selectedIcon = ref<any>(null)

const selectCategory = (id: number) => {
  setSelectedId(id)
}

const addCategory = () => {
  console.log('userCategoriesGetters.value.length', userCategoriesGetters.value)
  actionAddUserCategory({
    title: valueTitleCategory.value,
    value: 0,
    id: userCategoriesGetters.value.length + 1,
    icon: selectedIcon.value
  })

  showAddCategory.value = false
  valueTitleCategory.value = ''
}

const selectIcon = (icon: any) => {
  selectedIcon.value = icon
}

const closeDrawer = () => {
  valueTitleCategory.value = ''
  selectedIcon.value = null
}

</script>

<template>
  <div class="flex flex-col w-full py-4">
    <div class="flex items-center justify-between border-b-[1px] border-[#ffffff62] pb-2 mb-4">
      <span class="text-[#868686]">{{ 'Ваши категории ' + `(${userCategoriesGetters.length})` }}</span>
      <n-button
        v-if="userCategoriesGetters.length > 0"
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
    <div class="flex flex-col gap-4">
      <div v-if="userCategoriesGetters.length === 0" class="flex flex-col justify-center items-center min-h-[140px] w-full">
        <n-button
          :color="'#cecece'"
          :text-color="'#1a1a1a'"
          class="h-[52px]"
          :style="`
            opacity: 1 !important;
            border-radius: 16px;
            font-size: 16px;
            font-weight: 500;
            background: #cecece !important;
          `"
          @click="showAddCategory = true"
        >
          <span>{{ 'Новая категория' }}</span>
        </n-button>
      </div>
      <template v-else>
        <n-scrollbar :style="`max-height: ${WebApp.viewportStableHeight - 350}px`">
          <div class="flex flex-wrap gap-4 block-categories">
            <CategoryItem
              ref="categoryItemRef"
              v-for="(item, index) in userCategoriesGetters"
              :key="index"
              :item="item"
              class="w-[calc(50%-8px)]"
              :class="selectedIdGetters === item.id ? 'bg-[#6d6c6c]' : 'bg-[#373737]'"
              @click="selectCategory(item.id)"
            />
          </div>
        </n-scrollbar>
      </template>
    </div>
    <n-drawer
      v-model:show="showAddCategory"
      :resizable="true"
      :width="380"
      :height="'70%'"
      to=".main-container"
      :placement="'top'"
      :content-class="'bg-[#2c2c2c]'"
      @after-leave="closeDrawer"
    >
      <n-drawer-content>
        <div class="flex flex-col">
          <span class="text-[#eeeeee] mb-2">{{ 'Введите название категории *' }}</span>
          <n-input
            v-model:value="valueTitleCategory"
            type="text"
            placeholder=""
            class="mb-4"
          />
          <div class="flex flex-col w-full mb-6">
            <span class="text-[#eeeeee] mb-2">{{ 'Выберете иконку *' }}</span>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="icon in iconsFree"
                :key="icon.key"
                class="flex justify-center items-center w-[calc(25%-8px)] p-2 rounded-[16px] relative"
                :class="{
                  'bg-[#373737]': icon.key !== selectedIcon?.key,
                  'bg-[#6d6c6c]': icon.key === selectedIcon?.key
                }"
                style="box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
                @click="selectIcon(icon)"
              >
                <n-icon
                  v-if="icon.key === selectedIcon?.key"
                  :size="24"
                  class="absolute left-[16px] -top-[4px]"
                >
                  <CheckIcon :color="'#d6ff63'" />
                </n-icon>
                <img
                  :src="getImageUrl(`icons-categories/${icon.title}.svg`)"
                  class="object-contain max-w-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <n-button
            v-if="selectedIcon && valueTitleCategory !== ''"
            :color="'#cecece'"
            :text-color="'#1a1a1a'"
            class="h-[52px]"
            :style="`
              opacity: 1 !important;
              border-radius: 16px;
              font-size: 16px;
              font-weight: 400;
              background: #cecece !important;
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

.block-categories {
  position: relative;
}

.block-categories::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 1;
  background: linear-gradient(180deg, rgba(36,36,36,0) 0%, rgba(36,36,36,1) 100%);
}
</style>
