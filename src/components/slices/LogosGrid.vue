<template>
  <div class="logos-grid" id="our_clients">
    <div class="container">
      <div v-if="isBlue" class="box">
        <div class="logos-grid__headline">
          <h2 class="eyebrow">
            {{ eyebrow }}
          </h2>

          <h3 class="title">
            {{ headline }}
          </h3>

          <PrismicRichText :field="content" class="text" />
        </div>

        <div class="row justify-between align-center">
          <template v-for="(logo, id) in items" :key="id">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xt-1">
              <div class="single-logo">
                <prismic-image :field="logo.logo" />
              </div>
            </div>
          </template>
        </div>
      </div>

      <template v-else>
        <div class="logos-grid__headline">
          <h2 class="eyebrow">
            {{ eyebrow }}
          </h2>

          <h3 class="title">
            {{ headline }}
          </h3>

          <PrismicRichText :field="content" class="text" />
        </div>

        <div class="row justify-center align-center">
          <template v-for="(logo, id) in items" :key="id">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xt-1">
              <div class="single-logo">
                <prismic-image :field="logo.logo" />
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataSliceVariation: String,
  eyebrow: String,
  headline: String,
  content: Object,
  items: [Array, Boolean],
  dataId: {
    type: String,
    default: ''
  },
});

const isBlue = computed(() => {
  return (props.dataSliceVariation === 'blueBackground');
})
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/logos-grid";
</style>