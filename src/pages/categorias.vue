<template>
  <main v-if="data" class="main-categorias">
    <SliceZone
      :slices="categoriasData.slices"
      :components="{
        text_images_shapes: TextImagesShape,
      }" />
  </main>
</template>

<script setup>
const { client } = usePrismic();
const { localeProperties } = useI18n();
const { value: { iso, code } } = localeProperties;

import { useHeaderStore } from '@/stores/header';
const headerStore = useHeaderStore();

// Import your slices
import TextImagesShape from '@/slices/TextImagesShape'

const { data } = await useAsyncData("[categorias]", () =>
  client.getSingle("categorias", {lang: iso})
);

const categoriasData = data.value.data;

onMounted(() => headerStore.setTheme('dark'));
</script>

<style lang="scss" scoped>
  @import "@scss/pages/categorias";
</style>