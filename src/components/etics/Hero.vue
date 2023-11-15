<template>
  <div class="hero hero--etics">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-10">
          <h1 class="title">
            {{ headline }}
          </h1>

          <prismic-rich-text
            :field="content"
            class="title title--text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  content: Object,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/etics/hero";
</style>