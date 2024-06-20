<script setup lang="ts">
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>

<template>
  <TextImagesShapeLogos
    v-if="slice.variation === 'wIthLogos'"
    :variation="slice.variation"
    :id="slice.primary.data_id || slice.id"
    :data="slice.primary"
  />
  <TextImagesShapeDefault
    v-else
    :variation="slice.variation"
    :data="slice.primary"
  />
</template>
