<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PageHeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <HeroHomepage
    v-if="slice.variation == 'home'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :content="slice.primary.content" />
  <HeroTextOnly
    v-if="slice.variation == 'text'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :content="slice.primary.content" />

  <HeroImageText
    v-if="slice.variation == 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :image="slice.primary.image"
    :content="slice.primary.content" />
</template>
