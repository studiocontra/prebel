<template>
  <div class="principles">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-10 col-lg-8">
          <div
            v-if="headline"
            class="title">
            {{ headline }}
          </div>

          <prismic-rich-text
            v-if="content"
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