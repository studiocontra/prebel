<template>
  <main class="about" v-if="data">
    <SliceZone
      :slices="aboutData.slices"
      :components="{
        accordion: Accordion,
        images_grid: ImagesGrid,
        image_text: ImageText,
        image_text_box: ImageTextBox,
        image_text_carousel: ImageTextCarousel,
        locations_map: LocationsMap,
        page_hero: PageHero,
        text_block: TextBlock,
        text_cards: TextCards,
        text_images_shapes: TextImagesShape,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;
const headerStore = useHeaderStore();

// Import your slices
import Accordion from '@/slices/Accordion'
import ImagesGrid from '@/slices/ImagesGrid'
import ImageText from '@/slices/ImageText'
import ImageTextBox from '@/slices/ImageTextBox'
import ImageTextCarousel from '@/slices/ImageTextCarousel'
import LocationsMap from '@/slices/LocationsMap'
import PageHero from '@/slices/PageHero'
import TextBlock from '@/slices/TextBlock'
import TextCards from '@/slices/TextCards'
import TextImagesShape from '@/slices/TextImagesShape'

const { data } = await useAsyncData("[about]", () =>
  client.getSingle("about", {lang: iso})
);

const aboutData = data.value.data;

headerStore.value = aboutData.header_color_scheme.toLowerCase();
</script>

<style lang="scss" scoped>
  @import "@scss/pages/about";
</style>