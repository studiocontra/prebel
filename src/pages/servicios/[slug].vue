<template>
  <main class="single-services" v-if="data">
    <SliceZone
      :slices="singleServiceData.slices"
      :components="{
        page_hero: PageHero,
        text_images_shapes: TextImagesShape,
        our_clients: Logosgrid,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const route = useRoute();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

// Import your slices
import Logosgrid from '@/slices/LogosGrid'
import PageHero from '@/slices/PageHero'
import TextImagesShape from '@/slices/TextImagesShape'

const { data } = await useAsyncData(
  `[single_service-uid-${route.params.slug}]`,
  () => client.getByUID("single_service", route.params.slug, {lang:iso}),
);

const singleServiceData = data.value.data;

useHead({
  title: data.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: data.value?.data.meta_description,
    },
  ],
});
</script>

<style lang="scss" scoped>
  @import "@scss/pages/single-services";
</style>