<template>
  <main class="sustainability" v-if="data">
    <SliceZone
      :slices="sustainabilityData.slices"
      :components="{
        page_hero: PageHero,
        text_image_full: TextImageFull,
        text_block: TextBlock,
        text_images_shapes: TextImagesShape,
        image_text: ImageText,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

// Import your slices
import ImageText from '@/slices/ImageText'
import PageHero from '@/slices/PageHero'
import TextBlock from '@/slices/TextBlock'
import TextImageFull from '@/slices/TextImageFull'
import TextImagesShape from '@/slices/TextImagesShape'

const { data } = await useAsyncData("[sustainability]", () =>
  client.getSingle("sustainability", {lang: iso})
);

const sustainabilityData = data.value.data;
</script>

<style lang="scss" scoped>
  @import "@scss/pages/sustainability";
</style>