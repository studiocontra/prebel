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
  <CalloutText
    :headline="slice.primary.headline"
    :content="slice.primary.content"
    :buttonLabel="slice.primary.button_label"
    :buttonLink="slice.primary.button_link"
   />
</template>
