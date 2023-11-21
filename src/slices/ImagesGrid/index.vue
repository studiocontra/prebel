<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImagesGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <ImagesGrid
    :id="slice.id"
    :image1="slice.primary.image_1"
    :image2="slice.primary.image_2"
    :image3="slice.primary.image_3" />
</template>
