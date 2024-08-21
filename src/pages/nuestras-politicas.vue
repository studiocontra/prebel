<template>
  <main class="etics" v-if="data">
    <SliceZone
      :slices="eticsData.slices"
      :components="{
        page_hero: PageHero,
        callout_text_content: CalloutTextContent,
        text_block: TextBlock,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

// Import your slices
import CalloutTextContent from '@/slices/CalloutTextContent'
import PageHero from '@/slices/PageHero'
import TextBlock from '@/slices/TextBlock'

const { data } = await useAsyncData("[linea_etica]", () =>
  client.getSingle("linea_etica", {lang: language})
);

const eticsData = data.value.data;
</script>
