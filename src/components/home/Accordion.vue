<template>
  <div class="section home__accordion">
    <div class="container">
      <div class="row justify-between">
        <div class="col-lg-5">
          <span class="eyebrow">
            Key facts
          </span>

          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit, dolore esse, alias odit sed optio quod at quaerat sint veniam quae laboriosam ducimus aliquam in officiis recusandae quos facilis molestiae, fugiat iusto quis iure sunt. Eaque voluptate pariatur culpa officia, aperiam nemo iste excepturi quia dicta odit libero? Recusandae nemo quod eius culpa ullam debitis dolorem placeat nobis repellat saepe expedita ad, quae corrupti delectus, illo quos dignissimos ipsa quas minima reprehenderit. Maiores qui fugiat porro recusandae reprehenderit enim blanditiis rem quia reiciendis quibusdam sed doloribus voluptatibus, laborum iste quaerat iusto. Quia fugiat assumenda voluptate alias voluptates nemo nostrum!
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="home-accordion__content">
            <template v-for="(item, idx) in 4" :key="idx">
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

                    Trayectoria
                  </h3>

                  <div class="icon">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path v-if="activeAccordion !== idx" d="M25 1V49" stroke="#EDEBE3" stroke-width="2" stroke-linecap="round"/>
                      <path d="M49 25L1 25" stroke="#EDEBE3" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                  </div>
                </div>

                <div class="accordion-item__content">
                  <div class="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis dolores, impedit obcaecati neque nostrum ducimus quia eos eveniet, ex laboriosam voluptates aliquid accusamus reprehenderit maxime praesentium cupiditate voluptas consequuntur.
                  </div>
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

const activeAccordion = ref(null);

function toggleAccordionItem(idx) {
  if(activeAccordion.value === idx) return activeAccordion.value = null;

  activeAccordion.value = idx;

  const contentWrapper = document.querySelector(`.accordion-item[data-idx="${idx}"] .accordion-item__content`);
  const contentHeight = contentWrapper.scrollHeight;

  contentWrapper.style.maxHeight = `${contentHeight}px`;
};

onMounted(() => {
  toggleAccordionItem(0)
});

function pad(num) {
  var s = "000" + num;
  return s.substr(s.length - 2);
}

</script>

<style lang="scss" scoped>
  @import "@scss/components/home/accordion";
</style>