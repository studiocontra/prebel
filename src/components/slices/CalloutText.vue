<template>
  <div class="report">
    <div class="container">
      <div class="report__box">
        <div class="row justify-between">
          <div class="col-lg-5 col-xl-4">
            <p class="title">
              {{ headline }}
            </p>
          </div>

          <div class="col-lg-5">
            <PrismicRichText :field="content" class="text" />

            <div class="ctas">
              <div v-if="buttonLabel" class="wrap-btn">
                <a class="btn btn--dark" :href="buttonLink.url">
                  {{ buttonLabel }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headline: String,
  content: Object,
  buttonLink: Object,
  buttonLabel: String
});
</script>

<style lang="scss" scoped>
@import "@scss/components/etics/report";
@import "@scss/components/button.scss";
</style>