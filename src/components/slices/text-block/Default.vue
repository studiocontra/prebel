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

          <PrismicRichText
            v-if="content"
            :field="content"
            class="text"
            :class="textAlign" />

          <div
            v-if="buttonLabel"
            class="wrap-btn">
            <a class="btn btn--blue" :href="buttonLink.url">
              {{ buttonLabel }}
            </a>
          </div>
          <div
            v-if="buttonLabelTwo"
            class="wrap-btn">
            <a class="btn btn--blue" :href="buttonLinkTwo.url || '#'">
              {{ buttonLabelTwo }}
            </a>
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
  buttonLabelTwo: String,
  buttonLink: Object,
  buttonLinkTwo: Object,
  textAlign: String,
});

</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/text-block/default";
  @import "@scss/components/button.scss"
</style>