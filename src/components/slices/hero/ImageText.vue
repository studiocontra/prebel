<template>
  <div class="hero hero--services">
    <Drop
      maxW="300px"
      :parallax="-12" />
    <div class="container">
      <div class="row align-center justify-between">
        <div :class="textCols">
          <h1>
            <prismic-rich-text
              :field="content"
              class="title" />
          </h1>
        </div>
        <div :class="imgCols">
          <div class="hero__image" :class="[imgStyleClass, imgSizeClass]">
            <prismic-image :field="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  content: Object,
  image: Object,
  imageStyle: String,
  imageSize: String,
});

const imgStyleClass = computed(() => `hero__image--${props.imageStyle}`);
const imgSizeClass = computed(() => `hero__image--${props.imageSize}`);

const textCols = computed(() => {
  const cols = {
    'small': 'col-lg-6',
    'large': 'col-lg-5'
  };

  return cols[props.imageSize];
});

const imgCols = computed(() => {
  const cols = {
    'small': 'col-md-10 col-lg-5',
    'large': 'col-lg-7'
  };

  return cols[props.imageSize];
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/services/hero";
</style>