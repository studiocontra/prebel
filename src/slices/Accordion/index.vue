<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AccordionSlice>([
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
    :id="slice.id"
    :headline="slice.primary.headline"
    :description="slice.primary.description"
    :items="slice.items" />

  <AccordionDefault
    v-if="slice.variation == 'default'"
    :id="slice.id"
    :headline="slice.primary.headline"
    :items="slice.items" />
</template>
