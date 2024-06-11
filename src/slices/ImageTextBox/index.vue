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
  <ImageTextBox
    :id="slice.id"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :slides="slice.items" />
</template>
