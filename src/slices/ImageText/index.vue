<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <ImageTextDefault
    v-if="slice.variation == 'default'"
    :id="slice.id"
    :slides="slice.items" />

  <ImageTextWide
    v-if="slice.variation == 'imageWide'"
    :id="slice.id"
    :slides="slice.items" />
</template>
