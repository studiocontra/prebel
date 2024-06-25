<template>
  <main class="section payment-methods">
    <div class="container">
      <h1 class="title title--lg">
        {{ headline }}
      </h1>

      <PrismicRichText
        :field="description"
        class="text" />

      <div class="row justify-evenly align-center">
        <template v-for="(method, id) in items" :key="id">
          <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xt-1">
            <div class="single-logo">
              <NuxtLink :to="method.link.url" :target="method.link.target" external>
                <prismic-image :field="method.logo" />
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  dataSliceVariation: String,
  headline: String,
  description: Object,
  items: [Array, Boolean],
});
</script>

<style lang="scss" scoped>
  @import "@scss/components/slices/payment-methods";
</style>