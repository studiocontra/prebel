<template>
  <div class="section home__img-text">
    <div class="container">
      <div class="row align-center">
        <div class="col-lg-6">
          <div class="img">
            <prismic-image :field="image" />

            <Drop
              maxW="200px"
              :parallax="-7"
              workspace=".home__img-text" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <span class="eyebrow">
              {{ eyebrow }}
            </span>

            <h2 class="title">
              {{ headline }}
            </h2>

            <prismic-rich-text
              :field="content"
              class="title text" />

            <Button>
              Conoce más
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eyebrow: String,
  headline: String,
  content: Array,
  image: Object
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/home/image-text";
</style>