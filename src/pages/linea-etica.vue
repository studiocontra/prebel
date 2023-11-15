<template>
  <main class="etics" v-if="data">
    <EticsHero v-bind="eticsData.hero[0]" />

    <SliceZone
      :slices="eticsData.slices"
      :components="{
        callout_text_content: CalloutTextContent,
        text_block: TextBlock,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { locale, localeCodes } = useI18n();

// Import your slices
import CalloutTextContent from '@/slices/CalloutTextContent'
import TextBlock from '@/slices/TextBlock'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("linea_etica", {lang: locale.value})
);

const eticsData = data.value.data;
</script>