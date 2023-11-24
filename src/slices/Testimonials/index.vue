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
  <Testimonials
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :eyebrow="slice.primary.eyebrow"
    :items="slice.items"
  />
</template>
