<template>
  <div class="section services__accordion">
    <div class="container">
      <div
        v-for="(item, id) in 2"
        class="accordion-group"
        :key="id"
        :data-group="id">
        <span class="eyebrow">
          tipos de Servicios 0{{id +  1}}
        </span>

        <div class="services-accordion__content">
          <template v-for="(item, idx) in 3" :key="idx">
            <div
              class="accordion-item"
              :class="{'closed': activeGroup !== id || activeAccordion !== idx}"
              :data-item="idx">
              <div
                class="accordion-item__headline"
                @click="toggleAccordionItem(id, idx)">
                <h3 class="title">
                  Distribution
                </h3>

                <div class="icon">
                  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path v-if="activeGroup !== id || activeAccordion !== idx" d="M25 1V49" stroke-width="2" stroke-linecap="round"/>
                    <path d="M49 25L1 25" stroke-width="2" stroke-linecap="round"/>
                  </svg>

                </div>
              </div>

              <div class="accordion-item__content">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis dolores, impedit obcaecati neque nostrum ducimus quia eos eveniet, ex laboriosam voluptates aliquid accusamus reprehenderit maxime praesentium cupiditate voluptas consequuntur.
                  </p>
                </div>
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

const activeGroup = ref(null);
const activeAccordion = ref(null);

function toggleAccordionItem(accordion, idx) {
  if(activeGroup.value === accordion && activeAccordion.value === idx) {
    activeGroup.value = null;
    activeAccordion.value = null;
    return true;
  }

  activeGroup.value = accordion;
  activeAccordion.value = idx;

  const contentWrapper = document.querySelector(`.accordion-group[data-group="${accordion}"] .accordion-item[data-item="${idx}"] .accordion-item__content`);
  const contentHeight = contentWrapper.scrollHeight;

  contentWrapper.style.maxHeight = `${contentHeight}px`;
}

onMounted(() => {
  toggleAccordionItem(0, 0)
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/services/accordion";
</style>