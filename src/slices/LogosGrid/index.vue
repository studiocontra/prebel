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
  <LogosGrid
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :data-id="slice.primary.data_id || slice.id"
    :eyebrow="slice.primary.eyebrow"
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :items="slice.items" />
</template>
