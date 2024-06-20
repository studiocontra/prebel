<template>
  <div
    class="section text-images-shape"
    :class="`text-images-shape--${props.data.orientation}`"
  >
    <Drop
      :maxW="variation == 'default' ? '290px' : '150px'"
      :parallax="3"
      data-scroll-show
    />

    <div class="container">
      <div class="row align-center justify-between" :class="orientation">
        <div class="col-md-6">
          <div class="content" :data-scroll-show="props.data.orientation">
            <span v-if="data.eyebrow" class="eyebrow">
              {{ data.eyebrow }}
            </span>

            <h2 v-if="data.headline" class="title">
              {{ data.headline }}
            </h2>

            <PrismicRichText :field="data.content" class="title title--sm" />

            <div class="wrap-logos">
              <h3 v-if="data.logos_headline" class="eyebrow">
                {{ data.logos_headline }}
              </h3>

              <div v-if="data.logos" class="logos">
                <prismic-image
                  v-for="(logo, id) in data.logos"
                  :key="id"
                  :field="logo.logo" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="images images--double">
            <div class="img img--1 img--pill" data-scroll-show>
              <prismic-image :field="data.image_1" />
            </div>
            <div
              v-if="data.image_2"
              class="img img--square img--2"
              data-scroll-show
            >
              <prismic-image :field="data.image_2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  data: [Object, Boolean],
  variation: String,
});

const orientation = computed(() => {
  return props.data.orientation === "right" && "md-reverse";
});
</script>

<style lang="scss" scoped>
@import "@scss/components/slices/text-images-shape/logos";
</style>
