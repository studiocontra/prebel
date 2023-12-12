<template>
  <main class="single-services" v-if="data">
    <SliceZone
      :slices="singleServiceData.slices"
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
const route = useRoute();

// Import your slices
import Cards from '@/slices/Cards'
import PageHero from '@/slices/PageHero'
import Testimonials from '@/slices/Testimonials'

const { data } = await useAsyncData(
  `[single_service-uid-${route.params.uid}]`,
  () => client.getByUID("single_service", route.params.uid, {lang: locale.value}),
);

const singleServiceData = data.value.data;

// useHead({
//   title: data.value?.data.meta_title,
//   meta: [
//     {
//       name: "description",
//       content: data.value?.data.meta_description,
//     },
//   ],
// });
</script>

<style lang="scss" scoped>
  @import "@scss/pages/single-services";
</style>