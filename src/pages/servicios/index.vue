<template>
  <main class="services" v-if="data">
    <SliceZone
      :slices="servicesData.slices"
      :components="{
        page_hero: PageHero,
        cards: Cards,
        accordion: Accordion,
        image_text_carousel: ImageTextCarousel,
        our_clients: LogosGrid,
        testimonials: Testimonials,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

// Import your slices
import Accordion from '@/slices/Accordion'
import Cards from '@/slices/Cards'
import LogosGrid from '@/slices/LogosGrid'
import ImageTextCarousel from '@/slices/ImageTextCarousel'
import PageHero from '@/slices/PageHero'
import Testimonials from '@/slices/Testimonials'

const { data } = await useAsyncData("[services]", () =>
  client.getSingle("services", {lang: iso})
);

const servicesData = data.value.data;
</script>

<style lang="scss" scoped>
  @import "@scss/pages/services";
</style>