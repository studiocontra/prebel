<template>
  <div class="hero hero--home">
    <div class="hero--home__bg">
      <prismic-image :field="bgImage" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-xx-7">
          <h1 class="title title--lg">
            {{ headline }}
          </h1>

          <div class="row">
            <div class="col-lg-9">
              <PrismicRichText :field="content" class="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const props = defineProps({
  headline: String,
  content: Object,
  bgImage: {
    type: [Object, Boolean],
    default: null,
  },
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/hero/base";
@import "@scss/components/slices/hero/homepage";
</style>
