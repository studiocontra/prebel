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
  <LogosCarousel
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :headline="slice.primary.headline"
    :items="slice.items" />
</template>
