<template>
  <div class="section logos-carousel">
    <div class="container">
      <div class="logos-carousel__headline">
        <h3 class="eyebrow">
          {{ headline }}
        </h3>
      </div>

      <div class="wrap-marquee">
        <div class="marquee__content">
          <template v-for="(logo, id) in items" :key="id">
            <prismic-image :field="logo.logo" class="single-logo" />
          </template>
          <template v-for="(logo, id) in items" :key="id">
            <prismic-image :field="logo.logo" class="single-logo" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataSliceVariation: String,
  headline: String,
  items: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/logos-carousel";
</style>