<template>
  <main class="homepage" v-if="data">
    <HomeHero v-bind="homeData.hero[0]" />
    <HomeNews :slides="homeData.news" />
    <HomeServices />
    <HomeImages :images="homeData.images" />
    <!-- <HomeAccordion
      :headline="homeData.facts_headline"
      :description="homeData.facts_description"
      :items="homeData.facts_items" /> -->
    <SliceZone
      :slices="homeData.slices"
      :components="{
        key_facts: KeyFacts,
      }" />

    <HomeImageText v-bind="homeData.about[0]" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { locale, localeCodes } = useI18n();

// Import your slices
import KeyFacts from '@/slices/KeyFacts'

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home", {lang: locale.value})
);

const homeData = data.value.data;
// console.log(data.value);
</script>
