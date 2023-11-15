<template>
  <div class="principles">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-10 col-lg-8">
          <div class="title">
            {{ headline }}
          </div>

          <prismic-rich-text
          :field="content"
          class="text" />
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
  @import "@scss/components/etics/principles";
</style>