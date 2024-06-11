<script setup lang="ts">

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
  <TextImageFull
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :image="slice.primary.image" />
</template>
