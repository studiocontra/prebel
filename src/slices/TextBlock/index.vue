<script setup lang="ts">

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <TextBlockDefault
    v-if="slice.variation == 'default'"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :textAlign="slice.primary.text_align"
    :buttonLink="slice.primary.button_link"
    :buttonLabel="slice.primary.button_label" />

  <TextBlockScroll
    v-if="slice.variation == 'scrollEffect'"
    :eyebrow="slice.primary.eyebrow"
    :content="slice.primary.content"
    :bgColor="slice.primary.background_color" />
</template>
