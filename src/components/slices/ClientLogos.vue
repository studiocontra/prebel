<template>
  <div class="services-clients">
    <div class="container">
      <div class="clients__headline">
        <h2 class="eyebrow">
          {{ eyebrow }}
        </h2>

        <h3 class="title">
          {{ headline }}
        </h3>

        <prismic-rich-text
          :field="content"
          class="text" />
      </div>


      <div class="row justify-center">
        <template v-for="(logo, id) in items" :key="id">
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xt-1">
            <div class="single-logo">
              <prismic-image :field="logo.logo" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eyebrow: String,
  headline: String,
  content: Object,
  items: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/services/clients";
</style>