<template>
  <div class="section items-image">
    <div class="container">

      <div class="row align-center">
        <div class="col-md-7 col-lg-6">
          <div class="items-image__items">
            <div class="line"></div>

            <template v-for="(item, idx) in items" :key="idx">
              <div
                class="tabs-item"
                :class="{'tabs-item--active': activeItem === idx}"
                @click="setActiveItem(idx)">
                <prismic-image v-if="item.icon" :field="item.icon" class="icon" />

                <h3 v-if="item.headline" class="title title--xs">
                  {{ item.headline }}
                </h3>

                <PrismicRichText
                  :field="item.content"
                  class="text" />
              </div>
            </template>
          </div>
        </div>

        <div class="col-md-5 col-lg-6">
          <div class="items-image__image">
            <Drop
              class="drop--1"
              maxW="100px"
              :parallax="-5" />

            <div class="img">
              <prismic-image :field="image" />
            </div>


            <Drop
              class="drop--2"
              maxW="180px"
              :parallax="8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  image: Object,
  items: [Array, Boolean],
});

const activeItem = ref(null);

function setActiveItem(itemId) {
  activeItem.value = itemId
}

onMounted(() => {
  setActiveItem(0)
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/items-image";
</style>
