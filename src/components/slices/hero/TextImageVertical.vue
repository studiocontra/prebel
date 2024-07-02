<template>
  <div class="hero" :class="bgColor">
    <div class="container">
      <div class="hero-content">
        <h1>
          <PrismicRichText :field="content" class="title" />
        </h1>
        <picture class="hero-picture">
          <Drop maxW="230px" :parallax="-12" />
          <prismic-image :field="image" />
          <Drop maxW="230px" :parallax="12" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  image: Object,
  bgColor: String,
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/hero/text-image-vertical.scss";
</style>