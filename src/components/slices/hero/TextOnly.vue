<template>
  <div class="hero hero--text-only" :class="{'hero--small': size === 'small'}">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-10">
          <h1
            v-if="headline"
            class="title">
            {{ headline }}
          </h1>

          <PrismicRichText
            :field="content"
            class="title title--text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: String,
  headline: String,
  content: Object,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/hero/base";
  @import "@scss/components/slices/hero/text-only";
</style>