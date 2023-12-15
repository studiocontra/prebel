<template>
  <div class="section text-images-shape">
    <Drop
      :class="dropClass"
      :maxW="(variation == 'default') ? '290px' : '150px'"
      :parallax="3" />

    <div class="container">
      <div class="row align-center justify-between" :class="orientation">
        <div class="col-md-6 col-lg-5">
          <div class="content">
            <span
              v-if="data.eyebrow"
              class="eyebrow">
              {{ data.eyebrow }}
            </span>

            <h2
              v-if="data.headline"
              class="title">
              {{ data.headline }}
            </h2>

            <prismic-rich-text
              :field="data.content"
              class="text" />
          </div>
        </div>
        <div class="col-md-5">
          <div
            class="images"
            :class="{
              'images--double': variation == 'default',
              'images--circle': variation == 'circleImage',
              'images--square': variation == 'squareImage',
            }">
            <div class="img img--1" :class="imageShapeClass">
              <prismic-image :field="data.image_1" />
            </div>
            <div
              v-if="variation == 'default' && data.image_2"
              class="img img--square img--2">
              <prismic-image :field="data.image_2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: [Object, Boolean],
  variation: String
});

const orientation = computed(() => {
  return props.data.orientation === 'right' && 'md-reverse';
});


const dropClass = computed(() => {
  const obj = {
    'default': 'l',
    'circleImage': 'drop--circle',
    'squareImage': 'drop--square'
  };

  return obj[props.variation];
});

const imageShapeClass = computed(() => {
  const obj = {
    'default': 'img--pill',
    'circleImage': 'img--circle',
    'squareImage': 'img--square'
  };

  return obj[props.variation];
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-images-shape";
</style>