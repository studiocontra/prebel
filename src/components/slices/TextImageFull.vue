<template>
  <div class="section wrap-text-image-full">
    <div class="container">
      <div class="text-image-full__content">
        <div class="row">
          <div class="col-lg-6">
            <span
              v-if="eyebrow"
              class="eyebrow">
              {{ eyebrow }}
            </span>

            <h2
              v-if="headline"
              class="title">
              {{ headline }}
            </h2>
          </div>

          <div class="col-lg-6">
            <div class="content">
              <PrismicRichText
                :field="content"
                class="text" />
            </div>
          </div>
        </div>
      </div>
      <div class="img" :class="imageFit">
        <prismic-image :field="image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  eyebrow: String,
  headline: String,
  image: Object,
  imageFit: String
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-image-full";
</style>