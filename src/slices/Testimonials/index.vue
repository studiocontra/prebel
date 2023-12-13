<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <TestimonialsText
    v-if="slice.variation === 'default'"
    :eyebrow="slice.primary.eyebrow"
    :items="slice.items"
  />
  <TestimonialsVideo
    v-if="slice.variation === 'video'"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :items="slice.items"
  />
</template>
