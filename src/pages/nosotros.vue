<template>
  <main class="about" v-if="data">
    <SliceZone
      :slices="aboutData.slices"
      :components="{
        accordion: Accordion,
        images_grid: ImagesGrid,
        image_text: ImageText,
        image_text_carousel: ImageTextCarousel,
        items_image: ItemsImage,
        locations_map: LocationsMap,
        page_hero: PageHero,
        tabs_image_data: TabsImageData,
        text_block: TextBlock,
        text_cards: TextCards,
        text_images_shapes: TextImagesShape,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

import { useHeaderStore } from '@/stores/header';
const headerStore = useHeaderStore();

// Import your slices
import Accordion from '@/slices/Accordion'
import ImagesGrid from '@/slices/ImagesGrid'
import ImageText from '@/slices/ImageText'
import ImageTextCarousel from '@/slices/ImageTextCarousel'
import ItemsImage from '@/slices/ItemsImage'
import LocationsMap from '@/slices/LocationsMap'
import PageHero from '@/slices/PageHero'
import TabsImageData from '@/slices/TabsImageData'
import TextBlock from '@/slices/TextBlock'
import TextCards from '@/slices/TextCards'
import TextImagesShape from '@/slices/TextImagesShape'

const { data } = await useAsyncData("[about]", () =>
  client.getSingle("about", {lang: language})
);

const aboutData = data.value.data;

onMounted(() => headerStore.setTheme(aboutData.header_color_scheme.toLowerCase()));
</script>

<style lang="scss" scoped>
  @import "@scss/pages/about";
</style>