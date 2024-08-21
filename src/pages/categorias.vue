<template>
  <main v-if="data" class="main-categorias">
    <SliceZone
      :slices="categoriasData.slices"
      :components="{
        text_images_shapes: TextImagesShape,
      }"
    />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const {
  value: { language, code },
} = localeProperties;

import { useHeaderStore } from "@/stores/header";
const headerStore = useHeaderStore();

// Import your slices
import TextImagesShape from "@/slices/TextImagesShape";

const { data } = await useAsyncData("[categorias]", () =>
  client.getSingle("categorias", { lang: language })
);

const categoriasData = data.value.data;

onMounted(() => headerStore.setTheme("dark"));

/** SEO */
useSeoMeta({
  title: categoriasData["meta_title"],
  description: categoriasData["meta_description"],
  ogImage: categoriasData["meta_image"],
});
</script>

<style lang="scss" scoped>
@import "@scss/pages/categorias";
</style>
