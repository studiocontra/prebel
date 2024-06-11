<template>
  <main class="homepage">
    <SliceZone
      :slices="homeData.slices"
      :components="{
        accordion: Accordion,
        cards: Cards,
        our_clients: LogosGrid,
        logos_carousel: LogosCarousel,
        images_grid: ImagesGrid,
        image_text: ImageText,
        image_text_box: ImageTextBox,
        locations_map: LocationsMap,
        page_hero: PageHero,
        services_slider: ServicesSlider,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

import { useHeaderStore } from '@/stores/header';

const headerStore = useHeaderStore();

definePageMeta({
  layout: 'homepage'
})

// Import your slices
import Accordion from '@/slices/Accordion'
import Cards from '@/slices/Cards'
import LogosGrid from '@/slices/LogosGrid'
import LogosCarousel from '@/slices/LogosCarousel'
import ImagesGrid from '@/slices/ImagesGrid'
import ImageText from '@/slices/ImageText'
import ImageTextBox from '@/slices/ImageTextBox'
import LocationsMap from '@/slices/LocationsMap'
import PageHero from '@/slices/PageHero'
import ServicesSlider from '@/slices/ServicesSlider'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {lang: iso})
);

const homeData = data.value?.data;
onMounted(() => headerStore.setTheme(homeData.header_color_scheme.toLowerCase()));
</script>
