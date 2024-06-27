<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <BannerCtaDefault
    v-if="slice.variation == 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :description="slice.primary.description"
    :buttonLabel="slice.primary.button_label"
    :buttonLink="slice.primary.button_link"
  />
</template>
