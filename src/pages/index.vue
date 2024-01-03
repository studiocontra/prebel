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
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

// Import your slices
import Accordion from '@/slices/Accordion'
import ImageText from '@/slices/ImageText'
import ImageTextBox from '@/slices/ImageTextBox'
import ImagesGrid from '@/slices/ImagesGrid'
import PageHero from '@/slices/PageHero'
import ServicesSlider from '@/slices/ServicesSlider'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {lang: iso})
);

const homeData = data.value.data;
</script>
