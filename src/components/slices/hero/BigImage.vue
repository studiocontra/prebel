<template>
  <div class="hero hero--big-image">
    <div class="container">
      <div class="hero__content">
        <h1 class="title title--lg">
          {{ headline }}
        </h1>
        <PrismicRichText
          :field="content"
          class="text" />
      </div>

      <div class="hero__img">
        <Drop
          class="drop--1"
          maxW="200px"
          :parallax="-5" />
        <prismic-image :field="mainImage"/>
        <Drop
          class="drop--2"
          maxW="200px"
          :parallax="8" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  content: Object,
  mainImage: {
    type: [Object, Boolean],
    default: null,
  }
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/hero/base";
  @import "@scss/components/slices/hero/big-image";
</style>