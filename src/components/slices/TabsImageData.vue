<template>
  <div class="section tabs-image-data">
    <div class="container">
      <div class="tabs__headline">
        <span v-if="eyebrow" class="eyebrow">
          {{ eyebrow }}
        </span>
        <h2 v-if="headline" class="title">
          {{ headline }}
        </h2>

        <PrismicRichText
          v-if="introduction"
          :field="introduction"
          class="text"
        />
      </div>

      <div class="tabs__image">
        <template v-for="(item, idx) in items" :key="idx">
          <transition>
            <prismic-image v-if="activeItem === idx" :field="item.image" />
          </transition>
        </template>
      </div>

      <div class="tabs__content">
        <div class="line"></div>

        <div class="items">
          <template v-for="(item, idx) in items" :key="idx">
            <div
              class="tabs-item"
              :class="{ 'tabs-item--active': activeItem === idx }"
              @click="setActiveItem(idx)"
            >
              <div class="line"></div>

              <h3 class="title title--xs">
                {{ item.headline }}
              </h3>

              <PrismicRichText :field="item.content" class="text" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  eyebrow: String,
  headline: String,
  introduction: Object,
  items: [Array, Boolean],
});

const activeItem = ref(null);

function setActiveItem(itemId) {
  activeItem.value = itemId;
}

onMounted(() => {
  setActiveItem(0);
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/tabs-image-data";
</style>
