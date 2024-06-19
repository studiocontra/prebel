<script setup lang="ts">
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <AccordionHeadlineDescription
    v-if="slice.variation == 'headlineAndDescription'"
    :id="slice.primary.data_id || slice.id"
    :headline="slice.primary.headline"
    :description="slice.primary.description"
    :image="slice.primary.main_image"
    :items="slice.items" />

  <AccordionDefault
    v-if="slice.variation == 'default'"
    :id="slice.primary.data_id || slice.id"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :introduction="slice.primary.introduction"
    :items="slice.items" />
</template>
