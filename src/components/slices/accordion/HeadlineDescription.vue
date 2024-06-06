<template>
  <div class="section accordion--headline-desc">
    <div class="container">
      <div class="row justify-between">
        <div class="col-lg-5">
          <span class="eyebrow">
            {{ headline }}
          </span>

          <PrismicRichText
            :field="description"
            class="title" />

          <prismic-image :field="image" class="img" />
        </div>
        <div class="col-lg-6">
          <div class="accordion--headline-desc__content">
            <template v-for="(item, idx) in items" :key="idx">
              <div
                class="accordion-item"
                :class="{'closed': activeAccordion !== idx}"
                :data-idx="idx">
                <div
                  class="accordion-item__headline"
                  @click="toggleAccordionItem(idx)">
                  <h3 class="title">
                    <span>
                      {{ pad(idx + 1) }}
                    </span>

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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  data: Object,
  headline: String,
  description: Object,
  image: [Object, Boolean],
  items: [Array, Boolean]
});

const activeAccordion = ref(null);

function toggleAccordionItem(idx) {
  if(activeAccordion.value === idx) return activeAccordion.value = null;

  activeAccordion.value = idx;

  const contentWrapper = document.querySelector(`.accordion-item[data-idx="${idx}"] .accordion-item__content`);
  const contentHeight = contentWrapper.scrollHeight;

  contentWrapper.style.maxHeight = `${contentHeight}px`;
};

// onMounted(() => {
//   toggleAccordionItem(0)
// });

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
}

</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/accordion/headline-description";
</style>