<template>
  <main class="work" v-if="data">
    <SliceZone
      :slices="workData.slices"
      :components="{
        page_hero: PageHero,
        cards: Cards,
        testimonials: Testimonials,
        text_block: TextBlock,
      }" />
      <PreFooter />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

// Import your slices
import Cards from '@/slices/Cards'
import PageHero from '@/slices/PageHero'
import Testimonials from '@/slices/Testimonials'
import TextBlock from '@/slices/TextBlock'

const { data } = await useAsyncData("[work]", () =>
  client.getSingle("work", {lang: language})
);

const workData = data.value.data;
</script>
