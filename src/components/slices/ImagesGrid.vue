<template>
  <div class="section home__images">
    <div class="container">
      <div class="images">
        <div
          v-if="image1"
          class="img img--square">
          <prismic-image :field="image1" />
        </div>

        <div
          v-if="image2"
          class="img img--pill">
          <prismic-image :field="image2" />
        </div>

        <div class="shape shape--1"></div>

        <div class="shape shape--2"></div>

        <div
          v-if="image3"
          class="img img--rectangle">
          <prismic-image :field="image3" />
        </div>

        <Drop
          class="drop--1"
          maxW="270px"
          :parallax="5" />

        <Drop
          class="drop--2"
          maxW="150px"
          :parallax="-2" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image1: [Object, Boolean],
  image2: [Object, Boolean],
  image3: [Object, Boolean]
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/home/images";
</style>