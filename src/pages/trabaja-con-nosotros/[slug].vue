<template>
  <main class="single-work" v-if="data">
    <SliceZone
      :slices="singleWorkData.slices"
      :context="data.uid"
      :components="{
        page_hero: PageHero,
        work_form: WorkForm
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const route = useRoute();
const { localeProperties } = useI18n();
const { value: { language, code } } = localeProperties;

// Import your slices
import PageHero from '@/slices/PageHero'
import WorkForm from '@/slices/WorkForm'

const { data } = await useAsyncData(
  `[single_work-uid-${route.params.uid}]`,
  () => client.getByUID("single_work", route.params.slug, {lang: language}),
);

const singleWorkData = data.value.data;


useHead({
  title: data.value?.data.meta_title || 'Prebel',
  meta: [
    {
      name: "description",
      content: data.value?.data.meta_description,
    },
  ],
});
</script>

<style lang="scss" scoped>
  @import "@scss/pages/single-work";
</style>