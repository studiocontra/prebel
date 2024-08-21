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
        locations_map: LocationsMap,
        page_hero: PageHero,
        services_slider: ServicesSlider,
        video: Video,
      }"
    />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const {
  value: { language, code },
} = localeProperties;

import { useHeaderStore } from "@/stores/header";

const headerStore = useHeaderStore();

// Import your slices
import Accordion from "@/slices/Accordion";
import Cards from "@/slices/Cards";
import LogosGrid from "@/slices/LogosGrid";
import LogosCarousel from "@/slices/LogosCarousel";
import ImagesGrid from "@/slices/ImagesGrid";
import ImageText from "@/slices/ImageText";
import LocationsMap from "@/slices/LocationsMap";
import PageHero from "@/slices/PageHero";
import ServicesSlider from "@/slices/ServicesSlider";
import Video from '@/slices/Video'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {
    lang: language,
    pageSize: 5
   })
);

console.log('iso', language);


const homeData = data.value?.data;
onMounted(() =>
  headerStore.setTheme(homeData.header_color_scheme.toLowerCase())
);

/** SEO */
useSeoMeta({
  title: homeData["meta_title"],
  description: homeData["meta_description"],
  ogImage: homeData["meta_image"],
});
</script>
