<template>
  <div class="text-block">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-10 col-lg-8">
          <span
            role="heading"
            v-if="eyebrow"
            class="eyebrow">
            {{ eyebrow }}
          </span>

          <h3
            v-if="headline"
            class="title">
            {{ headline }}
          </h3>

          <prismic-rich-text
            v-if="content"
            :field="content"
            class="text" />

          <div
            v-if="buttonLabel"
            class="wrap-btn">
            <Button :href="buttonLink || '#'" theme="dark">
              {{ buttonLabel }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: Object,
  eyebrow: String,
  headline: String,
  buttonLabel: String,
  buttonLink: Object,
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-block";
</style>