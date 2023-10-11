<template>
  <main class="homepage" v-if="data">
    <HomeHero v-bind="homeData.hero[0]" />
    <HomeNews :slides="homeData.news" />
    <HomeServices />
    <HomeImages :images="homeData.images" />
    <HomeAccordion />
    <HomeImageText />
  </main>
</template>

<script setup>
const { client } = usePrismic();

const { data } = await useAsyncData("[home]", () =>
  client.getSingle("home")
);

const homeData = data.value.data
</script>
