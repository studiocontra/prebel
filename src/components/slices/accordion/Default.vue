<template>
  <div class="section services__accordion" :id="props.id">
    <div class="container">
      <div class="accordion-group">
        <span class="eyebrow">
          {{ headline }}
        </span>

        <div class="services-accordion__content">
          <template v-for="(item, idx) in items" :key="idx">
            <div
              class="accordion-item"
              :class="{'closed': activeAccordion !== idx}"
              :data-item="idx">
              <div
                class="accordion-item__headline"
                @click="toggleAccordionItem(props.id, idx)">
                <h3 class="title">
                  {{ item.name }}
                </h3>

                <div class="icon">
                  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path v-if="activeAccordion !== idx" d="M25 1V49" stroke-width="2" stroke-linecap="round"/>
                    <path d="M49 25L1 25" stroke-width="2" stroke-linecap="round"/>
                  </svg>

                </div>
              </div>

              <div class="accordion-item__content">
                <PrismicRichText
                  :field="item.content"
                  class="text" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  id: String,
  headline: String,
  items: [Array, Boolean],
});

const activeAccordion = ref(null);

function toggleAccordionItem(sectionId, itemId) {
  if(activeAccordion.value === itemId) {
    activeAccordion.value = null;
    return true;
  }

  activeAccordion.value = itemId;

  const parentItem = document.getElementById(props.id);
  const contentWrapper = parentItem.querySelector(`.accordion-item[data-item="${itemId}"] .accordion-item__content`);
  const contentHeight = contentWrapper.scrollHeight;

  contentWrapper.style.maxHeight = `${contentHeight}px`;
}

onMounted(() => {
  toggleAccordionItem(props.id, 0)
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/services/accordion";
</style>