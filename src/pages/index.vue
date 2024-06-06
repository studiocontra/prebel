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
        cards: Cards,
        our_clients: LogosGrid,
        logos_carousel: LogosCarousel,
        locations_map: LocationsMap,
        image_text: ImageText,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;
const store = useHeaderStore();

// Import your slices
import Accordion from '@/slices/Accordion'
import Cards from '@/slices/Cards'
import LogosGrid from '@/slices/LogosGrid'
import LogosCarousel from '@/slices/LogosCarousel'
import ImageText from '@/slices/ImageText'
import ImageTextBox from '@/slices/ImageTextBox'
import ImagesGrid from '@/slices/ImagesGrid'
import LocationsMap from '@/slices/LocationsMap'
import PageHero from '@/slices/PageHero'
import ServicesSlider from '@/slices/ServicesSlider'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {lang: iso})
);

const homeData = data.value?.data;

onMounted(() => {
  store.value = homeData.header_color_scheme.toLowerCase();
});
</script>
