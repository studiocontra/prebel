<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextBlockSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <TextBlock
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :textAlign="slice.primary.text_align"
    :buttonLink="slice.primary.button_link"
    :buttonLabel="slice.primary.button_label" />
</template>
