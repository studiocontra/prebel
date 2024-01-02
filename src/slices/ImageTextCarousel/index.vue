<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageTextCarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <ImageTextCarousel
    :id="slice.id"
    :showIndex="slice.primary.show_index"
    :headline="slice.primary.eyebrow"
    :slides="slice.items" />
</template>
