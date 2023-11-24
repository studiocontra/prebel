<template>
  <div class="hero">
    <Drop
      maxW="300px"
      :parallax="-12" />
    <div class="container">
      <div class="row align-center">
        <div class="col-lg-6">
          <h1>
            <prismic-rich-text
              :field="content"
              class="title" />
          </h1>
        </div>
        <div class="col-lg-6">
          <div class="hero__image">
            <prismic-image :field="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  image: Object,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/hero";
  @import "@scss/components/services/hero";
</style>