<template>
  <main class="homepage" v-if="data">
    <SliceZone
      :slices="homeData.slices"
      :components="{
        page_hero: PageHero,
        image_text_box: ImageTextBox,
        services_slider: ServicesSlider,
        images_grid: ImagesGrid,
        accordion: Accordion,
        image_text: ImageText,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { locale, localeCodes } = useI18n();

// Import your slices
import Accordion from '@/slices/Accordion'
import ImageText from '@/slices/ImageText'
import ImageTextBox from '@/slices/ImageTextBox'
import ImagesGrid from '@/slices/ImagesGrid'
import PageHero from '@/slices/PageHero'
import ServicesSlider from '@/slices/ServicesSlider'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {lang: locale.value})
);

const homeData = data.value.data;
</script>
