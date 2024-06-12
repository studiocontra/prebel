<template>
  <div class="hero hero--text-cta">
    <Drop
      maxW="200px"
      :parallax="-5" />

    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-10 col-xl-8 col-xx-6">
          <h1
            v-if="headline"
            class="title title--lg">
            {{ headline }}
          </h1>

          <PrismicRichText
            :field="content"
            class="text" />

          <Button :href="buttonLink || '#'" theme="dark">
            {{ buttonLabel }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  buttonLabel: String,
  buttonLink: Object,
  content: Object,
  headline: String
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/hero/base";
  @import "@scss/components/slices/hero/text-cta";
</style>