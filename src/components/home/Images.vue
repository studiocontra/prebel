<template>
  <div class="section home__images">
    <div class="container">
      <div class="images">
        <div
          v-if="images[0].image"
          class="img img--square">
          <prismic-image :field="images[0].image" />
        </div>

        <div
          v-if="images[1].image"
          class="img img--pill">
          <prismic-image :field="images[1].image" />
        </div>

        <div class="shape shape--1"></div>

        <div class="shape shape--2"></div>

        <div
          v-if="images[2].image"
          class="img img--rectangle">
          <prismic-image :field="images[2].image" />
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
  images: [Array, Boolean]
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/home/images";
</style>