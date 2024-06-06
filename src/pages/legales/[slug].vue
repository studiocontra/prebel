<template>
  <main class="etics" v-if="data">
    <SliceZone
      :slices="pageData.slices"
      :components="{
        page_hero: PageHero,
        text_block: TextBlock,
      }" />
  </main>
</template>

<script setup>
// Import your slices
import PageHero from '@/slices/PageHero'
import TextBlock from '@/slices/TextBlock'

const { client } = usePrismic();
const route = useRoute();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

console.log(route.params.slug);

const { data } = useAsyncData(`[legales-uid-${route.params.slug}]`, () =>
  client.getByUID("legales", route.params.slug, {lang: iso}),
);

const pageData = data.value.data;
console.log(pageData);
</script>
