<template>
  <div class="section home__images">
    <div class="container">
      <div
        v-if="variation == 'withText' && hasText"
        class="images-grid__headline">
        <div class="row justify-between">
          <div class="col-md-5 col-lg-4">
            <span
              v-if="data.eyebrow"
              class="eyebrow"
              role="headling">
              {{ data.eyebrow }}
            </span>

            <h3
              v-if="data.headline"
              class="title">
              {{ data.headline }}
            </h3>
          </div>

          <div class="col-md-5 col-lg-4 col-xx-3">
            <span
              v-if="data.eyebrow_content"
              class="eyebrow"
              role="headling">
              {{ data.eyebrow_content }}
            </span>

            <prismic-rich-text
              :field="data.content"
              class="text" />
          </div>
        </div>
      </div>

      <div class="images">
        <div
          v-if="data.image_1"
          class="img img--square">
          <prismic-image :field="data.image_1" />
        </div>

        <div
          v-if="data.image_2"
          class="img img--pill">
          <prismic-image :field="data.image_2" />
        </div>

        <div class="shape shape--1"></div>

        <div class="shape shape--2"></div>

        <div
          v-if="data.image_3"
          class="img img--rectangle">
          <prismic-image :field="data.image_3" />
        </div>

        <Drop
          class="drop--1"
          maxW="270px"
          :parallax="5" />

        <Drop
          class="drop--2"
          maxW="150px"
          :parallax="-2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variation: String,
  data: [Object, Boolean]
});

const hasText = computed(() => {
  return props.data.headline && props.data.content;
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/home/images";
</style>