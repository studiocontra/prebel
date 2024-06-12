<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ItemsImageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <ItemsImage
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :image="slice.primary.image"
    :items="slice.primary.items" />
</template>
