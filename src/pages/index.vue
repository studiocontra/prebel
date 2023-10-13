<template>
  <main class="homepage" v-if="data">
    <HomeHero v-bind="homeData.hero[0]" />
    <HomeNews :slides="homeData.news" />
    <HomeServices />
    <HomeImages :images="homeData.images" />
    <HomeAccordion
      :headline="homeData.facts_headline"
      :description="homeData.facts_description"
      :items="homeData.facts_items" />
    <HomeImageText v-bind="homeData.about[0]" />
  </main>
</template>

<script setup>
const { client } = usePrismic();

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home")
);

const homeData = data.value.data
// console.log(data.value.lang);
</script>
