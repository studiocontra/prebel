<template>
  <main class="work" v-if="data">
    <SliceZone
      :slices="workData.slices"
      :components="{
        page_hero: PageHero,
        cards: Cards,
        testimonials: Testimonials,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { locale, localeCodes } = useI18n();

// Import your slices
import Cards from '@/slices/Cards'
import PageHero from '@/slices/PageHero'
import Testimonials from '@/slices/Testimonials'

const { data } = await useAsyncData("[work]", () =>
  client.getSingle("work", {lang: locale.value})
);

const workData = data.value.data;
</script>
