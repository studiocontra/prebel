<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CardsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <CardsDefault
    v-if="slice.variation == 'default'"
    :id="slice.id"
    :headline="slice.primary.headline"
    :cards="slice.items" />

  <CardsLargeImage
    v-if="slice.variation == 'largeImage'"
    :id="slice.id"
    :headline="slice.primary.headline"
    :cards="slice.items" />

  <CardsRounded
    v-if="slice.variation == 'rounded'"
    :id="slice.id"
    :headline="slice.primary.headline"
    :allLink="slice.primary.see_all_link"
    :allLabel="slice.primary.see_all_label"
    :cards="slice.items" />
</template>
